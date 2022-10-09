import { Envelope } from 'icons/Envelope';
import { Github } from 'icons/Github';
import { LinkedIn } from 'icons/LinkedIn';
import { Twitter } from 'icons/Twitter';
import type { NextPage } from 'next';
import { ReactNode } from 'react';

type SocialIconProps = { heading: string; icon: ReactNode; link: string };
const SocialIcon = (props: SocialIconProps) => {
  const link = props.link.includes('@') ? `mailto:${props.link}` : props.link;
  return (
    <div className="flex justify-center content-center grow text-center">
      <a href={link} target="_blank">
        <p className="group uppercase ">
          <span className="group-hover:text-blue-400">{props.heading}</span>
          {props.icon}
        </p>
      </a>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <main className="container mx-auto">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold">Hi, I'm Kennet</h1>
          <h2 className="text-lg">Software engineer with passion for tech</h2>
        </section>
        <section className="flex justify-between content-center">
          <SocialIcon
            heading="Email"
            icon={<Envelope />}
            link={'kennet@vuong.it'}
          />
          <SocialIcon
            heading="Twitter"
            icon={<Twitter />}
            link={'https://twitter.com/kennetvuong'}
          />
          <SocialIcon
            heading="Github"
            icon={<Github />}
            link={'https://github.com/kennetvu'}
          />
          <SocialIcon
            heading="LinkedIn"
            icon={<LinkedIn />}
            link={'https://www.linkedin.com/in/kennet-vuong-a2a65849'}
          />
        </section>
      </main>

      <footer className="text-center py-20">
        <p>
          made with Tailwind & NextJS ♥️
          <br />
          &copy; vuong.it
        </p>
      </footer>
    </div>
  );
};

export default Home;
