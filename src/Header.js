import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    return <nav className="header">
        <Link to="/">
            <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                alt="amazon-logo" 
            />
        </Link>

        <div className="header__search">
            <input className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Hello {user?.email}</span>
                    <span className="header__optionTwo">{user ? "Log Out" : "Sign In"}</span>
                </div>
            </Link>

            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>
            </Link>

            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>
}

export default Header;
