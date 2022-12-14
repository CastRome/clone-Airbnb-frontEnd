import '../styles/components/Header.scss';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import logo from '../styles/icons/logo.svg';
import soloLogo from '../styles/icons/airbnb-1.svg';
import { Outlet} from 'react-router-dom';

const Header = ()=>{
    return(
        <div>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                    <img src={soloLogo} alt="logo"/>
                </div>
                <SearchBar first='En cualquier lugar del mundo' second='Cualquier semana' third='Cuantos?'/>
                <NavBar/>
            </header> 
            <section>
                <Outlet/>
            </section>          
        </div>
    )
}

export default Header