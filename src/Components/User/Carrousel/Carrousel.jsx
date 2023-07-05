import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useState } from "react";
import EventServices from "../../../Services/EventServices";

const Carrousel = () => {
  
  const page = 0;
  const [data, setData] = useState(null)





  useEffect(() => {
    EventServices.getAllActives(page).then((info) => {
      setData(info);
      
    });

   
    
  }, [page]);
  
  

 

  
  return (
    <Carousel
      axis="horizontal"
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      className="chibby:hidden"
    >
      {
           data ? data.content.map( (evento) => {
            const { idEvent,  bannerPicture } =
         evento;

         
      
           
            return(
                <div key={idEvent} className="">
                <img src={`https://ticketplus.bio/guest/event/picture/${bannerPicture}`  } className="object-fill h-[400px] md:h-[200px]  w-full" />
              </div>
            )
           }) : ""
               
        }
      
    </Carousel>
  );
};

export default Carrousel;
