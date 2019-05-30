import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = () => {
    return (
        <div className="wrapper">
        <ImageThumbnail />
        <HeaderTitle />
        </div>
        );
}

export default HeaderContainer;