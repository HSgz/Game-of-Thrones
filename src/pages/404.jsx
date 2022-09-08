import React from "react";
import Layout from "../template/Layout";
import { Link } from "react-router-dom";
import logo from '../assets/images/espadascruzadas.jpg'

const Error404 = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center my-40">
        <Link
          to="/"
          className="block p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pagina no encontrada
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            <img src={logo} alt="espadas cruzadas"/>
          </p>
          <p class="text-description font-normal text-2xl text-center pt-4 text-gray-700 dark:text-gray-400">
            Volver al Home
          </p>
        </Link>
      </div>
    </Layout>
  );
};

export default Error404;
