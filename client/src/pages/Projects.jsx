import React from 'react'
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto p-3 '>
        <div>
          <h1 className='text-6xl sm:text-8xl font font-bold text-center my-10'>
            Join the <span className='text-blue-600'>Ink</span>verse Creator Team
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6 pb-8'>
            <p>
              At Inkverse, we value the contributions of talented creators who share our passion for storytelling and knowledge sharing. We invite you to join our team and become a part of a vibrant community that celebrates diverse voices and unique perspectives.
            </p>
            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              How to Join Us?
            </h2>
            <p>
              If you are interested in joining Inkverse as a creator and publishing your own posts, please email us the following details:
            </p>
            <ul className='list-disc list-inside text-slate-700 dark:text-slate-300'>
              <li>Name</li>
              <li>Contact Information</li>
              <li>Background and Experience: Please include the number of years you have been blogging.</li>
              <li>Area of Interest: Specify your preferred genres for blog writing.</li>
              <li>Why should we choose you as a creator for Inkverse?</li>
            </ul>
            <p>
              Send your information to <span className='text-blue-600'>teaminkverse@gmail.com</span> with the subject line <span className=' text-blue-600'>"Creator Application"</span>
            </p>

            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Becoming an Admin
            </h2>

            <p>
              Upon reviewing your details, if we believe you are a good fit for our team, we will grant you admin permissions. As an admin, you will have the ability to publish and manage your own blog posts on Inkverse.
            </p>

            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Earnings and Compensation
            </h2>

            <p>
              As a creator/admin, you will earn 70% of the total ad revenue generated from your post pages. This model ensures that you are fairly compensated for your contributions while promoting high-quality content on our platform.
            </p>

            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Registration Fee
            </h2>

            <p>
              To secure your position as an admin, there is a registration fee of $10. This fee serves as a security amount and demonstrates your commitment to joining our team.
            </p>

            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Maintaining Admin Status
            </h2>

            <p>
              Admin permissions are granted at the discretion of our backend team. To ensure a positive and professional environment, all creators are expected to adhere to our rules and regulations. Failure to comply may result in revocation of admin privileges.
            </p>

            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Join Us Today
            </h2>

            <p>
              We look forward to welcoming you to the Inkverse community. Together, we can create a rich tapestry of stories and insights that inspire, inform, and connect readers from around the world.
            </p>

            <h2 className='text-3xl font font-bold my-2 underline underline-offset-4 text-slate-600 dark:text-slate-300'>
              Contact Us
            </h2>

            <p>
              For any questions or additional information, please feel free to reach out to us at <span className='text-blue-600'>teaminkverse@gmail.com</span>
            </p>

            <p>
              Thank you for your interest in joining Inkverse. We are excited to see the unique perspectives and valuable content you will bring to our platform.
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
