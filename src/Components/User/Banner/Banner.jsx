import React from 'react';


const Banner = (props) => {
    return(
        <div className='w-100 h-[40vh]'>
            <img className="h-full w-full" src={`https://ticketplus.bio/guest/event/picture/${props.image}`} />

        </div>
    )
}

export default Banner;