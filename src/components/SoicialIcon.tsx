import { ReactNode } from 'react';

type SocialIconProps = { heading: string; icon: ReactNode; link: string };

const SocialIcon = (props: SocialIconProps) => {
  const link = props.link.includes('@') ? `mailto:${props.link}` : props.link;
  return (
    <div className="flex justify-center content-center grow text-center">
      <a href={link} target="_blank" rel="noreferrer">
        <p className="group uppercase ">
          <span className="group-hover:text-blue-400">{props.heading}</span>
          {props.icon}
        </p>
      </a>
    </div>
  );
};

export default SocialIcon;
