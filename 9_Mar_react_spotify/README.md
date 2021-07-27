# React Spotify UI Clone

This is a UI clone for the spotify app built with ReactJS with the following features:

## Authentication

User can login into the app through spotify account
On clicking Login with Spotify button user is:-

-   Redirected to the spotify login page
-   User is prompted to enter the spotify credentials
-   After the user is authenticated, he is redirected to another screen to accept conditions and review the scope of access to his/her spotify account given that is provided to this application and then moved to homepage

## Home Page

Homepage of the website displays:

-   List of New Releases song list
-   Recently played song list
-   All of these are fetched from the user’s spotify account
-   Homepage also shows the list of the user’s playlists, clicking on any of them leads you to the playlist detail page

## Playlist Detail Page

Playlist detail page displays:

-   Name of the playlist with the total number of songs
-   Lists of all the songs in the playlist

## Tech Stack:

-   ReactJS
-   Bootstrap
-   Spotify API
-   OAuth 2.0
-   Git
-   Ubuntu Linux

## Testing and development

To develop or test this app please follow the below steps:

-   Make sure you have the `node` version as `14.17.2` and the `npm` version as `6.14.13`
-   Clone the repo
-   Please get a spotify clientId by registering an app on spotify developer profile and add that in the `9_Mar_react_spotify/src/components/spotify/spotify_credentials.js` file as <br>
    `export const clientId = "YOUR_CLIENT_ID";`
-   Inside the repo run `npm install` and then `npm start` in the terminal
-   This will lauch a new browser window where you can run and test the app
