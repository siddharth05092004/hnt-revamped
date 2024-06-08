import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function VideoCard(props) {
  useEffect(() => {
    const vid = document.getElementById("vid");
    vid.classList.add("opacity-1");
    vid.classList.remove("opacity-0");
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
  }, []);
  return (
    <>
      {/* <div className="flex">
                <video src={props.video_url} autoPlay muted loop className="w-full"></video>
                <div className=" text-6xl justify-center">
                    <p >{props.page_name}</p>
                </div>
                
            </div> */}

      <div className="relative bg-slate-500" style={{backgroundImage:`url('${props.photo_url}')`}}>
        <video
          id="vid"
          className="w-full  transition-opacity ease-in duration-500 opacity-0"
          autoPlay
          loop
          muted
        >
          <source src={props.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 md:top-1/3 transition-all left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl whitespace-nowrap text-shadow shadow-gray-900"
          >
            {props.page_name}
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
