import ProfileCard from "../components/ProfileCard.jsx";
import VideoCard from "../components/VideoCard.jsx";
import { motion } from "framer-motion";

function Team() {
  return (
    <>
      <div className=" w-full">
        <VideoCard video_url="assets/0-kandi_drone.mp4" page_name="OUR TEAM" />
      </div>
      <div className="flex justify-center m-10 lg:ml-32 lg:mr-32">
        <div className="flex flex-wrap justify-center gap-12 w-screen">
        
        <ProfileCard
            profile_name="Aryaka"
            profile_post="Coordinator"
            insta_id="https://www.instagram.com/aryakachoudhary/"
            photo_url="assets/images/team_images/aryaka.jpg"
          />
          <ProfileCard
            profile_name="Dhruv Yadav"
            profile_post="Long Trek Leader"
            insta_id="https://www.instagram.com/dhruv.yxdav/"
            photo_url="assets/images/team_images/dhruv.jpeg"
          />
          <ProfileCard
            profile_name="Sanjeet Choudhary"
            profile_post="Long Trek Leader"
            insta_id="https://www.instagram.com/sanjeetchoudharydb/"
            photo_url="assets/images/team_images/sanjeet.jpg"
          />
          <ProfileCard
            profile_name="Brinda Puri"
            profile_post="Short Trek Leader"
            insta_id="https://www.instagram.com/brinda.puri/"
            photo_url="assets/images/team_images/brinda.jpg"
          />
          <ProfileCard
            profile_name="Aditi Sharma"
            profile_post="Short Trek Leader"
            insta_id="https://www.instagram.com/aditii.19/"
            photo_url="assets/images/team_images/aditi.jpg"
          />
          <ProfileCard
            profile_name="Anshul"
            profile_post="Short Trek Leader"
            insta_id="https://www.instagram.com/anshulxx._/"
            photo_url="assets/images/team_images/anshul.jpeg"
          />
          <ProfileCard
            profile_name="Shujat Ali"
            profile_post="Short Trek Leader"
            insta_id="https://www.instagram.com/shujaah_037/"
            photo_url="assets/images/team_images/shujat.jpg"
          />
          <ProfileCard
            profile_name="Nishant Kapoor"
            profile_post="Short Trek Leader"
            insta_id="https://www.instagram.com/n_k_3210/"
            photo_url="assets/images/team_images/nishant.jpg"
          />
          <ProfileCard
            profile_name="Tufail Yaqoob Kataria"
            profile_post="Short Trek Leader"
            insta_id="https://www.instagram.com/tufail_2026/"
            photo_url="assets/images/team_images/tufail.jpg"
          />
          <ProfileCard
            profile_name="Bhavy Rahangdale"
            profile_post="Videographer"
            insta_id="https://www.instagram.com/bhavy.raw/"
            photo_url="assets/images/team_images/bhavy.jpg"
          />
          <ProfileCard
            profile_name="Yash Sehgal"
            profile_post="Videographer"
            insta_id="https://www.instagram.com/yashsehgal_29/"
            photo_url="assets/images/team_images/yash.png"
          />
          <ProfileCard
            profile_name="Paarth Dwivedi"
            profile_post="Social Media"
            insta_id="https://www.instagram.com/paarth_353/"
            photo_url="assets/images/team_images/paarth.jpg"
          />
          <ProfileCard
            profile_name="Aviral Garg"
            profile_post="Social Media"
            insta_id="https://www.instagram.com/aviral.garg_/"
            photo_url="assets/images/team_images/aviral.jpg"
          />
          <ProfileCard
            profile_name="Vatsal Hariramani"
            profile_post="Finances"
            insta_id="https://www.instagram.com/evilgenius42/"
            photo_url="assets/images/team_images/vatsal.jpg"
          />
          <ProfileCard
            profile_name="Sowmika Rao Samudrala"
            profile_post="Finances"
            insta_id="https://www.instagram.com/_sowmikaaa.__/"
            photo_url="assets/images/team_images/sowmika.jpg"
          />
          <ProfileCard
            profile_name="Vaibhav Jain"
            profile_post="Editor"
            insta_id="https://www.instagram.com/jain_vaib.hav/"
            photo_url="assets/images/team_images/vaibhav.jpg"
          />
          <ProfileCard
            profile_name="Mannat Mahajan"
            profile_post="Editor"
            insta_id="https://www.instagram.com/mannat24___/"
            photo_url="assets/images/team_images/mannat.jpg"
          />
          <ProfileCard
            profile_name="Hryadyansh Saraswat"
            profile_post="Equipments Incharge"
            insta_id="https://www.instagram.com/hryadyansh/"
            photo_url="assets/images/team_images/hryadyansh.jpg"
          />
          <ProfileCard
            profile_name="Siddharth Amlavad"
            profile_post="Web Developer"
            insta_id="https://www.instagram.com/siddharth_594"
            photo_url="assets/images/team_images/siddharth.jpeg"
          />
        </div>
      </div>
    </>
  );
}

export default Team;
