import React from "react";
import AuthServices from "../../../Services/AuthServices";
import { useState } from "react";
import { useEffect } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    AuthServices.getUserData().then((info) => {
      setUser(info);
    });
  }, []);

  return (
    <div className=" flex  w-[50%] xl:w-[80%] md:w-[90%] md:flex-col h-1/2 bg-white mx-auto my-10 text-justify gap-5  items-center p-5  chibby:p-4 font-montserrat font-medium rounded-xl">
      <img
        src="https://static.wixstatic.com/media/cfbd34_df8e7a3f25c94a14b1c00d95f54a5c4c~mv2.jpg/v1/fill/w_422,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/placeholder-profile-sq.jpg"
        className="h-[30vh] w-[30vh]"
      />
      <div className="w-[60%] md:w-full">
        <div className="flex chibby:flex-col justify-between">
          <h1>Name:</h1>
          <h1> {user.name} </h1>
        </div>
        <div className="flex chibby:flex-col justify-between">
          <h1>ID:</h1>
          <h1 className="text-s text-right"> {user.idUser} </h1>
        </div>
        <div className="flex justify-between">
          <h1>email: </h1>
          <h1> {user.email} </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
