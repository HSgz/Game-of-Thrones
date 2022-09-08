import React from "react";
import { Card } from "flowbite-react";

const CardPrincipal = () => {
  return (
    <Card href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Game of thrones
      </h5>
      <p className="text-description font-normal text-gray-700 dark:text-gray-400 text-lg">
        El libro mejor vendido de la serie "A Song of Ice and Fire" escrito por
        George R.R, es llevado a la pantalla chica cuando HBO decide recrear
        esta historia épica de fantasía. Es la descripción de dos familias
        poderosas, reyes y reinas, caballeros y renegados, hombres falsos y
        honestos, haciendo parte de un juego mortal por el control de los Siete
        Reinados de Westeros y por sentarse en el trono más alto. Martin es el
        co productor ejecutivo y uno de los escritores de la serie que fue
        filmada en el Norte de Irlanda y Malta.
      </p>
    </Card>
  );
};

export default CardPrincipal;
