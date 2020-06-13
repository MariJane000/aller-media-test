import React from 'react';
import { Navigation } from "@Components/Navigation";

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-col"> 
                <div className="header-title">Articles</div>
            </div>
            <div className="header-col"> 
                <Navigation />
            </div>
        </header>
    );
};


export default Header;
