import React from 'react'
import path from '../../assets/path.jpg'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             {/* <div className='md:h-[450px] h-[400px] md:w-[150px] w-[200px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div> */}
            <img src={path} className='object-cover md:w-[400px] md:h-[400px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Experience</h1>
            <h2 className='title-font font-bold text-white sm:text-2xl '>Oct 2023 - Sep 2024</h2>
            <p className='mb-8 text-white leading-relaxed '>Dun & Bradstreet ~ Senior Software Engineer
                <p className='mb-8 text-white leading-relaxed '>Hyderabad, India</p>
            </p>
            
            <h2 className='title-font font-bold text-white sm:text-2xl '>Mar 2022 - Aug 2023</h2>
            <p className='mb-8 text-white leading-relaxed '>Ness Digital Engineering ~ Technical Lead
                <p className='mb-8 text-white leading-relaxed '>Hyderabad, India</p>
            </p>

            <h2 className='title-font font-bold text-white sm:text-2xl '>Dec 2020 - Mar 2022</h2>
            <p className='mb-8 text-white leading-relaxed '>Capgemini ~ Consultant
                <p className='mb-8 text-white leading-relaxed '>Mumbai, India</p>
            </p>

            <h2 className='title-font font-bold text-white sm:text-2xl '>Mar 2018 - Nov 2020</h2>
            <p className='mb-8 text-white leading-relaxed '>Eaton(Signify) ~ Software Engineer 
                <p className='mb-8 text-white leading-relaxed '>Pune, India</p>
            </p>

            <h2 className='title-font font-bold text-white sm:text-2xl '>Feb 2017 - Feb 2018</h2>
            <p className='mb-8 text-white leading-relaxed '>Nice Interactive Systems ~ Associate
                <p className='mb-8 text-white leading-relaxed '>Pune, India</p>
            </p>

            <h2 className='title-font font-bold text-white sm:text-2xl '>Jun 2014 - Feb 2017</h2>
            <p className='mb-8 text-white leading-relaxed '>Tech Mahindra ~ Software Engineer
                <p className='mb-8 text-white leading-relaxed '>Pune, India</p>
            </p>
        </div>
        </div>
    </section>

  )
}