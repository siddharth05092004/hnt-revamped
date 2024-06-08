import VideoCard from "../components/VideoCard";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Home() {
  const images = [
    {
      original: "assets/images/home_page_carousel/parashar.jpeg",
      thumbnail: "assets/images/home_page_carousel/parashar.jpeg",
    },
    {
      original: "assets/images/home_page_carousel/firstyearOnlyTrek.png",
      thumbnail: "assets/images/home_page_carousel/firstyearOnlyTrek.png",
    },
    {
      original: "assets/images/home_page_carousel/kandi.png",
      thumbnail: "assets/images/home_page_carousel/kandi.png",
    },
    {
      original: "assets/images/home_page_carousel/survival.jpg",
      thumbnail: "assets/images/home_page_carousel/survival.jpg",
    },
    {
      original: "assets/images/home_page_carousel/survival2.jpg",
      thumbnail: "assets/images/home_page_carousel/survival2.jpg",
    },
    {
      original: "assets/images/home_page_carousel/survival3.jpg",
      thumbnail: "assets/images/home_page_carousel/survival3.jpg",
    },
  ];

  return (
    <>
      <div className="w-full">
        <VideoCard
          video_url="assets/0-kandi_drone.mp4"
          page_name="NEVER STOP EXPLORING"
          photo_url="assets/images/load_videocard/kandi_drone.png"
        />
      </div>
      <motion.div
        className="m-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="flex justify-center items-center text-3xl">
          Our Events and Treks
        </h1>
        <p className="flex justify-center text-lg text-gray-600 mt-1 font-light">
          We Conduct The Following Events And Treks
        </p>
        <div className="flex flex-wrap justify-center">
          <div
            className=" grid grid-cols-3 min-w-20 max-w-80 m-6 lg:m-10
           gap-4"
          >
            <img
              src="assets/icons/tent.svg"
              alt=""
              className=" w-24 col-span-1"
            />

            <div className="col-span-2">
              <h1 className="text-xl font-sans">Camping</h1>
              <p className="text-gray-700 text-md pt-2">
                A Camping session is a must for every adventurer. Once in a
                month we group up with 20 adventurers and hike to camp on the
                top.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-3 min-w-20 max-w-80 m-6 lg:m-10
           gap-4"
          >
            <img
              src="assets/icons/mountain.svg"
              alt=""
              className="w-24 col-span-1"
            />

            <div className="col-span-2">
              <h1 className="text-xl font-sans">Short Hikes</h1>
              <p className="text-gray-700 text-md pt-2">
                We organise short hikes on the nearby hills of IIT Mandi in
                about every once in two weeks.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-3 min-w-20 max-w-80 m-6 lg:m-10
           gap-4"
          >
            <img
              src="assets/icons/map.svg"
              alt=""
              className="w-20 col-span-1"
            />

            <div className="col-span-2">
              <h1 className="text-xl font-sans">Expeditions</h1>
              <p className="text-gray-700 text-md pt-2">
                Himalayas are full of ancestral and heritage sites that depict a
                saga. We conduct expeditions to such sites very often.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-3 min-w-20 max-w-80 m-6 lg:m-10
           gap-4"
          >
            <img
              src="assets/icons/seminar.svg"
              alt=""
              className="w-20 col-span-1"
            />

            <div className="col-span-2">
              <h1 className="text-xl font-sans">Talks by Professionals</h1>
              <p className="text-gray-700 text-md pt-2">
                The best Adventure speakers have embarked on a variety of
                adventures, having earned the ability to share their stories and
                impact other lives with their unique experiences and courage.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-3 min-w-20 max-w-80 m-6 lg:m-10
           gap-4"
          >
            <img
              src="assets/icons/film.svg"
              alt=""
              className="w-20 col-span-1 "
            />

            <div className="col-span-2">
              <h1 className="text-xl font-sans">Movie Screenings</h1>
              <p className="text-gray-700 text-md pt-2">
                Movie Screenings are organised regularly to incite the hunger of
                adventure and travel among the trekking enthusiasts.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-3 min-w-20 max-w-80 m-6 lg:m-10
           gap-4"
          >
            <img
              src="assets/icons/bonfire.svg"
              alt=""
              className="w-20 col-span-1"
            />

            <div className="col-span-2">
              <h1 className="text-xl font-sans">Survival Camps</h1>
              <p className="text-gray-700 text-md pt-2">
                An adventure packed and thrilling session of Hiking and water
                sports led by the Club to acclimatize the newbies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <ImageGallery items={images} />;
    </>
  );
}

export default Home;
