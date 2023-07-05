import React from "react";
import Anchors from "../Navbar/Anchors/Anchors";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Footer = () => {

  const navigate = useNavigate()
  
  const logOut=()=>{
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'LogOut',
      cancelButtonText: 'stay here'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("UUID")
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload()
      }
    })
    
   

  }
  
  return (
    <footer className="bg-grissoft text-white ">
    <div className="flex items-center justify-between p-4"> 
    <h1 className="font-lilita text-2xl">TicketPlus+</h1>
    
    </div>
    <div className="flex items-center  sm:flex-col justify-between p-4">
      <h5 className="max-w-sm text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, molestiae assumenda minus praesentium laboriosam quis tenetur porro corrupti fuga, unde quo. Maiores iste obcaecati soluta quod rem sequi debitis expedita, est veniam at architecto nesciunt? Pariatur quos, quibusdam nesciunt, ducimus, repudiandae error sapiente at veniam hic odio eos laboriosam nemo?
      </h5>
    
      <div className="flex gap-5 text-2xl">
      <button onClick={logOut}>log out</button>
      <a href="https://es-la.facebook.com/"> <FaFacebookSquare /> </a>
      <a> <FaInstagram /> </a>
      <a> <FaTwitterSquare/> </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;