# Chessmate-client

Chessmate is a web application for playing chess online, a work in progress.

## Description

Chessmate-client is a React application that relies on Chessmate-backend. The project is created using Vite and utilizes libraries such as tailwindcss, react-router, redux and redux-toolkit, i18next, signalr and so on. The idea is that Chessmate-backend handles all user and chess game logic and the client, the React app in this case, renders the current game state and gathers input, aka the moves from the players. SignalR is used to achieve the real time communication between the client and the backend. The purpose of the project is to learn and to have fun doing so.

## Installation

Run

```
npm install
```
in the project root folder. After that everything should be set and the client application can be started with
```
npm run dev
```
Copy paste the localhost url to your browser to navigate to the application. Requires Chessmate-backend running for any server side functionality.

## Current features
- user registration and logging in (any dummy email address can be used since the email address is not currently utilized, password should contain a digit, an uppercase character, a special character, and should be at least 8 characters long)
- base for SignalR communication (Lobby with a real time list of online users, can be tested by registering two users to the system and opening two browser tabs and logging in as different users in each tab)
- UI localization using i18n (Currently in English and Finnish where applied)

## TODO
For the MVP there's still a lot to do:
- persist user state when for example refreshing browser
- the possibility to invite a user to a match and to accept an invitation, from the Lobby
- everything related to the chess gameplay :)
- everything related to tests
- deployment to a real server / cloud

For the future, if not to MVP:
- many features like player rankings, friend system, the possibility to go through previous games step by step, ...