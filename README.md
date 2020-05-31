# BOOKMYGIG

![BookMyGig Logo](https://github.com/manojnaidu619/bookmygig-frontend/blob/master/bookmygig.png)

### This is the frontend part, checkout the backend [here](https://github.com/manojnaidu619/bookmygig-backend)

## Inspiration

I see that shows/events were called off, as soon as the pandemic broke out. This has impacted the creators severely and I wanted to build something which helps content creators perform live shows online for live audiences.

## What it does

This is a platform where creators perform live online shows (like dance, comedy, plays, and the list goes on...) for live audiences. There is also a chat feature, where the users who are part of the same show can chat in realtime while they are watching it.

[Checkout the demo here](https://youtu.be/dG-Yic-VWQ4)

## Built using

* [ReactJS](https://reactjs.org/)
* [NodeJS](https://nodejs.org/en/)
* [Redis](https://redis.io/) as an in-memory database
* [Node-Media-Server](https://github.com/illuspas/Node-Media-Server) for video streaming
* [Socket.io](https://socket.io/) for realtime-chat

#### Three main Pillars of the application : 

*  **REDIS** is used to store data, as it is an in-memory database which makes our app incredibly fast and the process of exchanging data back and forth is seamless. Our application uses different blend of [built-in data structures](https://redislabs.com/redis-enterprise/data-structures/) to store and retreive data in an efficient manner.

* **RTMP** provides a bidirectional message multiplex service over a reliable stream transport, such as TCP, intended to carry parallel streams of video, audio, and data messages, with associated timing information, between a pair of communicating peers. More about RTMP could be learned [here](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol).

	- When a creator lists a gig, he/she is given a unique streaming ID which is used to identify the creator on the backend and allocate a separate channel, where he could live stream and also the audiences of that particular show are isolated from the rest of the channels/shows.
	
	- As soon as the creator hits `start stream` button, the video data is transported to media server, where it encoded to different formats. In our case, we use `flv` format which is a file format used by Adobe Flash Player to store and deliver synchronized audio and video streams over the Internet.

	- Later, on the client side we use a `flvjs plugin` to render the video in realtime. 

 * **REALTIME CHAT** is accomplished using socket.io, which is a library to abstract the [WebSocket](https://en.wikipedia.org/wiki/WebSocket) connections. It enables realtime, bi-directional communication between web clients and servers. 
	  - When a client types the message and clicks send, it is sent to server and is then broadcasted to all the connected clients in the same room.
	  
	  - The messages that gets exchanged within a room is isolated from the outside world.

> Also, we are using Redis [pubsub](https://redis.io/topics/pubsub) indirectly as socket.io internally relies on it to achieve the realtime two-way communication.
 
## Challenges I ran into

* Handling creator data in the backend and storing it efficiently using built-in Redis data structures.
* Fetching all the shows asynchronously(using [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)), and resolving them was tricky.
* Figuring out a way to load & play the live stream on the browser without clashing between other sessions was really challenging.

## Accomplishments that I'm proud of

I could successfully able to hook-up all the different parts of the application together and come up with the working end product.

## What I learned

I picked up a lot in this process, this was the first time having my hands-on Redis, Socket.io and came across terms like RTMP, its uses, and also how to set one up.

### How to Setup
> Also need to setup server to get things running. Checkout backend [here](https://github.com/manojnaidu619/bookmygig-backend)
* Download the repo as zip-file
* unzip it and `cd` into project folder
* `npm install`
* `npm start`
* head over to `http://localhost:3000` in the browser