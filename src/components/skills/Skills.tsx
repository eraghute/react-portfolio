import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import typescript from '../../assets/typescript.png'
import angular from '../../assets/angular.png'
import react from '../../assets/react.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                Angular (version 2-17),  React(v17), Angular JS, Single Page Applications, Micro-frontends, Accessibility
 Standards, TypeScript, Es6, JavaScript, HTML, CSS, SCSS, SASS, Tailwind, Bootstrap, Responsive Design,
 Material UI, Bootstrap, RxJs, NgRx, Redux, Karma, Jasmine, Jest, TDD, Git, RESTful API, GraphQL, Web
 development, Agile, Scrum, D3, CI/CD, PostgreSQL, MySQL, Node.js, Azure, AWS, User Experience,  Agile Scrum
 Master, Progressive Web Application (PWA), Cross-Platform, Feature Development, Mentoring, Code Review,
 Cross-Functional Collaboration, Performance Optimization, Scrum, JSON/XML, Docker, Web Application
 Development, Mobile Application Development (Cordova), MS Clarity
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={angular} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={typescript} alt="" className='rounded-none w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={css} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}