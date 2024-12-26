
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Banner from '../Pages/Banner/Banner';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;