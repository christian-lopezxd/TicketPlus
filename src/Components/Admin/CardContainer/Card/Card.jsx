import React from "react";
import { IoLocationOutline } from 'react-icons/io5';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { IoTicketOutline } from 'react-icons/io5';
import { FiClock } from 'react-icons/fi';
import { NavLink } from "react-router-dom";
const imageURL = "https://ticketplus.bio/guest/event/picture/"
import Swal from "sweetalert2";
import EventServices from "../../../../Services/EventServices";

const Card = (props) => {

    const params = props.idEvent;
   


    
    const active = () => {
        
        Swal.fire({
            title: 'Are you sure you want to change the state of this event?',
            text: "You'll be able to change it again later",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Toggle active'
          }).then((result) => {
            if (result.isConfirmed) {
              EventServices.toggleArchive(params)
            }
          })
    
        }
       
    

    const archive = () => {
        
        Swal.fire({
            title: 'Are you sure you want to change the state of this event?',
            text: "You'll be able to change it again later",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'toggle archive'
          }).then((result) => {
            if (result.isConfirmed) {
              EventServices.toggleArchive(params)
            }
          })
    
        }



    return (
        <div className="bg-white flex  flex-col drop-shadow-2xl hover:scale-105 h-[35rem] sm:w-[40%] md:w-[50%] chibby:w-[100%]  w-[25%] md:h-auto rounded-lg justify-center ">
           <div className="w-[100%] h-[60%]">
           <img src={`${imageURL}${props.imagen}`} className="w-full h-full rounded-t-lg "/>
           </div>
            <h1 className="text-center font-montserrat font-normal text-lg p-1">{props.titulo}</h1>
            <hr/>
            <div className="px-3 py-1">
            <p className="font-montserrat font-normal flex items-center text-lg gap-1"><IoLocationOutline/> {`${props.localizacion}, ${props.ciudad}`} </p>
            <p className="font-montserrat font-normal flex items-center text-lg gap-1"> <IoCalendarClearOutline/> {props.fecha} </p>
            <p className="font-montserrat font-normal flex items-center text-lg gap-1"><FiClock/> {props.horaEntrada} - {props.horaSalida}</p>
            <p className="font-montserrat font-normal flex items-center text-lg gap-1"><IoTicketOutline/> {props.categoria}  </p>
            <div className="flex  p-2 items-center  md:flex-col w-full justify-between md:w-full md:gap-2">
              
           
           <NavLink to={`/Event/edit/${props.idEvent}`} className="w-[20%] md:w-full" ><button className="bg-newblue hover:bg-darkblue py-4 px-2 rounded font-montserrat text-white font-normal w-full md:py-2">edit</button></NavLink>
            <NavLink to={`/Event/addTiers/${props.idEvent}` } className=" md:w-full"><button className="bg-newblue hover:bg-darkblue py-4 px-2 rounded font-montserrat text-white font-normal w-full md:py-2">add tiers</button></NavLink>
            <NavLink className="w-[20%] md:w-full" onClick={active}><button className="bg-newblue hover:bg-darkblue py-4 px-2 rounded font-montserrat text-white font-normal w-full md:py-2">Activate</button></NavLink>
            <NavLink className="w-[20%] md:w-full" onClick={archive}><button className="bg-newblue hover:bg-darkblue py-4 px-2 rounded font-montserrat text-white font-normal w-full md:py-2">Archive</button></NavLink>

           
            </div>
            </div>

        </div>
    )
}

export default Card;