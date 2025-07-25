import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function UpdatePost() {
    const [file, setFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setImageUploadError] = useState(null);
    const [formData, setFormData] = useState({});
    const [publishError, setPublishError] = useState(null);
    const { postId } = useParams();

    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        try {
            const fetchPost = async () => {
                const res = await fetch(`/api/post/getposts?postId=${postId}`);
                const data = await res.json();
                if (!res.ok) {
                    console.log(data.message);
                    setPublishError(data.message);
                    return;
                }
                if (res.ok) {
                    setPublishError(null);
                    setFormData(data.posts[0]);
                }
            };
            fetchPost();
        } catch (error) {
            console.log(error.message);
        }
    }, [postId]);

    const handleUploadImage = async () => {
        try {
            if (!file) {
                setImageUploadError('Please select an image to upload');
                return;
            }
            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                    setImageUploadError('Image upload failed. Please try again!');
                    setImageUploadProgress(null);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUploadProgress(null);
                        setImageUploadError(null);
                        setFormData({ ...formData, image: downloadURL });
                    }
                    );
                }
            );
        } catch (error) {
            setImageUploadError('Image upload failed. Please try again!');
            setImageUploadProgress(null);
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/post/updatepost/${formData._id}/${currentUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setPublishError(data.message);
                return;
            }

            if (res.ok) {
                setPublishError(null);
                navigate(`/post/${data.slug}`);
            }
        } catch (error) {
            setPublishError('Failed to create post. Please try again!');
        }
    };

    return (
        <div className='p-3 max-w-7xl mx-auto min-h-screen'>
            <h1 className='text-center text-5xl my-7 font-bold'>Update post</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                    <TextInput type='text' placeholder='Title' required id='title' className='flex-1' onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} />
                    <Select onChange={(e) => setFormData({ ...formData, category: e.target.value })} value={formData.category}>
                        <option value={'uncategorized'}>Select a category</option>
                        <option value={'science-technology'}>Science & Technology</option>
                        <option value={'travel-lifestyle'}>Travel & Lifestyle</option>
                        <option value={'health-wellness'}>Health & Wellness</option>
                        <option value={'food-recipes'}>Food & Recipes</option>
                        <option value={'business-finance'}>Business & Finance</option>
                        <option value={'entertainment-culture'}>Entertainment & Culture</option>
                        <option value={'education-learning'}>Education & Learning</option>
                        <option value={'opinion-current-affairs'}>Opinion & Current Affairs</option>
                        <option value={'creative-arts'}>Creative Arts</option>
                        <option value={'reviews-recommendations'}>Reviews & Recommendations</option>
                        <option value={'others'}>Others...</option>
                    </Select>
                </div>
                <div className='flex gap-4 items-center justify-between border-2 border-blue-500 p-3 rounded-xl'>
                    <FileInput type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
                    <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline onClick={handleUploadImage} disabled={imageUploadProgress}>
                        {
                            imageUploadProgress ? (
                                <div className='w-16 h-16'>
                                    <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} strokeWidth={5}
                                        styles={{
                                            root: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 },
                                            path: { stroke: `rgba(56,176,0,${imageUploadProgress / 100})` },
                                            text: { fill: 'rgba(56,176,0)', fontSize: '20px' }
                                        }} />
                                </div>
                            ) : ('Upload Image')
                        }
                    </Button>
                </div>
                {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
                {formData.image && (
                    <img
                        src={formData.image}
                        alt='upload'
                        className='w-full h-80 object-cover'
                    />
                )
                }
                <ReactQuill theme='snow' value={formData.content} placeholder='write something...' className='h-72 mb-12 text-black dark:text-white' required onChange={(value) => setFormData({ ...formData, content: value })} />
                <Button type='submit' gradientDuoTone='purpleToPink'>Update</Button>
                {publishError && <Alert className='mt-5' color='failure'>{publishError}</Alert>}
            </form>
        </div>
    );
};
