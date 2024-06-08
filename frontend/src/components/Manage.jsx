import { useEffect } from "react";

function Manage(props) {

  useEffect(()=>{
    const selected_ele = document.getElementById(props.selected+"_button")
    selected_ele.classList.remove("bg-gray-900")
    selected_ele.classList.add("bg-gray-700")
  },[])


  return (
    <>
    <div className="my-10 flex justify-center items-center">
      <div className=" inline-flex rounded-md shadow-sm" role="group">
        <a href="/manage-team">
          <button
          id = "team_button"
            type="button"
            className="px-3 py-2 rounded-l-lg border border-white text-white bg-gray-900 hover:scale-105"
          >
            Team
          </button>
        </a>
        <a href="/manage-alumni">
          <button
          id = "alumni_button"
            type="button"
            className="px-3 py-2  text-white border border-white bg-gray-900 hover:scale-105"
          >
            Alumni
          </button>
        </a>
        <a href="/manage-blog">
          <button
            id = "blog_button"
            type="button"
            className="px-3 py-2 rounded-r-lg border border-white text-white bg-gray-900 hover:scale-105"
          >
            Blog
          </button>
        </a>
      </div>
      </div>
    </>
  );
}

export default Manage;
