import VideoCard from "../components/VideoCard.jsx";

function Contact() {
  return (
    <>
      <div className=" w-full">
        <VideoCard
          video_url="assets/0-dess_mountain.mp4"
          page_name="CONTACT US"
        />
      </div>

      <div className="flex item-center justify-center m-6 md:m-14 ">
        <div className="grid grid-cols-1 gap-4 md:gap-10 lg:grid-cols-3">
          <div className=" w-max-md border-4 rounded-2xl border-gray-700 p-5">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-16 justify-center items-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <p className="flex justify-center items-center font-bold font-mono text-lg md:text-2xl uppercase pt-3">
              Call us
            </p>
            <p className="flex justify-center pt-3 text-md md:text-xl">
              Aryaka : +91 9325899003
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
