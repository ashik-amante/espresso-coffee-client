import './banner.css'
import icon from '../../assets/images/more/logo1.png'


const Banner = () => {
    return (
        <div className="banner">
            <div className='flex items-center justify-center md:gap-2'>
                <img className='w-[75px]' src={icon} alt="" />
                <h1 className='text-white md:text-[60px] text-[40px]text-center'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Banner;