import ProfileCard from "../components/ProfileCard.jsx";
import VideoCard from "../components/VideoCard.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Team() {
  const [team_data, setTeamData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URI + "team")
          .then((response) => {
            return response.json();
          })
          .then(async (response) => {
            console.log(response);
            await setTeamData(response);
            console.log(team_data);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  return (
    <>
      <div className=" w-full">
        <VideoCard video_url="assets/0-kandi_drone.mp4" page_name="OUR TEAM" photo_url="assets/images/load_videocard/kandi_drone.png"/>
      </div>
      <div className="flex justify-center m-10 lg:ml-32 lg:mr-32">
        <div className="flex flex-wrap justify-center gap-12 w-screen">
          {team_data.map((member, index) => {
            return(<ProfileCard profile_name={member.profile_name}
            profile_post={member.profile_post}
            insta_id={member.insta_id}
            photo_url={member.photo_url}/>)
          })}
        </div>
      </div>
    </>
  );
}

export default Team;
