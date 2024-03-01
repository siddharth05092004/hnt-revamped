import { useState, useEffect } from "react";
import ManageProfileCard from "../components/profile_manage_card";
import AddProfileCard from "../components/profile_add_card";

function SiteDataTeam(data) {
  const [team_data, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_URI + "team")
        .then((response) => response.json())
        .then((response) => {
          setTeamData(response);
          const loader = document.getElementById("preloader");
          loader.classList.add("hidden");
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team_data.map((member) => {
              return (
                <ManageProfileCard data={member} parent_component="team" />
              );
            })}
          </div>
          <div className="flex justify-center items-center m-6 grid-col-span-3">
            <AddProfileCard parent_component="team"/>
          </div>
        </div>
        </div>
    </>
  );
}

export default SiteDataTeam;