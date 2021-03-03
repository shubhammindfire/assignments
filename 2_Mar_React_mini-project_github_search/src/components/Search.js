import React, { useEffect, useState } from "react";
import axios from "axios";

// TODO: USE useEffect() hook as suggested by Sobhan
// TODO: USE ReactStrap
function Search() {
    // https://api.github.com/users/

    const [user, changeUser] = useState("");
    const [login, updateLogin] = useState("");
    const [userInfo, updateUserInfo] = useState({});
    const [errorText, updateErrorText] = useState("");

    function addHTML(res) {
        console.log(
            `res = ${res} ${res.data.login} ${res.data.name} ${res.data.avatar_url}`
        );

        // using a separate object {obj} because the spread operator wasn't working
        // well with the {updateUserInfo} callback!!
        // at the end of this function I update {updateUserInfo} with {obj}
        let obj = {
            avatar_url: res.data.avatar_url,
            html_url: res.data.html_url,
            login: res.data.login,
        };

        if (res.data.name) obj = { ...obj, name: `Name: ${res.data.name}` };

        if (res.data.bio) obj = { ...obj, bio: `Bio: ${res.data.bio}` };
        if (res.data.location)
            obj = { ...obj, location: `Location: ${res.data.location}` };
        if (res.data.public_repos)
            obj = {
                ...obj,
                public_repos: `Public Repos: ${res.data.public_repos}`,
            };
        if (res.data.followers) {
            obj = { ...obj, followers: `Followers: ${res.data.followers}` };
            if (res.data.following)
                obj = { ...obj, following: `Following: ${res.data.following}` };
        }

        updateUserInfo(obj);
    }

    function handleSearch(event) {
        // updating login as user
        // I tried "jfie", which exists
        // then I tried "jfiee", which doesn't exist
        // then I tried "jfie" again and this time it didn't work
        // because login was still "jfie" and now user === login was true so no search was made
        // so, here I change login to user each time something is searched
        updateLogin(user);

        console.log(`user = ${user} and login = ${login}`);
        if (user === "" || user === null) {
            console.log(`Empty user. user = ${user}`);
            updateErrorText("Input field is empty");

            // removing the previous user results
            updateUserInfo({ avatar_url: "", error: "" });
        } else if (login !== user) {
            // if login !== user only then a new API call is made
            console.log("Clicked on search with user=" + user);

            const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            if (!regex.test(user)) {
                // adding error messages if the username pattern isn't satisfied
                updateErrorText("Please enter a correct username");
                // removing the previous user results
                updateUserInfo({});
            } else {
                // using axios for API calls
                axios
                    .get(`https://api.github.com/users/${user}`)
                    .then((res) => {
                        console.log(res.data);
                        // updating the login state
                        updateLogin(res.data.login);
                        addHTML(res);
                    })
                    .catch((error) => {
                        console.log(
                            `${error.response.status} error is ${error}`
                        );
                        // 404 means user not found for the particular username
                        if (error.response.status === 404) {
                            updateUserInfo({
                                error:
                                    "Sorry, there seems to be no user with this username",
                            });
                        }
                    });
            }
        }
        console.log(`userInfo = ${userInfo} ${userInfo.avatar_url}`);
        event.preventDefault();
    }

    return (
        <div style={{ fontSize: "20px" }}>
            <form action="#" onSubmit={handleSearch}>
                <input
                    id="text-field"
                    placeholder="Enter a username to search.."
                    value={user}
                    onChange={(ev) => {
                        updateErrorText("");
                        changeUser(ev.target.value);
                    }}
                    type="text"
                    autoFocus
                />
                <button style={{ marginLeft: "20px" }}>Search</button>

                {/*used to display error texts, if any*/}
                <div style={{ color: "red" }}>{errorText}</div>

                <div style={{ marginTop: "20px" }}>{userInfo.error}</div>

                {/* conditional rendering, only if the avatar_url is available */}
                {userInfo.avatar_url ? (
                    <img
                        style={{
                            marignTop: "20px",
                            borderRadius: "50%",
                            width: "150px",
                            height: "150px",
                        }}
                        alt="user avatar"
                        src={userInfo.avatar_url}
                    />
                ) : null}
                {userInfo.login ? (
                    <div style={{ marginTop: "20px" }}>
                        Username:{" "}
                        <a href={userInfo.html_url}>{userInfo.login}</a>
                    </div>
                ) : null}
                <div>{userInfo.name}</div>
                <div>{userInfo.bio}</div>
                <div>{userInfo.location}</div>
                <div>{userInfo.public_repos}</div>
                <div>
                    {userInfo.followers} {userInfo.following}
                </div>
            </form>
        </div>
    );
}

export default Search;
