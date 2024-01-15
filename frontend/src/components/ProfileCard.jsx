import { motion } from "framer-motion";

function ProfileCard(props) {
  return (
    <>
      <a href={props.insta_id}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className=" group cursor-pointer relative shadow-lg h-[400px] w-[300px] rounded-lg overflow-hidden bg-gray-700"
        >
          <img
            src={props.photo_url}
            alt={props.profile_name}
            className="z-0 h-full w-full rounded-lg object-cover hover:scale-110 hover:duration-500 scale-100 duration-500"
          />
          <div className="relative bottom-20 left-4 text-left font-sans group-hover:bottom-24 group-hover:duration-500 duration-500">
            <h1
              className=" text-xl font-semibold text-white text-shadow shadow-gray-900"
            >
              {props.profile_name}
            </h1>

            <h1 className="mt-2 text-shadow shadow-gray-900 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              {props.profile_post}{" "}
            </h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className="text-shadow shadow-gray-900 w-10 invert hover:invert-75 relative  bottom-20 left-56"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </div>
        </motion.div>
      </a>
    </>
  );
}

export default ProfileCard;
