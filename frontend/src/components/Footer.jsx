function Footer() {
  return (
    <>
      <div className="font-sans grid p-14 gap-10 grid-cols-1 md:grid-cols-3 text-gray-300 bg-stone-800 md:grid-col-3">
        <div>
          <p className="text-2xl text-gray-100">About HnT IIT Mandi</p>
          <p className="text-md pt-6">
            We are the Hiking and Trekking Club of IIT Mandi. For an IIT in the lap of Himalayas, a full-fledged
            Hiking and Trekking club caters to the spirit of adventure that
            resides in the students of IIT Mandi. Himachal Pradesh is one of the
            most beautiful places on earth. Nature truly signifies its beauty in
            these set of mountains where our institute is situated.
          </p>
        </div>
        <div>
            <p className="text-2xl text-gray-100">Navigations</p>
            <ul className="grid grid-cols-2 pt-6 text-md">
                <li><a href = "/" className="mt-5 cursor-pointer duration-300 hover:text-gray-100 hover:duration-300">Home</a></li>
                <li><a href = "/about" className="mt-5 cursor-pointer duration-300 hover:text-gray-100 hover:duration-300">About Us</a></li>
                <li><a href = "/alumni" className="mt-5 cursor-pointer duration-300 hover:text-gray-100 hover:duration-300">Alumni</a></li>
                <li><a href = "/contact" className="mt-5 cursor-pointer duration-300 hover:text-gray-100 hover:duration-300">Contact Us</a></li>
                <li><a href = "/blog" className="mt-5 cursor-pointer duration-300 hover:text-gray-100 hover:duration-300">Blog</a></li>
                <li><a href = "/team" className="mt-5 cursor-pointer duration-300 hover:text-gray-100 hover:duration-300">Team</a></li>
            </ul>
        </div>
        <div>
            <p className="text-2xl text-gray-100">E-mail</p>
            <p className="text-md pt-6">Feel free to send us your feedback and thoughts.</p>
            <a className="text-md pt-3 font-light cursor-pointer duration-300 hover:text-gray-100 hover:duration-300" href="mailto:hnt@students.iitmandi.ac.in">hnt@students.iitmandi.ac.in</a>
        </div>
        <div className="col-span-1 md:col-span-3 flex justify-center items-center"><p>This site is revamped by <a href = "https://github.com/siddharth05092004" className="text-gray-300 duration-300 hover:text-gray-100 hover:duration-300">Siddharth Amlavad</a></p></div>
        
      </div>
      
    </>

  );
}

export default Footer;
