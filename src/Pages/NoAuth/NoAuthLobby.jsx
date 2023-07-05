import React from "react";
import Footer from "../../Components/User/Footer/Footer";
import Navbar from "../../Components/User/Navbar/Navbar";
import CardContainer from "../../Components/User/CardContainer/CardContainer";
import Title from "../../Components/User/Title/Title";
import NoAuthNavbar from "../../Components/NoAuth/NoAuthNavbar/NoAuthNavbar";
const url = "./src/Data/Events.json";
import { useState } from "react";
import { useEffect } from "react";





const NoAuthLobby = () => {



const title="Next Events"
  return (
    <section className="bg-backgroundicons bg-repeat">
      <NoAuthNavbar/>
      <Title title={title}/>
      
      <Footer />
    </section>
  );
};

export default NoAuthLobby;
