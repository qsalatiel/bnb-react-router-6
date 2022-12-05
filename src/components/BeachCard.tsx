import { MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

type BeachCardProps = {
  image: string;
  title: string;
  city: string;
  review: number;
};

export function BeachCard({ image, title, city, review }: BeachCardProps) {
  return (
    <a className="shadow block transition shadow-stone-100 bg-white rounded-lg cursor-pointer hover:shadow-md">
      <img
        className="rounded-tl-lg rounded-tr-lg w-full h-40 object-cover"
        src={image}
      />

      <div className="p-4">
        <p className="text-base mb-2 text-stone-700 font-semibold">{title}</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm m-0 text-stone-400 flex flex-row">
            <MapPinIcon className="h-6 w-6 text-stone-300 mr-2" />
            {city}
          </p>
          <div className="flex flex-row items-center">
            <StarIcon className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-sm text-yellow-500">{review}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
