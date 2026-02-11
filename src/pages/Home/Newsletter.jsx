import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-b from-red-50 to-white xl:px-28 px-4 py-20'>
         <h2 className="text-4xl md:text-5xl font-bold text-center capitalize mb-4 text-Black animate-slideDown">
         Connect With Us on Instagram
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Follow us for daily style inspiration, exclusive deals, and behind-the-scenes content. Join our community of fashion lovers!</p>

        {/* insta grid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20 animate-fadeIn'>
            <Link className='group overflow-hidden rounded-lg'><img src="/images/instagram/img1.png" alt="" className='group-hover:scale-110 transition-transform duration-300' /></Link>
            <Link className='group overflow-hidden rounded-lg'><img src="/images/instagram/img2.png" alt="" className='group-hover:scale-110 transition-transform duration-300' /></Link>
            <Link className='group overflow-hidden rounded-lg'><img src="/images/instagram/img3.png" alt="" className='group-hover:scale-110 transition-transform duration-300' /></Link>
            <Link className='group overflow-hidden rounded-lg'><img src="/images/instagram/img4.png" alt="" className='group-hover:scale-110 transition-transform duration-300' /></Link>
            <Link className='group overflow-hidden rounded-lg'><img src="/images/instagram/img5.png" alt="" className='group-hover:scale-110 transition-transform duration-300' /></Link>
            <Link className='group overflow-hidden rounded-lg'><img src="/images/instagram/img6.png" alt="" className='group-hover:scale-110 transition-transform duration-300' /></Link>
        </div>

        {/* newsletter */}
        <div className='animate-slideUp'>
        <h2 className="text-4xl font-bold text-center capitalize mb-2 text-Black">
        Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-center mb-8">Get exclusive offers, new arrivals, and style tips delivered to your inbox!</p>
        <form className='md:w-1/2 mx-auto text-center'>
            <div className='flex flex-col md:flex-row gap-2'>
              <input type="email" name="email" id="email" placeholder='Enter your email address...' className='flex-1 h-12 bg-white border-2 border-gray-300 outline-none pl-4 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 placeholder:text-gray-400'/>
              <button type="submit" className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap text-sm md:text-base cursor-pointer'>Subscribe</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Newsletter