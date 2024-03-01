import { useState, useEffect } from "react";
import ManageProfileCard from "../components/profile_manage_card";
import AddProfileCard from "../components/profile_add_card";

function SiteDataAlumni(data) {
  const [alumni_data, setAlumniData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_URI + "alumni")
        .then((response) => response.json())
        .then((response) => {
          setAlumniData(response);
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
            {alumni_data.map((member) => {
              return (
                <ManageProfileCard data={member} parent_component="alumni" />
              );
            })}
          </div>
          <div className="flex justify-center items-center m-6">
            <AddProfileCard parent_component="alumni"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteDataAlumni;
