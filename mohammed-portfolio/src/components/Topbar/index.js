import { Link } from 'react-router-dom';
import './index.scss';
import LogoQ from "../../assets/images/logoQ.png";

const Topbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoQ} alt='logo'/>
        </Link>
    </div>
) 

export default Topbar