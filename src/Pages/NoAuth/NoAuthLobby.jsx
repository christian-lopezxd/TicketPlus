import React from "react";
import Footer from "../../Components/User/Footer/Footer";
import Navbar from "../../Components/User/Navbar/Navbar";
import CardContainer from "../../Components/NoAuth/CardContainer/CardContainer";
import Title from "../../Components/User/Title/Title";
import NoAuthNavbar from "../../Components/NoAuth/NoAuthNavbar/NoAuthNavbar";
const url = "./src/Data/Events.json";
import { useState } from "react";
import { useEffect } from "react";
import Carrousel from "../../Components/User/Carrousel/Carrousel";





const NoAuthLobby = () => {



const title="Next Events"
  return (
    <section className="bg-backgroundicons bg-repeat">
      <NoAuthNavbar/>
      <Carrousel />
      <Title title={title}/>
      <CardContainer />
      <Footer />
    </section>
  );
};

export default NoAuthLobby;
