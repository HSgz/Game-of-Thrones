import React from "react";
import CardPrincipal from "../components/CardPrincipal";
import CarouselImages from "../components/CarouselImages";
import Layout from "../template/Layout";

function Home() {
  return (
    <Layout>
      <main className="my-10">
        <CardPrincipal />
        <CarouselImages />
      </main>
    </Layout>
  );
}

export default Home;
