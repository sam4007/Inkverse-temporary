import React from 'react'
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>


      <section className="bg-center bg-no-repeat bg-[url('https://static.vecteezy.com/system/resources/previews/021/554/938/non_2x/illustration-of-creative-web-design-creative-concept-for-web-banner-social-media-banner-business-presentation-marketing-material-vector.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Discover Boundless Stories and Insights</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to Inkverse, your ultimate destination for diverse and captivating content. Our mission is to bring together a universe of stories, insights, and experiences from every corner of the globe, catering to all your interests and passions. Whether you are a tech enthusiast, a travel aficionado, a fiction lover, or someone who enjoys a bit of everything, Inkverse has something special for you.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/search" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Explore
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="/about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto' >
        <div className='text-3xl font-bold lg:text-6xl text-black dark:text-white'>Welcome to <span className='text-blue-600'>Ink</span><span className=' text-black dark:text-white'>verse:</span></div>
        <h2 className='text-1xl font-bold lg:text-2xl text-blue-600 dark:text-blue-600'>Your Go-To Portal to a Multiverse of Content</h2>
        <p className='text-gray-500 text-md'>
          At Inkverse, we believe that stories have the power to connect, inspire, and transform. Our platform is a haven for readers and writers alike, offering a diverse array of content that spans every genre imaginable. Whether you're a tech enthusiast looking to stay updated with the latest advancements, a travel aficionado eager to explore new destinations, or a fiction lover ready to dive into captivating narratives, Inkverse has something for everyone.
        </p>
        <p className='text-gray-500 text-md'>
          Our meticulously curated categories ensure that there's always something new and exciting to discover. From insightful articles on health and wellness to thought-provoking pieces on lifestyle and culture, our content is designed to inform, entertain, and engage. We pride ourselves on delivering high-quality, well-researched articles that you can trust.
        </p>
        <p className='text-gray-500 text-md'>
          Inkverse is more than just a blogging site; it's a community of passionate individuals who love to share their stories and insights. Our user-friendly interface makes it easy to navigate through different sections, ensuring a seamless reading experience. Whether you're accessing Inkverse on your computer, tablet, or smartphone, our responsive design ensures that you can enjoy our content anytime, anywhere.
        </p>
        <p className='text-gray-500 text-md'>
          Join the Inkverse community today and become a part of our journey. Subscribe to our newsletter for the latest updates, follow us on social media, and engage with other readers and writers. Share your thoughts, leave comments, and participate in discussions. At Inkverse, your voice matters, and we are excited to hear your stories.
        </p>
        <p className='text-gray-500 text-md'>
          Welcome to Inkverse, where every story finds its home, and every reader discovers a new favorite. Dive in and explore the infinite possibilities that await you.
        </p>
        <Link
          to='/about'
          className='text-md text-blue-600 font-bold hover:underline'
        >
          more...
        </Link>
      </div>
      <div className="p-3 rounded-3xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/015/840/132/small_2x/blue-grunge-textured-wall-background-beautiful-blue-modern-texture-background-with-smoke-blue-watercolor-grunge-texture-background-illustration-free-vector.jpg')] bg-gray-700 bg-blend-multiply">
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center text-black dark:text-white'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 md:gap-10 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-blue-600 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
