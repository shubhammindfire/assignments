import React from "react";

function NavListItem(props) {
    // const { icon, title } = props;
    const Icon = props.Icon;
    const title = props.title;
    const divClassName =
        title === "Create Playlist" || title === "Liked Songs"
            ? "d-flex px-3 ml-4 mr-3 rounded"
            : "d-flex px-3 ml-4 mr-3 my-2 rounded";
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
    };
    return (
        <div className={divClassName} style={divStyle}>
            <Icon style={iconStyle} />
            <p className="d-inline pl-3 font-weight-bold" style={titleStyle}>
                {title}
            </p>
        </div>
    );
}

export default NavListItem;
