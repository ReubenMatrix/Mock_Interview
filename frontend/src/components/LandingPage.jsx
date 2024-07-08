import React from 'react';
import image from '../assets/interview.png';
import image2 from '../assets/interview2.jpg';
import Button from './Button';

export default function MainSection() {
  return (
    <main>
      <section className='w-full py-8 sm:py-24 md:py-20 lg:py-35 bg-[#fff9e6]'>
        <div className='container mx-auto px-4 md:px-6 flex items-center'>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 items-center'>
            <div className='flex flex-col items-start lg:items-start'>
              <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl text-[#333333] leading-tight'>
                Find your next job
              </h1>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#8c8c8c] mt-4'>
                Get started with interviews
              </h1>
              <p className='mt-6 text-lg text-[#666666]'>
                Connect with top companies and land your perfect job. Start your career journey with us today.
              </p>
              <button className='mt-8 bg-[#ffd600] hover:bg-[#ffcd00] text-[#333333] font-bold py-3 px-6 rounded transition duration-300'>
                Get Started
              </button>
            </div>
            <div className='flex items-center justify-center lg:ml-20'>
              <img
                src={image}
                alt='Interview'
                height={850}
                width={950}
                className='w-full max-w-lg mx-auto rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fff9e6]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#333333]">Interview Tips and Advice</h2>
              <p className="max-w-[900px] text-[#666666] md:text-xl lg:text-base xl:text-xl">
                Prepare for your next interview with our expert-curated tips and advice. Learn how to ace common questions, showcase your skills, and make a great impression.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-5 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#333333]">Research the Company</h3>
                    <p className="text-[#666666]">
                      Thoroughly research the company, its mission, and its values to demonstrate your genuine interest.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#333333]">Practice Common Questions</h3>
                    <p className="text-[#666666]">
                      Anticipate and practice answering common interview questions to feel confident and prepared.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#333333]">Highlight Your Strengths</h3>
                    <p className="text-[#666666]">
                      Identify and emphasize your relevant skills, experiences, and accomplishments that make you the ideal candidate.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src={image2}
              alt="Interview Tips"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
            />
          </div>
        </div>
      </section>


    </main>
  );
}
