import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import PersonIcon from "@material-ui/icons/PersonOutline";

function TopUserProfile() {
    const userInfo = useSelector((state) => state.userReducer.userInfo);

    return (
        <div
            className="d-flex justify-content-end py-2 pr-5 text-white sticky-top"
            style={{ backgroundColor: "black" }}
        >
            <Button
                className="py-1 px-4 mr-4 font-weight-bold rounded-pill"
                style={{
                    backgroundColor: "black",
                    fontSize: "14px",
                    borderWidth: "1px",
                    borderColor: "white",
                }}
            >
                {" "}
                UPGRADE
            </Button>
            <Button
                className="rounded-pill"
                style={{ backgroundColor: "black", border: "none" }}
            >
                <div
                    className="d-inline rounded-circle p-1 ml-0 mr-2"
                    style={{ backgroundColor: "#333333" }}
                >
                    <PersonIcon />
                </div>
                {userInfo}
            </Button>
        </div>
    );
}

export default TopUserProfile;
