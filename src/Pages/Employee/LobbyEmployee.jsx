import React from "react";
import Footer from "../../Components/User/Footer/Footer";
import Navbar from "../../Components/User/Navbar/Navbar";
import Title from "../../Components/User/Title/Title";
import CardContainer from "../../Components/Employee/CardContainer/CardContainer";

const LobbyEmployee = () => {
  return (
    <section className="bg-backgroundicons bg-repeat">
      <Navbar />
      <Title title="Actual Events" />
      <CardContainer />
      <Footer />
    </section>
  );
};

export default LobbyEmployee;