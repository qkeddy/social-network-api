# Social Network API


# E-Commerce Back End
![badmath](https://img.shields.io/github/license/qkeddy/social-network-api)
![badmath](https://img.shields.io/github/issues/qkeddy/social-network-api)
![badmath](https://img.shields.io/github/languages/top/qkeddy/social-network-api)
![badmath](https://img.shields.io/github/watchers/qkeddy/social-network-api)
![badmath](https://img.shields.io/github/forks/qkeddy/social-network-api)

## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API leverages Express.js for routing, a MongoDB database, and the Mongoose ODM.

A demo of this application can be viewed [here](https://drive.google.com/file/d/1YZzEYr4MSSJRQVAPzffUspxJKzwivIOL/view?usp=sharing).

A link to the GitHub repository can be viewed [here](https://github.com/qkeddy/social-network-api).

## Table of Contents

- [Deployment](#deployment)
- [Features](#features)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Deployment
1. Fork and clone project repo
2. Run `npm install`
3. Open the CLI in the project folder and run `npm start` (or if in development use Nodemon: `npm run watch`)


## Features
- API endpoints to support full CRUD operations against a simple Mongo database.
- Upon start, the predefined Mongoose models are synced to the MongoDB database.
- The Mongoose database will be automatically seeded with two sample users.

## Usage

#### USER END POINTS
- **GET** - Find all users:  `http://localhost:3001/api/users`
- **GET** - Find a user: `http://localhost:3001/api/users/:userId`
- **POST** - Create a user: `http://localhost:3001/api/users`
```
{
  "username": "jim",
  "email": "jim@me.com"
}
```
- **PUT** - Update a user: `http://localhost:3001/api/users/:userId`
```
{
  "username": "jim",
  "email": "jim@gmail.com"
}
```
- **DELETE** - Delete a user: `http://localhost:3001/api/users/:userId` 

#### FRIEND END POINTS
- **POST** - Add a friend: `http://localhost:3001/api/users/:userId/friends/:userId`
- **DELETE** - Remove a friend: `http://localhost:3001/api/users/:userId/friends/:userId`

#### THOUGHT END POINTS
- **GET** - Find all thoughts: `http://localhost:3001/api/thoughts`
- **GET** - Get a thought: `http://localhost:3001/api/thoughts/:thoughtId`
- **POST** - Create a thought: `http://localhost:3001/api/thoughts`
```
{
	"thoughtText": "This is a post",
	"userId": "<insert id>",
	"username": "Joe"
}
```
- **PUT** - Update thought: `http://localhost:3001/api/thoughts/:thoughtId`
```
{
	"thoughtText": "This is a second post"
}
```
- **DELETE** - Delete a thought: `http://localhost:3001/api/thoughts/:thoughtId`

#### REACTIONS END POINTS
- **POST** - Create a thought: `http://localhost:3001/api/thoughts/:thoughtId/reactions`
```
{
	"reactionBody": "That is a cool thought!",
	"username": "Sally"
}
```
- **DELETE** - Delete a reaction: `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

## Tests
Currently, no automated unit tests have been built. 

## Credits
- [Quinlan Eddy](https://github.com/qkeddy)

## License
MIT License

Copyright (c) 2022 Quin Eddy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## How to Contribute

If you would like to contribute to this project. Please email me at qkeddy@gmail.com. If you would like to contribute to future projects, please follow me at https://github.com/qkeddy.

It is requested that all contributors adhere to the standards outlined in the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).