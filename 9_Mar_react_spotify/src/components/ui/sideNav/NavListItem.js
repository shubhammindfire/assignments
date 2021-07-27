import React from "react";

function NavListItem(props) {
    const Icon = props.Icon;
    const title = props.title;
    const divClassName =
        title === "Create Playlist" || title === "Liked Songs"
            ? "d-flex px-4 ml-4 mr-5 rounded align-items-center"
            : "d-flex px-4 ml-4 mr-3 my-1 rounded align-items-center";
    const divStyle = {
        backgroundColor: title === "Home" ? "#282828" : "transparent",
    };
    const iconStyle = {
        color: title === "Home" ? "#ffffff" : "#aeaeae",
        fontSize: "30px",
    };
    const titleStyle = {
        color: title === "Home" ? "#ffffff" : "#aeaeae",
        fontSize: "14px",
        paddingTop: "10px",
    };
    return (
        <div className={divClassName} style={divStyle}>
            <Icon style={iconStyle} />
            <p
                className="d-inline pl-3 mt-1 font-weight-bold"
                style={titleStyle}
            >
                {title}
            </p>
        </div>
    );
}

export default NavListItem;
