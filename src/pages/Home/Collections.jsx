
const Collections = () => {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20 rounded-2xl overflow-hidden'>
      <div className="h-[580px] flex justify-between flex-col md:flex-row items-center py-12 md:py-0">
        <div className="md:w-1/2 hidden md:block"></div>
        <div className="md:w-1/2 w-full text-white animate-slideUp">
          <img src="/images/zara-logo.png" alt="Collection Logo" className="mb-6" />
          <p className="text-lg md:text-xl capitalize my-8 md:w-2/3 leading-[32px] font-light">
            Experience sophistication redefined. Our exclusive evening wear collection combines timeless elegance with contemporary design. Each piece is meticulously crafted to make you feel confident and radiant.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 capitalize rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer active:scale-95">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
