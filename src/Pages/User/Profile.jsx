import React from "react";
import Navbar from "../../Components/User/Navbar/Navbar";
import ProfileCard from "../../Components/User/ProfileCard/ProfileCard";

const Profile = () => {
    return(
        <section className="bg-backgroundicons bg-repeat min-h-[100vh]">
            <Navbar/>
            <ProfileCard/>

        </section>

    )
}

export default Profile;
