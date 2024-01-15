import VideoCard from "../components/VideoCard.jsx";
import BlogCard from "../components/BlogCard.jsx";

function Blog() {
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
          <BlogCard
            photo_url="assets/images/blog_images/blog1.jpeg"
            title="Trek to Kareri Lake"
            author="Anoushka Banerjee"
            dateTime="August 30, 2019 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/trek-to-kareri-lake-45f63628e78b"
            description="At 1 am, the bus engine roared to life and so did our excitement reached cloud nine. We were a group of 12 people packed in a mini bus beginning our journey from Mandi, Himachal Pradesh."
          />

          <BlogCard
            photo_url="assets/images/blog_images/blog2.jpeg"
            title="Trek to Kandi"
            author="Anoushka Banerjee"
            dateTime="Jan 13, 2020 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/hike-to-kandi-95ab8aa8bb07"
            description="88 faculty, students, staff and their family along with the participants from IIT Madras and NITK Surathkal of 15th WiSSAP, hosted by IIT Mandi, hiked a snow-clad trail in Kandi Village. Kandi is about 20 km from IIT Mandi. The maximum elevation of the trail is 7,300 feet."
          />

          <BlogCard
            photo_url="assets/images/blog_images/blog3.jpeg"
            title="Trek to Dalhousie"
            author="Neha Aswal"
            dateTime="Jan 4, 2020 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/the-dalhousie-trip-837893a25992"
            description="Just a minute before midnight of 10th June, we started on what would be one of the most fascinating journeys. A non-stop ride followed, as the bus drove us from IIT Mandi to Dalhousie."
          />

          <BlogCard
            photo_url="assets/images/blog_images/blog4.jpeg"
            title="Trek to McLeodganj and Triund"
            author="Srividya Ramanathan"
            dateTime="Oct 16, 2019 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/the-mountains-are-calling-and-i-must-go-73538a43ac34"
            description="Be it the bone-chilling cold at wee hours of the night, the bumpy ride from Mandi to McLeodganj, or the sleep deprivation — nothing could deter our spirits as we hiked along the crooked Triund trail to catch a glimpse of the lofty Dhauladhar ranges."
          />

          <BlogCard
            photo_url="assets/images/blog_images/blog5.jpg"
            title="A rejuvenating hike to Bijali Mahadev"
            author="Neha Aswal"
            dateTime="Oct 5, 2019 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/a-rejuvenating-hike-to-bijli-mahadev-83ccc745a8f9"
            description="A student’s worst nightmare is waking up early in the morning, all the more for the college students. But when you see these faces awake even before daybreak, it’s a promise for an entire amazing day that awaits. Fortyfour enthusiasts packed in a bus and a van left for Bijli Mahadev, Kullu, at half past five from the campus."
          />
          <BlogCard
            photo_url="assets/images/blog_images/blog6.png"
            title="Hike to Griffon Peak"
            author="Anoushka Banerjee"
            dateTime="January 26, 2020 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/hike-to-griffon-peak-b64301f2151d"
            description="IIT Mandi folks have hiked Griffon multiple times. But this time we pledged to make ‘all the difference’ by hiking upon trails ‘less traveled by’. 45 faculty, staff and students set their foot upon a narrow unkempt trail. In a single file, we started climbing up the mountain."
          />

          <BlogCard
            photo_url="assets/images/blog_images/blog7.png"
            title="Nag Tibba Trek"
            author="Ridhi Ratan"
            dateTime="February 6, 2020 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/nag-tibba-trek-4fe4f76d0e44"
            description="In the chilling winters when the temperature falls down being negative, when the world can be found shivering inside those furry blankets and the sweet Sparrows refuse to chirp,we, some twelve Adventurous chunks of IIT Mandi took a trip towards the highest peak of Uttrakhand ‘Nag Tibba’ 3022mts"
          />

          <BlogCard
            photo_url="assets/images/blog_images/blog8.png"
            title="Snow Trek to Parashar Lake"
            author="Kriti Mehta"
            dateTime="April 16, 2020 at 2:00 pm"
            articleLink="https://medium.com/@hnt_11084/snow-trek-to-parashar-41a0591304cd"
            description="Packed in a couple of institute buses, as we left our college around 8:15 in the morning with the hot, blazing sun shining in all its glory, we started witnessing the breathtaking views of the beautiful and fabled Uhl river flowing at the foot of the magnificent and alluring mountains. "
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
