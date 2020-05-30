# BOOKMYGIG

![BookMyGig Logo](https://github.com/manojnaidu619/bookmygig-frontend/blob/master/bookmygig.png)

### This is the frontend part, checkout the backend [here](https://github.com/manojnaidu619/bookmygig-backend)

## Inspiration

I see that shows/events were called off, as soon as the pandemic broke out. This has impacted the creators severely and I wanted to build something which helps content creators perform live shows online for live audiences.

## What it does

This is a platform where creators perform live online shows (like dance, comedy, plays, and the list goes on...) for live audiences. There is also a chat feature, where the users who are part of the same show can chat in realtime while they are watching it.

## Built using

* [ReactJS](https://reactjs.org/)
* [NodeJS](https://nodejs.org/en/)
* [Redis](https://redis.io/) as an in-memory database
* [Node-Media-Server](https://github.com/illuspas/Node-Media-Server) for video streaming
* [Socket.io](https://socket.io/) for realtime-chat
 
## Challenges I ran into

* Handling creator data in the backend and storing it efficiently using built-in Redis data structures.
* Fetching all the shows asynchronously(using [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)), and resolving them was tricky.
* Figuring out a way to load & play the live stream on the browser without clashing between other sessions was really challenging.

## Accomplishments that I'm proud of

I could successfully able to hook-up all the different parts of the application together and come up with the working end product.

## What I learned

I picked up a lot in this process, this was the first time having my hands-on Redis, Socket.io and came across terms like RTMP, its uses, and also how to set one up.

### How to Setup
* Download the repo as zip-file
* unzip it and `cd` into project folder
* `npm install`
* `npm start`
* head over to `http://localhost:3000` in the browser