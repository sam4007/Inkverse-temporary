import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-blue-700 justify-center items-center rounded-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col gap-2 pt-2">
                <h2 className='text-2xl'>
                    Interested in publishing your own blogs and earning revenue?
                </h2>
                <p className='text-gray-500 my-2'>
                    Are you interested in writing blogs and sharing your thoughts? Join us and earn revenue from your posts.
                </p>

                <Link to={'/projects'} target='_blank' rel='noopener noreferrer'>
                    <Button gradientDuoTone='purpleToBlue' className='w-full rounded-xl'>
                        Join us
                    </Button>
                </Link>

            </div>
            <div className="p-7 flex-1">
                <img src="https://emarketinghacks.com/wp-content/uploads/2021/10/How-To-Start-A-Successful-Blog-2021.png" className='w-full object-cover rounded-md' />
            </div>
        </div>
    )
}