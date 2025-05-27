// react
import * as React from "react";
// custom component
import About from "components/section/About";
import HomeHero from "components/section/HomeHero";
import MainLayout from "components/layout/MainLayout";
import RecentProjects from "components/section/RecentProjects";
import Skills from "components/section/Skills";
// custom context
import ConstantsContext from "context/constantsContext";
// type
import type { NextPage } from "next";
import ServicesSection from "components/section/ServicesSection";
import KarolzinhaSection from "components/section/KarolzinhaSection";
import VideoSection from "components/section/VideoSection";
import { Review } from "components/section/Reviews";
import ReviewList from "components/section/Reviews";

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  const reviews: Review[] = [
    {
      name: "Geovanna Almeida",
      review:
        "Uma profissional excelente, e atenciosa em todos os detalhes. ❤️",
      rating: 5,
      link: "https://maps.app.goo.gl/RbaZWqcd3GA389DD6",
    },
    {
      name: "Dayane Victorino",
      review:
        "Dra Karoline é uma profissional excelente! Muito cuidadosa e deixa a gente confortável para fazer os procedimentos. Indico de olhos fechados 🙏🏻",
      rating: 5,
      link: "https://maps.app.goo.gl/m6GedkrxPJfqkAzc7",
    },
    {
      name: "Geovanna Almeida",
      review:
        "Uma profissional excelente, e atenciosa em todos os detalhes. ❤️",
      rating: 5,
      link: "https://maps.app.goo.gl/ZGH7BG5tsdiiSw7RA",
    },
    {
      name: "Gisele Pimenta",
      review:
        "Uma excelente profissional, super comprometida com a qualidade do atendimento, local agradável e aconchegante! Super recomendo!",
      rating: 5,
      link: "https://maps.app.goo.gl/hbjmtN8fD4xRBspx9",
    },
    {
      name: "Bruna Bezerra",
      review:
        "Excelente profissional, atenciosa, carismática, super cuidadosa com os pacientes.",
      rating: 5,
      link: "https://maps.app.goo.gl/cbVziVZBxFcLAo5A9",
    },
    {
      name: "Everson Silva",
      review:
        "Excelente profissional, trabalha com técnica e cuidado com o paciente, super indico!",
      rating: 5,
      link: "https://maps.app.goo.gl/F8hA397UXCgDQEXz9",
    },
  ];

  return (
    <>
      <MainLayout pageData={pages!.home}>
        <HomeHero />
        <VideoSection />
        <About />
        <ReviewList reviews={reviews} />
        <ServicesSection />
        <KarolzinhaSection />
        <Skills />
        <RecentProjects />
      </MainLayout>
    </>
  );
};

export default Home;
