import VideoCard from "../components/VideoCard.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { useState,useEffect } from "react";

function Blog() {
  const [blog_data, setBlogData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URI + "blog")
          .then((response) => {
            return response.json();
          })
          .then(async (response) => {
            console.log(response);
            await setBlogData(response);
            console.log(blog_data);
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
        <VideoCard
          video_url="assets/0-dess_mountain.mp4"
          page_name="BLOG POSTS"
        />
      </div>
      <div className="m-10 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blog_data.map((member, index) => {
            return(<BlogCard photo_url={member.photo_url}
            title={member.title}
            author={member.author}
            dateTime={member.dateTime}
            articleLink={member.articleLink}
            description={member.description}/>)
          })}
          
        </div>
      </div>
    </>
  );
}

export default Blog;
