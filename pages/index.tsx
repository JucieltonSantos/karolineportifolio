// react
import * as React from "react";
// custom component
import About from "components/section/About";
import HireMe from "components/section/HireMe";
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

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
      <MainLayout pageData={pages!.home}>
        <HomeHero />
        <VideoSection />
        <About />
        <ServicesSection />
        <KarolzinhaSection />
        <Skills />
        <RecentProjects />
      </MainLayout>
    </>
  );
};

export default Home;
