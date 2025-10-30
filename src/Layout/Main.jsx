
import { Outlet, useLocation } from 'react-router';
import Footer from '../shared/Footer/Footer';
import NavBar from '../shared/NavBar/NavBar';

const Main = () => {
    const loaction = useLocation();
    const noHeaderFooter = loaction.pathname.includes('login') || loaction.pathname.includes('signin');
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;