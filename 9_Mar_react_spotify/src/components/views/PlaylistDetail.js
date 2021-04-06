import React from "react";
import SideNav from "../ui/sideNav/SideNav.js";
import Footer from "../ui/footer/Footer.js";
import PlaylistPage from "../ui/content/playlistPage/PlaylistPage.js";

function PlaylistDetail() {
    return (
        <div>
            <div className="row">
                <div
                    className="col-2 p-0"
                    style={{ backgroundColor: "black", height: "120vh" }}
                >
                    <SideNav />
                </div>
                <div
                    className="col-10 p-0"
                    style={{ backgroundColor: "#121212", height: "100vh" }}
                >
                    <PlaylistPage />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PlaylistDetail;
