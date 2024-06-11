import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    const navigate = useNavigate();

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        navigate('/')
    };

    const viewGroups = (e) => {
        e.preventDefault
        navigate('/groups')
        setShowMenu(false)
    }

    const viewEvents = (e) => {
        e.preventDefault
        navigate('/events')
        setShowMenu(false)
    }

    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <div className="user-menu">
            <button className="user-menu-btn" onClick={toggleMenu}>
                <CgProfile className="profile-img"/>
                <div className="button-carat">{showMenu ? '⋀' : '⋁'}</div>
            </button>
            {showMenu && <ul className={ulClassName} ref={ulRef}>
                <li id="user-menu-txt">Hello, {user.firstName}</li>
                <li id="user-menu-txt">{user.email}</li>
                <button id="view-groups" onClick={viewGroups}>View groups</button>
                |
                <button id="view-events" onClick={viewEvents}>View Events</button>
                <li id="user-menu-btn">
                    <button id='logout-btn' onClick={logout}>Log Out</button>
                </li>
            </ul>}
        </div>
    );
}

export default ProfileButton;
