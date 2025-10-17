import Image from 'next/image';
import NodeSystem from '@/components/NodeSystem';

export default function Home() {
  return (
    <main>
      <div id='head' className="fixed top-0 left-0 right-0 z-50 py-4 bg-dark/95 text-text-light backdrop-blur-sm">
        <div className='flex justify-between items-center w-5/6 mx-auto'>
          <h1 className='text-2xl font-bold hover:text-highlight transition-colors'>Duong Thang Nguyen</h1>
          <nav>
            <ul className='flex space-x-8'>
              <li><a href='#about_me' className="text-lg hover:text-highlight transition-colors">About Me</a></li>
              <li><a href='#featured_project' className="text-lg hover:text-highlight transition-colors">Featured Project</a></li>
              <li><a href='#contact' className="text-lg hover:text-highlight transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <section id='about_me' className="min-h-screen bg-light text-text-dark flex flex-col pt-24">
        <div className='flex-1 flex flex-col items-center justify-center w-full'>
          <div className='max-w-4xl w-full flex flex-col items-center gap-12'>
            <div className='w-full flex flex-col md:flex-row items-center gap-12'>
              <div className="flex-shrink-0">
                <Image 
                  src='https://github.com/arlantat.png' 
                  alt="Jack's profile picture" 
                  width={280} 
                  height={280} 
                  className='rounded-3xl hover:shadow-lg hover:scale-105 transition-all' 
                />
              </div>
              <div className='text-center md:text-left'>
                <h1 
                  className='text-4xl font-bold mb-5 inline-block'
                >
                  About Me
                </h1>
                <p>Hi! I am Duong Thang, a junior software developer. I&apos;m specializing in web development, but I&apos;m also interested in trading/cryptocurrency.</p>
              </div>
            </div>
            <div className="w-full p-4 bg-highlight/50 rounded-lg border border-highlight/20 text-center">
              <span className="thanks-message">Thanks for hovering! There is supposed to be a gallery showing myself being a genuine person here, but frankly I&apos;m not quite a picture person. I do realize its importance though so I&apos;m working towards it.</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id='featured_project' className="min-h-screen flex flex-col items-center justify-center py-16 bg-dark text-text-light">
        <div className="w-5/6 max-w-6xl mx-auto">
          <h1 className='text-4xl font-bold mb-10 hover:text-highlight transition-colors text-center'>Featured Project</h1>
          <p className='text-center mb-8 max-w-3xl mx-auto text-text-light/90'>
            At the time I worked at Rhombus AI, I built the foundation for a drag-and-drop node system for data pipelines. Catch a glimpse of my product and my learning journey.
          </p>
          <div className="w-full h-[600px] bg-darker/80 rounded-xl overflow-hidden border border-secondary/20">
            <NodeSystem />
          </div>
        </div>
      </section>

      <section id='projects' className="py-20 text-center bg-light text-text-dark">
        <h1 className='text-4xl font-bold mb-10'>Projects</h1>
        <div className='max-w-4xl mx-auto px-5'>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href='https://github.com/arlantat/teamfight-tactician' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-dark hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                Teamfight Tactician
              </a>
            </li>
            <li>
              <a href='https://github.com/arlantat/alien-invasion' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-dark hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                Alien Invasion
              </a>
            </li>
            <li>
              <a href='https://github.com/arlantat/AttackFlow_Annotator' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-dark hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                AttackFlow Annotator
              </a>
            </li>
            <li>
              <a href='https://github.com/arlantat/WBS' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-dark hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                WBS E-tailer
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id='get_to_know_me' className="py-20 text-center bg-dark text-text-light">
        <h1 className='text-4xl font-bold mb-10 hover:text-highlight transition-colors'>Get to Know Me</h1>
        <div className='max-w-4xl mx-auto px-5 text-lg'>
          <p className="mb-2">Thanks for scrolling down! Here&apos;s some personality facts about me to determine culture fit.</p>
          <ul className="list-disc list-inside text-left mt-4 space-y-2">
            <li>
              I say I am too honest for my own good.
            </li>
            <li>
              I have a hard time starting a task, but 15 minutes into it I&apos;m good for hours.
            </li>
            <li>
              I prefer to dress casually whenever possible.
            </li>
            <li>
              If able to, I avoid politics and conflict, rather mind my own business.
            </li>
            <li>
              I am quiet in a large gathering, but I have a lot to say in a 1-on-1.
            </li>
            <li>
              I highly value the 16 personalities framework and I believe it is shown to be mostly correct in practice. I am an ISTP.
            </li>
          </ul>
        </div>
      </section>

      <footer id='contact' className="py-20 text-center bg-light text-text-dark">
        <h1 className='text-4xl font-bold mb-10'>Contact</h1>
        <div className='flex justify-center space-x-8'>
          <a href="mailto:nguyenduongthang3@gmail.com" target='_blank' rel="noopener noreferrer" className="text-dark hover:text-primary transition-colors">
            <i className="fas fa-envelope fa-3x"></i>
          </a>
          <a href='https://www.linkedin.com/in/jack-arlantat/' target='_blank' rel="noopener noreferrer" className="text-dark hover:text-primary transition-colors">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href='https://www.discordapp.com/users/470905773338394635' target='_blank' rel="noopener noreferrer" className="text-dark hover:text-primary transition-colors">
            <i className="fab fa-discord fa-3x"></i>
          </a>
        </div>
      </footer>
    </main>
  );
}
