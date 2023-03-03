import React from "react";
import "./app-header.css";

const AppHeader = ({allLikes, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Ekaterina Muzheva</h1>
            <h2>{allPosts} записей, из них понравилось {allLikes}</h2>
        </div>
    )
};

export default AppHeader;