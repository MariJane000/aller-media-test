import React from 'react';
import propTypes from 'prop-types';
import Navigation from '@Components/Navigation/Navigation';

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-col">
                {/* <Logo /> */}
                <Navigation />
            </div>
        </header>
    );
};

// Header.defaultProps = {
//     user: {},
// };

// Header.propTypes = {
//     user: propTypes.shape({
//         role: propTypes.string.isRequired,
//         email: propTypes.string.isRequired,
//     }),
// };

export default Header;
