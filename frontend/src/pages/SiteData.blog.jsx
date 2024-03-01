import { useState, useEffect } from "react";
import ManageBlogCard from "../components/blog_manage_card.jsx";
import AddBlogCard from "../components/blog_add_card.jsx";

function SiteDataBlog(data) {
  const [blog_data, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_URI + "blog")
        .then((response) => response.json())
        .then((response) => {
          setBlogData(response);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blog_data.map((member) => {
              return (
                <ManageBlogCard data={member}/>
              );
            })}
          </div>
          <div className="flex justify-center items-center m-6 grid-col-span-3">
            <AddBlogCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteDataBlog;