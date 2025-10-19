"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import NodeSystem from '@/components/NodeSystem';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <main>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 text-text-light backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl md:text-2xl font-bold hover:text-highlight transition-colors">
              Duong Thang Nguyen
            </a>

            <nav className="hidden md:flex space-x-6">
              <a href="#about_me" className="hover:text-highlight transition-colors">
                About Me
              </a>
              <a href="#featured_project" className="hover:text-highlight transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-highlight transition-colors">
                Contact
              </a>
            </nav>

            <button 
              className="md:hidden p-2 rounded-md text-text-light hover:bg-white/10 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-dark/95`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about_me"
              className="block px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#featured_project"
              className="block px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <div className="h-16"></div>

      <section id='about_me' className="min-h-[calc(100vh-4rem)] bg-light text-text-dark flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-full max-w-md lg:max-w-sm xl:max-w-md mx-auto lg:mx-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-highlight/50 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <Image 
                  src='https://github.com/arlantat.png'
                  alt="Duong Thang Nguyen's profile picture" 
                  width={400}
                  height={400}
                  className="relative rounded-3xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className='w-full max-w-2xl mx-auto text-center lg:text-left'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-dark group hover:text-primary transition-colors'>
                <span className="relative inline-block">
                  <span className="relative z-10">About Me</span>
                </span>
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  Hi there! I&apos;m <span className="font-semibold text-dark">Duong Thang</span>, a passionate junior software developer with a strong foundation in web development and a keen interest in the exciting world of trading and cryptocurrency.
                </p>
                
                <div className="bg-highlight/10 p-6 rounded-xl border border-highlight/20">
                  <p className="text-base md:text-lg italic text-gray-600">
                    &quot;Thanks for stopping by! While I may not have many photos to share just yet, I believe in letting my work speak for itself. I believe in continuous learning and pushing the boundaries of what&apos;s possible with code.&quot;
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                  <a 
                    href="#featured_project" 
                    className="px-6 py-3 bg-dark text-white rounded-lg font-medium hover:bg-highlight hover:text-dark transition-all duration-300 border-2 border-transparent hover:border-highlight"
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 border-2 border-dark text-dark rounded-lg font-medium hover:bg-highlight hover:border-highlight hover:text-dark transition-all duration-300"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        id='featured_project' 
        className="w-full bg-dark text-white py-16 md:py-24"
        aria-labelledby="featured-project-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 
              id="featured-project-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 group inline-block hover:text-highlight transition-colors"
            >
              <span className="relative">
                <span className="relative z-10">Featured Project</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              At the time I worked at Rhombus AI, I built the foundation for a drag-and-drop node system for data pipelines. Catch a glimpse of my product and my learning journey.
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto">
            <div 
              className="relative aspect-video w-full bg-darker/90 rounded-xl overflow-hidden border-2 border-highlight/30 shadow-2xl"
              aria-label="Interactive node system visualization"
            >
              <NodeSystem />
            </div>
          </div>
        </div>
      </section>

      <section 
        id='projects' 
        className="w-full bg-light py-16 md:py-24"
        aria-labelledby="projects-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-dark">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 
              id="projects-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 group inline-block hover:text-primary transition-colors"
            >
              <span className="relative">
                <span className="relative z-10">Projects</span>
              </span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li>
                <a 
                  href='https://github.com/arlantat/teamfight-tactician' 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="block w-full py-4 px-6 rounded-full border-2 border-dark hover:border-highlight hover:bg-highlight/10 transition-all duration-300 text-lg font-medium flex items-center justify-between"
                  aria-label="Teamfight Tactician - View on GitHub"
                >
                  <span>Teamfight Tactician</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href='https://github.com/arlantat/alien-invasion' 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="block w-full py-4 px-6 rounded-full border-2 border-dark hover:border-highlight hover:bg-highlight/10 transition-all duration-300 text-lg font-medium flex items-center justify-between"
                  aria-label="Alien Invasion - View on GitHub"
                >
                  <span>Alien Invasion</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href='https://github.com/arlantat/AttackFlow_Annotator' 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="block w-full py-4 px-6 rounded-full border-2 border-dark hover:border-highlight hover:bg-highlight/10 transition-all duration-300 text-lg font-medium flex items-center justify-between"
                  aria-label="AttackFlow Annotator - View on GitHub"
                >
                  <span>AttackFlow Annotator</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href='https://github.com/arlantat/WBS' 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="block w-full py-4 px-6 rounded-full border-2 border-dark hover:border-highlight hover:bg-highlight/10 transition-all duration-300 text-lg font-medium flex items-center justify-between"
                  aria-label="WBS E-tailer - View on GitHub"
                >
                  <span>WBS E-tailer</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section 
        id='get_to_know_me' 
        className="w-full bg-dark text-text-light py-16 md:py-24"
        aria-labelledby="get-to-know-me-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 
              id="get-to-know-me-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 group inline-block hover:text-highlight transition-colors"
            >
              Get to Know Me
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Thanks for scrolling down! Here&apos;s some personality facts about me to determine culture fit.
            </p>
            
            <ul className="text-left max-w-2xl mx-auto space-y-3 text-base sm:text-lg">
              <li className="flex items-start">
                <span className="text-highlight mr-2 mt-1">•</span>
                <span>I say I am too honest for my own good.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2 mt-1">•</span>
                <span>I have a hard time starting a task, but 15 minutes into it I&apos;m good for hours.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2 mt-1">•</span>
                <span>I prefer to dress casually whenever possible.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2 mt-1">•</span>
                <span>If able to, I avoid politics and conflict, rather mind my own business.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2 mt-1">•</span>
                <span>I am quiet in a large gathering, but I have a lot to say in a 1-on-1.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2 mt-1">•</span>
                <span>I highly value the 16 personalities framework and I believe it is mostly correct in practice. I am an ISTP.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer 
        id='contact' 
        className="w-full bg-light text-text-dark py-16 md:py-24"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-12 group inline-block hover:text-primary transition-colors"
            >
              Get In Touch
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
              <a 
                href="mailto:nguyenduongthang3@gmail.com" 
                target='_blank' 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group p-3 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Email me"
              >
                <span className="text-3xl sm:text-4xl text-dark group-hover:text-primary transition-colors mb-2">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-600">Email</span>
              </a>

              <a 
                href='https://www.linkedin.com/in/jack-arlantat/' 
                target='_blank' 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group p-3 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <span className="text-3xl sm:text-4xl text-dark group-hover:text-primary transition-colors mb-2">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-600">LinkedIn</span>
              </a>

              <a 
                href='https://www.discordapp.com/users/470905773338394635' 
                target='_blank' 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group p-3 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Message me on Discord"
              >
                <span className="text-3xl sm:text-4xl text-dark group-hover:text-primary transition-colors mb-2">
                  <i className="fab fa-discord" aria-hidden="true"></i>
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-600">Discord</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm sm:text-base">
                © {new Date().getFullYear()} Duong Thang Nguyen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
