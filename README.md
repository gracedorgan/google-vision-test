# Short Google Vision Accuracy Test

A web app that lets users go through a dataset generated by google vision's photo tagging api and assess accuracy.

## Features

**Current Capabilities:**
* Allows the user to view photos in the dataset one at a time and decide if the given tag is correct or not.
* Multiple users can use the website at any time, as long as one dataset at a time is being assessed.
* All user-generated data persists.

**The user flow:**

When users first look at the web page they will see a call to action to begin assessment. They then view photos and their generated tags one at a time, and choose if the tag is correct or not. When users have assessed all of the photos in the dataset they are taken to a page which graphs the results.

## Architecture

Framework:
* React 

Libraries:
* Redux
* Babel
* Axios
* Victory

Linter/Testing:
* Eslint with Airbnb Style Guide

## Setup

To run locally:
1. Clone the repository and `cd google-vision-test`
2. `yarn` & `npm install`
3. `yarn start` in this repository - this is set up to run with the server on heroku. Currently it has 5 items in the database to be tested.

## Deployment

Can be published as website

## Authors
* Grace Dorgan

