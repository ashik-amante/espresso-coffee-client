
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Banner from '../Pages/Banner/Banner';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;