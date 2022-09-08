import React from "react";
import { Carousel } from "flowbite-react";
import useGetCharacters from "../hook/useGetCharacters";

const URL = import.meta.env.VITE_API;

const CarouselImages = () => {
  const characters1 = useGetCharacters(URL).slice(5, 10);
  const characters2 = useGetCharacters(URL).slice(10, 15);
  return (
    <div className="grid h-56 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 my-10">
      <Carousel indicators={false}>
        {characters1.map((character) => (
            <img src={character.imageUrl} alt={character.fullName} />
        ))}
      </Carousel>
      <Carousel indicators={false}>
        {characters2.map((character) => (
            <img src={character.imageUrl} alt={character.fullName} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
