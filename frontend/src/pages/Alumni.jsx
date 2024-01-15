import ProfileCard from "../components/ProfileCard.jsx";
import VideoCard from "../components/VideoCard.jsx";

function Alumni() {
  return (
    <>
      <div className=" w-full">
        <VideoCard
          video_url="assets/0-mountain_clouds.mp4"
          page_name="ALUMNI"
        />
      </div>

      <div className="flex justify-center m-10 lg:ml-32 lg:mr-32">
        <div className="flex flex-wrap justify-center gap-12 w-screen">
          
          <ProfileCard
            profile_name="Vivek Sharma"
            profile_post="Coordinator ( 2015-2017 )"
            insta_id="https://www.instagram.com/vivek.xr/"
            photo_url="assets/images/alumni_images/vivek.png"
          />
          <ProfileCard
            profile_name="Saif Ali Akhtar"
            profile_post="Coordinator ( 2016-2018 )"
            insta_id="https://www.instagram.com/kkonvictt/"
            photo_url="assets/images/alumni_images/saif.png"
          />
          <ProfileCard
            profile_name="Mohit Sharma"
            profile_post="Coordinator ( 2017-2019 )"
            insta_id="https://www.instagram.com/mohitsharma96_/"
            photo_url="assets/images/alumni_images/mohits.png"
          />
          <ProfileCard
            profile_name="Garvit Mathur"
            profile_post="Coordinator ( 2018-2020 )"
            insta_id="https://www.instagram.com/gaganmathur99/"
            photo_url="assets/images/alumni_images/garvit.jpg"
          />
          <ProfileCard
            profile_name="Nidhika Kadela"
            profile_post="Coordinator ( 2018-2020 )"
            insta_id="https://www.instagram.com/nidhikak3/"
            photo_url="assets/images/alumni_images/nidhika.jpeg"
          />
          <ProfileCard
            profile_name="Gaurav Kumar"
            profile_post="Coordinator ( 2018-2020 )"
            insta_id="https://www.instagram.com/gaurav_kumar47/"
            photo_url="assets/images/alumni_images/gaurav.jpg"
          />
          <ProfileCard
            profile_name="Rohit Bhamu"
            profile_post="Coordinator ( 2021-2022 )"
            insta_id="https://www.instagram.com/bhamu4rohit/"
            photo_url="assets/images/alumni_images/rohit.jpg"
          />
          <ProfileCard
            profile_name="Zaidan Bhat"
            profile_post="Coordinator ( 2021-2022 )"
            insta_id="https://www.instagram.com/zaidanbhat/"
            photo_url="assets/images/alumni_images/zaidan.jpeg"
          />
          <ProfileCard
            profile_name="Mohit Kumar (Alex)"
            profile_post="Coordinator ( 2021-2022 )"
            insta_id="https://www.instagram.com/mohit_kapoor_alex/"
            photo_url="assets/images/alumni_images/mohit.jpeg"
          />
          <ProfileCard
            profile_name="Divyasheel"
            profile_post="Coordinator ( 2022-2023 )"
            insta_id="https://www.instagram.com/divyasheel18/"
            photo_url="assets/images/alumni_images/divyasheel.jpeg"
          />
        </div>
      </div>
    </>
  );
}

export default Alumni;
