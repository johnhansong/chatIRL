import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import './Navigation.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <li>
                <ProfileButton user={sessionUser} />
            </li>
        );
    } else {
        sessionLinks = (
            <li className='signInUp'>
                <OpenModalButton
                    id="login-button"
                    buttonText="Log In"
                    modalComponent={<LoginFormModal />} />
                <OpenModalButton
                    id="signup-button"
                    buttonText="Sign Up"
                    modalComponent={<SignupFormModal />} />
            </li>
        );
    }

    return (
        <ul className='nav-bar'>
            <li>
                <NavLink to="/" id='fav-icon'>
                    <span id='app-title'>ChatIRL</span>
                </NavLink>
            </li>
            <div className='profile'>
                {sessionUser && <NavLink to="/groups/create" className="new"> Start a new group</NavLink>}
                {isLoaded && sessionLinks}
            </div>
        </ul>
    );
}

export default Navigation;
