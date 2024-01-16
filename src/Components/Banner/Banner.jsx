"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const homeStyle = {
        position: 'relative',
        top: '-1000px',
    };

   

    const textStyle = {
        position: 'relative',
        top: '-1800px',
    }

    return (
        <div className="main">
            <img data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" src="https://i.ibb.co/gRHfWXv/sun-sunlight-bright-outdoor-sky.jpg" alt="" />
            <img data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" style={homeStyle} src="https://i.ibb.co/vdrh6LP/pexels-binyamin-mellish-106399-removebg.png" alt="" />

            <div style={textStyle} className='text-center text-9xl '>
                <h2 data-aos="zoom-in-down" className='text-white font-mono ' >Property</h2>
                <h1 data-aos="zoom-out-up" className='text-[#eb6753]'>H u n t e r</h1>
            </div>
        </div>
    );
};

export default Banner;