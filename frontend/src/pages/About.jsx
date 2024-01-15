import VideoCard from "../components/VideoCard.jsx";
import { motion } from "framer-motion";
import NewsCard from "../components/NewsCard.jsx";
import Carousel from "nuka-carousel";

function About() {
  return (
    <>
      <div className=" w-full">
        <VideoCard
          video_url="assets/0-mountain_clouds.mp4"
          page_name="ABOUT US"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <div className="m-4 grid grid-cols-1 gap-6 sm:gap-20 sm:grid-cols-2 max-w-4xl md:m-10">
          <div className="items-center flex justify-center">
            <img
              src="assets/images/about_page_image.jpg"
              className=" max-w-screen "
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl">About HnT</h1>
            <p className="pt-3 font-light text-lg">
              For an IIT in the lap of Himalayas, a full-fledged Hiking and
              Trekking club caters to the spirit of adventure that resides in
              the students of IIT Mandi. Himachal Pradesh is one of the most
              beautiful places on earth. Places like Prashar, Rewalsar, Kamand,
              Manikaran etc. are ideal for hiking. Nature truly signifies its
              beauty in these set of mountains where our institute is situated.
              With the Director himself having keen interest in hiking, the club
              arranges trips on regular basis for its members to various places.
              The Hiking and Trekking Club is the single largest club at IIT
              Mandi.
            </p>
            <ul className="font-light list-image-[url(/assets/icons/checkmark.svg)] m-5">
              <li className="text-lg">Camping and Adventure</li>
              <li className="text-lg mt-3">Survival Camps</li>
              <li className="text-lg mt-3">Trekking</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="bg-stone-800 text-gray-200 flex justify-center items-center p-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 max-w-3xl"
        >
          <h1 className="text-4xl flex justify-center items-center">
            Our Advisors
          </h1>
          <div className="m-10 grid grid-cols-1 gap-4 md:gap-16 md:grid-cols-2">
            <div className="">
              <span className="flex justify-center">
                <img
                  src="assets/images/jinesh.png"
                  className="border-solid border-4 border-gray-100 w-64 rounded-full"
                  alt=""
                />
              </span>
              <h1 className="flex justify-center text-xl md:text-3xl mt-4">
                Dr. Jinesh Machchhar
              </h1>
              <p className="flex justify-center text-red-300 text-md md:text-xl">
                Advisor
              </p>
            </div>
            <div>
              <img
                src="assets/images/ashutosh.jpeg"
                className="border-solid border-4 border-gray-100 w-64 rounded-full"
                alt=""
              />
              <h1 className="flex justify-center text-xl md:text-3xl mt-4">
                Dr. Ashutosh Kumar
              </h1>
              <p className="flex justify-center text-red-300 text-md md:text-xl">
                {" "}
                Co-Advisor
              </p>
            </div>
          </div>

          <div></div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center mt-8 text-4xl font-thin">
        What People Say
      </div>
      <div className="flex justify-center items-center">
        <Carousel className="max-w-sm md:max-w-3xl ">
          <NewsCard
            photo_url="assets/images/about_us_carousel/image1.jpg"
            text="Cleaning up the rubbish at places in Himalayas which can not be approached by road. The Hiking and Trekking (HnT) club of IIT Mandi organises clean-up expeditions. We have cleaned Beas Kund (near Manali), Prashar Lake (in Mandi district), Shali Tibba trail (near Shimla) and trails around Mandi in the past."
            author="Clean The Himalayas"
            article_url="https://timesofindia.indiatimes.com/city/chandigarh/iit-mandi-students-clean-up-himalayas/articleshow/59209830.cms"
            article_text="Times of India"
          />
          <NewsCard
            photo_url="assets/images/about_us_carousel/image2.jpg"
            text="It was very good. I really enjoyed it. It was beautiful; mountains were beautiful, people were beautiful. We had good weather and hence we could do all the passes. We went to different tops like Khani, Griffon and Arnehar in the Kamand valley. We were a lot high in the mountains and the experience was wonderful."
            author="Kaushal Bhardwaj"
            article_url="http://discoverhimalaya.in/"
            article_text="Discover Himalaya"
          />

          <NewsCard
            photo_url="assets/images/about_us_carousel/image3.jpg"
            text="The river crossing is not too difficult if one is careful and equipped with the right gear. Best to bring trekking poles to balance as the rocks underneath can be slippery.
            You will also get to see a variety of flora and fauna, and butterflies along the way. On your way to and back, you can also visit the quaint village Kamand and its scenic dam."
            author="Nidhika Kadela"
            article_url="https://www.facebook.com/hntiitmandi/"
            article_text="Coordinator - HnT Club"
          />
        </Carousel>
      </div>
    </>
  );
}

export default About;
