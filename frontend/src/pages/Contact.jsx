import VideoCard from "../components/VideoCard.jsx";

function Contact() {
  return (
    <>
      <div className=" w-full">
        <VideoCard
          video_url="assets/0-dess_mountain.mp4"
          page_name="CONTACT US"
          photo_url="assets/images/load_videocard/dess_mountain.png"
        />
      </div>

      <div className="flex item-center justify-center m-6 md:m-14 ">
        <div className="grid max-w-5xl grid-cols-1 gap-4 md:gap-10 lg:grid-cols-2">
          
          <div className=" w-max-md border-4 rounded-2xl border-gray-700 p-5">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <p className="flex justify-center items-center font-bold font-mono text-lg md:text-2xl uppercase pt-3">
              Address
            </p>
            <p className="flex justify-center pt-3 text-md md:text-xl">
              Hiking and Trekking Club, Bamboo Block, Student Gymkhana Office,
              South Campus - Indian Institute of Technology, Mandi(H.P.) -
              175005
            </p>
          </div>

          <div className=" w-max-md border-4 rounded-2xl border-gray-700 p-5">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </span>
            <p className="flex justify-center items-center font-bold font-mono text-lg md:text-2xl uppercase pt-3">
              E-mail Address
            </p>
            <p className="flex justify-center pt-3 text-sm md:text-xl font-mono duration-300 hover:text-red-400 hover:duration-300">
              <a href="mailto:hnt@students.iitmandi.ac.in">
                hnt@students.iitmandi.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
