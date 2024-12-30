import './footer.css'
import logo1 from '../../assets/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";
import { FaMessage } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=" bg-base-200 text-base-content p-10 design">
            <div className='footer max-w-6xl mx-auto   flex justify-between'>
                <div>
                    <div>
                        <img className='w-[75px]' src={logo1} alt="" />
                    </div>
                    <div>
                        <h1 className='font-rancho text-4xl mb-2 text-[#331A15]'>Espresso Emporium</h1>
                        <p className='font-raleway   lg:pr-52'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>
                    <div className='flex gap-6 text-3xl mt-4 mb-4'>
                        <span><FaFacebook /></span>
                        <span><FaInstagram /></span>
                        <span><FaTwitter /></span>
                        <span><FaLinkedin /></span>
                    </div>
                    <div>
                        <h1 className='font-rancho text-3xl '>Get in Touch</h1>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <span><IoCallOutline /></span>
                            <p className='font-raleway'>01518984632</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span><FaMessage /></span>
                            <p className='font-raleway'>abashik17@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span><IoLocationSharp /></span>
                            <p className='font-raleway'>mama palace , Thakurgaon</p>
                        </div>
                    </div>
                </div>

                <form>
                    <h6 className="footer-title font-rancho text-4xl text-[#331A15]">Connect with Us</h6>
                    <fieldset className="form-control w-80">

                        <div className="join mb-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered join-item w-full" />

                        </div>
                        <div className="join mb-2">
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered join-item w-full" />

                        </div>
                        <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                        <div>
                            <input className='font-rancho text-[#331A15] text-2xl rounded-2xl bg-transparent  px-6 py-2 mt-4 outline outline-1 btn hover:bg-transparent' type="submit" value="Send Message" />

                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>
    );
};

export default Footer;