import { useEffect, useState } from 'react';
import { getJoke } from 'utils/jokes';

function Joke() {
  const [joke, setJoke] = useState('');
  // This is needed because of nextjs hydration problems...
  // https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
  useEffect(() => {
    const joke = getJoke();
    setJoke(joke);
  }, []);

  const handleClick = async () => {
    const joke = getJoke();
    setJoke(joke);
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
