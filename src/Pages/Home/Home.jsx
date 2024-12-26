import './home.css'
import icon1 from '..//../assets/images/icons/1.png'
import icon2 from '..//../assets/images/icons/2.png'
import icon3 from '..//../assets/images/icons/3.png'
import icon4 from '..//../assets/images/icons/4.png'
import Popular from '../Popular/Popular'
import Instagram from '../Instagram/Instagram'

const Home = () => {
    return (
        <div >
            <div className='md:grid md:grid-cols-2  home'>
                <div className='md:grid md:col-span-1'>

                </div>
                <div className='flex  items-center justify-center'>
                    <div className=' text-white '>
                        <h1 className='text-[55px] font-rancho mb-2'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='mr-12 '>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] font-rancho font-semibold px-10 py-2 rounded mt-6 text-black text-xl'>Learn More </button>
                    </div>
                </div>
            </div>
            {/* quality of the coffeee */}
            <div className='md:grid md:grid-cols-4 lg:gap-6 quality bg-[#ECEAE3] lg:py-11  lg:px-60 p-20 '>
                <div className='md:grid md:col-span-1'>
                    <img src={icon1} alt="" />
                    <p>Awesome Aroma</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='md:grid md:col-span-1'>
                    <img src={icon2} alt="" />
                    <p>Awesome Aroma</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='md:grid md:col-span-1'>
                    <img src={icon3} alt="" />
                    <p>Awesome Aroma</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='md:grid md:col-span-1'>
                    <img src={icon4} alt="" />
                    <p>Awesome Aroma</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
               

            </div>
            <Popular></Popular>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;