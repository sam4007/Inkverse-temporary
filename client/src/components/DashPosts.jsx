import { Modal, Table, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { set } from 'mongoose';

export default function DashPosts() {
    const { currentUser } = useSelector((state) => state.user);
    const [userPosts, setUserPosts] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [postIdToDelete, setPostIdToDelete] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
                const data = await res.json();
                if (res.ok) {
                    setUserPosts(data.posts);
                    if(data.posts.length < 9) {
                        setShowMore(false);
                    }
                }
            }
            catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser.isAdmin) {
            fetchPosts();
        }
    }, [currentUser._id]);

    const handleShowMore = async () => {
        const startIndex = userPosts.length;
        try{
            const res = await fetch(`/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`);
            const data = await res.json();
            if(res.ok) {
                setUserPosts([...userPosts, ...data.posts]);
                if(data.posts.length < 9) {
                    setShowMore(false);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDeletePost = async () => {
        setShowModal(false);
        try {
            const res = await fetch(`/api/post/deletepost/${postIdToDelete}/${currentUser._id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                setUserPosts((prev) => prev.filter((post) => post._id !== postIdToDelete));
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className=' w-full table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
            {currentUser.isAdmin && userPosts.length > 0 ? (
                <>
                    <Table hoverable className='shadow-md'>
                        <Table.Head>
                            <Table.HeadCell className='text-center underline underline-offset-2 pt-8 text-blue-800 dark:text-blue-600 border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>Date updated</Table.HeadCell>
                            <Table.HeadCell className='text-center underline underline-offset-2 pt-8 text-blue-800 dark:text-blue-600 border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>Post image</Table.HeadCell>
                            <Table.HeadCell className='text-center underline underline-offset-2 pt-8 text-blue-800 dark:text-blue-600 border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>Post title</Table.HeadCell>
                            <Table.HeadCell className='text-center underline underline-offset-2 pt-8 text-blue-800 dark:text-blue-600 border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>Category</Table.HeadCell>
                            <Table.HeadCell className='text-center underline underline-offset-2 pt-8 text-blue-800 dark:text-blue-600 border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>Delete</Table.HeadCell>
                            <Table.HeadCell className='text-center underline underline-offset-2 pt-8 text-blue-800 dark:text-blue-600 border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>
                                <span>Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        {userPosts.map((post) => (
                            <Table.Body className='divide-y'>
                                <Table.Row className='border-[rgb(195,221,253)] dark:border-[rgb(18,18,18)] bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]'>
                                    <Table.Cell>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/post/${post.slug}`} className='flex items-center gap-2'>
                                            <img src={post.image} alt={post.title} className='w-20 h-10 object-cover bg-gray-500 rounded-md' />
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/post/${post.slug}`} className='font-medium text-gray-900 dark:text-white'>
                                            {post.title}
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>{post.category}</Table.Cell>
                                    <Table.Cell>
                                        <span className='font-medium text-red-500 hover:underline cursor-pointer' onClick={() => {
                                            setShowModal(true);
                                            setPostIdToDelete(post._id);
                                        }}>
                                            Delete
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link className='text-green-500 hover:underline' to={`/update-post/${post._id}`}>
                                            <span>
                                                Edit
                                            </span>
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        ))}
                    </Table>
                    {showMore && (
                        <button className='w-full text-blue-600 self-center text-sm py-7 hover:underline' onClick={handleShowMore}>
                            show more...
                        </button>   
                    )}
                </>
            ) : (
                <p>You have no posts yet!</p>
            )}

            <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md' >
                <Modal.Header />
                <Modal.Body>
                  <div className='text-center'>
                    <HiOutlineExclamationCircle className='h-14 w-14 text-red-600 text-5xl mb-4 mx-auto' />
                    <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>Are you sure you want to delete this post?</h3>
                    <div className='flex justify-center gap-4'>
                      <Button color='failure' onClick={handleDeletePost} >Yes, I'm sure!</Button>
                      <Button color='green' onClick={() => setShowModal(false)}>No, Cancel</Button>
                    </div>
                  </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

