
import photo from '../../assets/images/cups/Rectangle 9.png'
import photo1 from '../../assets/images/cups/Rectangle 10.png'
import photo2 from '../../assets/images/cups/Rectangle 11.png'
import photo3 from '../../assets/images/cups/Rectangle 12.png'
import photo4 from '../../assets/images/cups/Rectangle 13.png'
import photo5 from '../../assets/images/cups/Rectangle 14.png'
import photo6 from '../../assets/images/cups/Rectangle 15.png'
import photo7 from '../../assets/images/cups/Rectangle 16.png'

const Instagram = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mt-20 space-y-2'>
                 <h1 className='font-raleway'>Follow Us Now</h1>
                 <h1 className='font-rancho text-5xl'>Follow on Instagram</h1>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-20'>
                <div className='grid col-span-1'>
                    <img src={photo} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo1} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo2} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo3} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo4} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo5} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo6} alt="" />

                </div>
                <div className='grid col-span-1'>
                    <img src={photo7} alt="" />

                </div>

            </div>
        </div>
    );
};

export default Instagram;