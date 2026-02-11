
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const BestSellers = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => {
           setProducts(data)
        })
    }, [])

    // console.log(products)
    const bestSellers = products.filter((item) => item.status === "Best Selers");
    // console.log(bestSellers)

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold capitalize mb-6 text-Black">
        Our Best Selling Products
        </h2>
        <p className="text-lg text-gray-600 capitalize md:w-2/3 mx-auto mb-8 leading-relaxed">
          These are our most loved and highly-rated products that customers keep coming back for. Discover why thousands have chosen these bestsellers for quality, style, and exceptional value. Each item has been rigorously tested and approved by our community of satisfied shoppers.
        </p>
      </div>

      {/* best seller products card */}
      <div className='mb-16'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pb-12 md:pb-16 lg:pb-20"
      >
        {
            bestSellers.map((product, idx) => (
                <SwiperSlide
                  key={product.id}
                  className={idx < 6 ? 'md:-ml-6 lg:-ml-8' : ''}
                  style={idx < 6 ? { zIndex: 100 + idx } : undefined}
                >
                  <div className="px-4">
                    <div className="overflow-hidden rounded-lg">
                      <Link to={`/shop/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-base font-semibold mb-2">{product.title}</h4>

                      <div className="flex justify-between">
                        <p className="text-black/50">{product.category}</p>
                        <p className="font-semibold">${product.price}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
