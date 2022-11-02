import { useState } from 'react';

interface JokeProps {
  initialJoke: string;
}

function Joke(props: JokeProps) {
  const [joke, setJoke] = useState(props.initialJoke);
  const handleClick = async () => {
    const newJoke = await (await fetch('/api/jokes')).text();
    setJoke(newJoke);
  };
  return (
    <div className="flex gap-2 w-full pt-10">
      <p
        className="grow cursor-pointer hover:text-blue-400"
        onClick={handleClick}
      >
        {joke}
      </p>
    </div>
  );
}

export default Joke;
