import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-6xl sm:text-8xl font font-bold text-center my-10'>
            Welcome to <span className='text-blue-600'>Ink</span>verse
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6 pb-8'>
            <p>
              At Inkverse, we are dedicated to creating a platform where stories come to life and ideas flourish.
              Our mission is to bring together a universe of diverse content that caters to every interest and passion.
              From the latest in technology and travel to captivating fiction and insightful lifestyle articles,
              Inkverse is your go-to destination for quality content across all genres.
            </p>
            <h2 className='text-3xl font font-bold text-center my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Our Vision
            </h2>
            <p>
              We believe in the power of words to inspire, inform, and connect people from all walks of life.
              Our vision is to build a community where readers and writers can share their stories, insights, and experiences,
              creating a rich tapestry of knowledge and creativity.
            </p>

            <h2 className='text-3xl font font-bold text-center my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              What We Offer
            </h2>

            <p>
              <span className='font-bold underline underline-offset-2'>Diverse Content:</span> With a wide range of categories, we ensure there's always something new and exciting to explore. Whether you're a tech enthusiast, a travel lover, or a fan of fiction, Inkverse has something for you.
            </p>

            <p>
              <span className='font-bold underline underline-offset-2'>Quality and Authenticity:</span> We are committed to providing well-researched, authentic, and engaging content. Our team of dedicated writers and editors works tirelessly to bring you articles that are both informative and enjoyable.
            </p>

            <p>
              <span className='font-bold underline underline-offset-2'>Community Engagement:</span> Inkverse is more than just a blog; it's a community. We encourage our readers to engage with our content, share their thoughts, and connect with like-minded individuals. Your voice matters, and we value your feedback and contributions.
            </p>

            <p>
              <span className='font-bold underline underline-offset-2'>User-Friendly Experience:</span> Our website is designed to provide a seamless browsing experience, whether you're accessing it from your computer, tablet, or smartphone. With easy navigation and a clean, responsive design, finding and enjoying our content is effortless.
            </p>

            <h2 className='text-3xl font font-bold text-center my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Join Us on Our Journey
            </h2>

            <p>
              We invite you to join the Inkverse community. Subscribe to our newsletter for the latest updates, follow us on social media, and be a part of our growing family of readers and writers. Share your stories, leave comments, and participate in discussions. Together, we can create a vibrant and dynamic space where every story finds its home.
            </p>

            <h2 className='text-3xl font font-bold text-center my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Our Team
            </h2>

            <p>
              Behind Inkverse is a passionate team of writers, editors, and digital enthusiasts who believe in the power of storytelling. We are dedicated to bringing you content that not only entertains but also enlightens and inspires.
            </p>

            <h2 className='text-3xl font font-bold text-center my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Contact Us
            </h2>

            <p>
              We'd love to hear from you! Whether you have a question, feedback, or a story to share, feel free to reach out to us. Contact us at <span className='text-blue-600'>inkverseteam@gmail.com</span> or connect with us on social media.
            </p>

            <p>
              Thank you for being a part of Inkverse. We look forward to sharing this journey with you.
            </p>

            <p className='text-xl my-8 text-black dark:text-white'>
              ~ <span className='text-blue-600'>Ink</span><span className='text-slate-800 dark:text-slate-200'>verse</span> team – Where Every Story Finds Its Home.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
