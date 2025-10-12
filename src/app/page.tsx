import Image from 'next/image';
import NodeSystem from '@/components/NodeSystem';

export default function Home() {
  return (
    <main>
      <header id='head' className="py-5">
        <div className='max-w-4xl mx-auto flex justify-between items-center px-5'>
          <h1 className='text-2xl font-bold hover:text-highlight transition-colors'>Duong Thang Nguyen</h1>
          <nav>
            <ul className='flex space-x-8'>
              <li><a href='#about_me' className="text-lg hover:text-highlight transition-colors">About</a></li>
              <li><a href='#projects' className="text-lg hover:text-highlight transition-colors">Projects</a></li>
              <li><a href='#contact' className="text-lg hover:text-highlight transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id='basic_info' className="py-20">
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 px-5'>
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
            <h1 className='text-4xl font-bold mb-5 hover:text-highlight transition-colors cursor-pointer'>About Me</h1>
            <p>Hi! I am Duong Thang, a junior software developer. I'm specializing in web development, but I am also interested in trading/cryptocurrency.</p>
          </div>
        </div>
      </section>
      
      <section id='featured_project' className="py-20 text-center">
        <h1 className='text-4xl font-bold mb-10 hover:text-highlight transition-colors cursor-pointer'>Featured Project</h1>
        <div className='max-w-4xl mx-auto px-5'>
          At the time I worked at Rhombus AI, I implemented and maintained a practical drag-and-drop node system for data pipelines.
        </div>
        <NodeSystem />
      </section> 

      <section id='projects' className="py-20 text-center">
        <h1 className='text-4xl font-bold mb-10 hover:text-highlight transition-colors cursor-pointer'>Projects</h1>
        <div className='max-w-4xl mx-auto px-5'>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href='https://github.com/arlantat/teamfight-tactician' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-secondary/50 hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                Teamfight Tactician
              </a>
            </li>
            <li>
              <a href='https://github.com/arlantat/alien-invasion' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-secondary/50 hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                Alien Invasion
              </a>
            </li>
            <li>
              <a href='https://github.com/arlantat/AttackFlow_Annotator' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-secondary/50 hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                AttackFlow Annotator
              </a>
            </li>
            <li>
              <a href='https://github.com/arlantat/WBS' target='_blank' rel="noopener noreferrer" className='block w-80 py-3 px-4 rounded-full border border-secondary/50 hover:border-primary hover:text-primary hover:font-bold hover:scale-105 hover:shadow-lg transition-all'>
                WBS E-tailer
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id='about_me' className="py-20 text-center">
        <h1 className='text-4xl font-bold mb-10 hover:text-highlight transition-colors cursor-pointer'>More About Me</h1>
        <div className='max-w-4xl mx-auto px-5 text-lg'>
          <p className="mb-2">Thanks for scrolling down! Here's some personality facts about me to determine culture fit.</p>
          <ul className="list-disc list-inside text-left mt-4 space-y-2">
            <li>
              People say I am too honest for my own good.
            </li>
            <li>
              I have a hard time starting a task, but 15 minutes into it I'm good for hours.
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
              Based on my experience, the 16 personalities framework is shown to be mostly correct in practice. I am an ISTP.
            </li>
          </ul>
        </div>
      </section>

      <section id='contact' className="py-20 text-center">
        <h1 className='text-4xl font-bold mb-10 hover:text-highlight transition-colors cursor-pointer'>Contact</h1>
        <div className='flex justify-center space-x-8'>
          <a href="mailto:nguyenduongthang3@gmail.com" target='_blank' rel="noopener noreferrer" className="text-secondary hover:text-error transition-colors">
            <i className="fas fa-envelope fa-3x"></i>
          </a>
          <a href='https://www.linkedin.com/in/jack-arlantat/' target='_blank' rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href='https://www.discordapp.com/users/470905773338394635' target='_blank' rel="noopener noreferrer" className="text-secondary hover:text-error transition-colors">
            <i className="fab fa-discord fa-3x"></i>
          </a>
        </div>
      </section>

      <footer className="py-10 text-center bg-background-light">
        <p className="text-sm text-secondary/70">Built with Next.js and Tailwind CSS</p>
      </footer>
    </main>
  );
}
