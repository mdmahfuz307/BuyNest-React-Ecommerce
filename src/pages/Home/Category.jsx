import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/images/company/brand1.png" },
  { id: 2, img: "/images/company/brand2.png" },
  { id: 3, img: "/images/company/brand3.png" },
  { id: 4, img: "/images/company/brand4.png" },
  { id: 5, img: "/images/company/brand5.png" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-12 animate-fadeIn">
        <p className="font-bold md:-rotate-90 uppercase text-center bg-gradient-to-r from-red-500 to-red-600 text-white md:p-3 p-3 rounded-lg inline-flex shadow-lg md:whitespace-nowrap text-sm md:text-base">
          Explore Styles
        </p>
        <div className="group">
          <Link to="/">
            <img src="/images/category/image1.png" alt="" className="w-full hover:scale-105 transition-all duration-300 rounded-xl shadow-lg group-hover:shadow-2xl" />
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-2 gap-4">
            <Link to="/" className="group overflow-hidden rounded-xl">
              <img
                src="/images/category/image2.png"
                alt=""
                className="hover:scale-110 transition-all duration-300 group-hover:shadow-lg w-full h-full object-cover"
              />
            </Link>
            <Link to="/" className="group overflow-hidden rounded-xl">
              <img
                src="/images/category/image3.png"
                alt=""
                className="hover:scale-110 transition-all duration-300 group-hover:shadow-lg w-full h-full object-cover"
              />
            </Link>
            <Link to="/" className="group overflow-hidden rounded-xl">
              <img
                src="/images/category/image4.png"
                alt=""
                className="hover:scale-110 transition-all duration-300 group-hover:shadow-lg w-full h-full object-cover"
              />
            </Link>
            <Link to="/" className="group overflow-hidden rounded-xl">
              <img
                src="/images/category/image5.png"
                alt=""
                className="hover:scale-110 transition-all duration-300 group-hover:shadow-lg w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
