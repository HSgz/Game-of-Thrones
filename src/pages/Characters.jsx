import React from "react";
import Layout from "../template/Layout";
import useGetCharacters from "../hook/useGetCharacters";

const URL = import.meta.env.VITE_API;

const Characters = () => {
  const characters = useGetCharacters(URL).slice(0,52);
  return (
    <Layout>
      <div className="grid h-56 md:grid-cols-4 sm:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 my-10">
        {characters.map((character) => (
          <div
            key={character.id}
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={character.imageUrl}
              alt={character.fullName}
              className="rounded-t-lg h-60 w-96 object-contain rounded-xl"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {character.title}
              </h5>
              <p className="text-description mb-3 font-normal text-gray-700 dark:text-gray-400">
              {`NAME: ${character.fullName}`}
              </p>
              <p className="text-description font-normal text-gray-700 dark:text-gray-400">
                {`HOUSE: ${character.family}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Characters;
