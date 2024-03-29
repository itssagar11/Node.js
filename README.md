﻿# Node.js
 
 Node.js is a cross-platform runtime environment and library for running JavaScript applications outside the browser. It is used for creating server-side and networking web applications. It is open source and free to use. The definition of Node.js as supplied by its official documentation is as follows –
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node.js also provides a rich library of various JavaScript modules to simplify the development of web applications.
                Node.js = Runtime Environment + JavaScript Library  

## Features Of Node.js
###	Asynchronous and Event Driven 
All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

### Very Fast 
Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution. V8 compile javascript code in machine code and make it run very fast.

### Highly Scalable
Node.js is highly scalable because event mechanism helps the server to respond in a non-blocking way.

### Single threaded
Node.js follows a single threaded model with event looping. which means that your code can only do one task at a time. 

### No buffering
Node.js cuts down the overall processing time while uploading audio and video files. Node.js applications never buffer any data. These applications simply output the data in chunks.

###	Open source
Node.js has an open source community which has produced many excellent modules to add additional capabilities to Node.js applications.

## Architecture of Node.js.
 
Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.

### Parts of Request:
***Requests:*** Incoming requests can be blocking (complex) or non-blocking (simple), depending upon the tasks that a user wants to perform in a web application.

***Node.js Server:*** Node.js server is a server-side platform that takes requests from users, processes those requests, and returns responses to the corresponding users. 

***Event Queue:*** Event Queue in a Node.js server stores incoming client requests and passes those requests one-by-one into the Event Loop.

***Thread Pool:*** Thread pool consists of all the threads available for carrying out some tasks that might be required to fulfill client requests.

***Event Loop:*** Event Loop indefinitely receives requests and processes them, and then returns the responses to corresponding clients.

***External Resources:*** External resources are required to deal with blocking client requests. These resources can be for computation, data storage, etc.


### The Workflow of Node.js Architecture
Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking – Request a data,Insert a data,updating a data.
Node.js retrieves the incoming requests and adds those requests to the Event Queue
The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough to not require any external resources.
Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients
A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing the external resources, such as compute, database, file system, etc Asynchronously.
Once, the task is carried out completely, the response is sent to the Event Loop that in turn sends that response back to the Client.

