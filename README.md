# https://jonprentice.me [![Build Status](https://travis-ci.com/jon77p/jonprentice.me.svg?token=FWgq6WkUSedNJi5ECwQa&branch=master)](https://travis-ci.com/jon77p/jonprentice.me)
### The source code for Jon Prentice's personal website
#### _Powered by Python Flask and VueJS_

#### Author: Jon Prentice

----

## Local Development Setup

### Prerequisites
* `python 3`
* `pip 3`
* `virtualenv`
* `npm`

----
## Backend Setup
1. Create and activate a virtual environment for the application _(recommended)_.

    - `virtualenv venv --python=python3`
    - `source venv/bin/activate`
    
2. Install the `pip` packages located in `backend/requirements.txt`.

    - `pip3 install -r backend/requirements.txt`
    
3. Copy the `backend/defaults.conf` file to `backend/server.conf` and fill in with the necessary information (replacing `--INVALD--` where present).
4. Start the backend API server: `python3 backend/app.py`
----

## Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install the necessary `npm` packages: `npm install`
3. Start the local development server: `npm run serve`

    a. To lint/test code changes during development, run `npm run lint` or `npm run test`, respectively.