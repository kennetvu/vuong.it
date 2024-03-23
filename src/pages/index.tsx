import { Envelope, Github, LinkedIn, Twitter } from 'components/Icons';
import Joke from 'components/Joke';
import SocialIcon from 'components/SoicialIcon';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <main className="container mx-auto">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-1">{`Kennet Vuong`}</h1>
          <h2 className="text-lg">
            Software Engineer/Code Monkey with passion for Frontend and Backend
            aka <b>Full</b>stack
          </h2>
          <h3 className="text-base">Feel free to reach out!</h3>
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
          made with{' '}
          <a className="hover:text-blue-400" href="https://tailwindcss.com/">
            Tailwind
          </a>{' '}
          &{' '}
          <a className="hover:text-blue-400" href="https://nextjs.org/">
            NextJS
          </a>{' '}
          ♥️
          <br />
          powered by{' '}
          <a className="hover:text-blue-400" href="https://vercel.com/">
            vercel
          </a>
          <br />
          &copy; vuong.it
        </p>
        <Joke />
      </footer>
    </div>
  );
};

export default Home;
