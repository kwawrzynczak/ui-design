import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { HandThumbDownIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const OpinionTab = ({ name, text, stars, likes, dislikes, verified }) => {
  return (
    <div className="w-full rounded-xl bg-white p-8 md:w-2/3">
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <p className="text-xl font-semibold tracking-wide">{name}</p>
        <p>{stars}</p>
      </div>

      {verified && (
        <p className="mt-2 text-base font-normal">
          <span>
            <CheckCircleIcon className="inline h-6 w-6" />
          </span>{' '}
          Zakup zweryfikowany
        </p>
      )}

      <p className="my-6 text-lg">{text}</p>

      <p className="font-semibold">Czy ta opinia była pomocna?</p>
      <div className="mt-2 flex gap-1 text-lg font-semibold">
        {likes}
        <HandThumbUpIcon className="h-6 w-6" />

        <HandThumbDownIcon className="h-6 w-6" />
        {dislikes}
      </div>
    </div>
  );
};

export default OpinionTab;
