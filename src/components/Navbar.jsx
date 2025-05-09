export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center bg-white text-gray-900 py-8 w-5/6">
        <div>
          <p className="font-bold text-xl">LOGO</p>
        </div>
        <div>
          <ul className="flex space-x-4 text-sm font-medium">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">TOUR</a>
            </li>
            <li>
              <a href="#">PACKAGE</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <a href="#" className="black-button">
          Book Trip
        </a>
      </div>
    </div>
  );
};
