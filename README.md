# MakersBnB

### [Team](https://github.com/ocripps24/MakersBnB#team) - [Screenshots](https://github.com/ocripps24/MakersBnB#screenshots) - [Quickstart](https://github.com/ocripps24/MakersBnB#quickstart) - [Testing](https://github.com/ocripps24/MakersBnB#testing) - [Specification](https://github.com/ocripps24/MakersBnB#specification) - [User Stories](https://github.com/ocripps24/MakersBnB#user-stories)

## Team

* [Dominic White](https://github.com/domw30)
* [Simon Chenbo Yi](https://github.com/SimonChenboYi)
* [Jose Quinones](https://github.com/jo-quin)
* [Oliver Cripps](https://github.com/ocripps24)

## Screenshots

#### Signup
![Signup](https://imgur.com/dUHzCOF.jpg)
#### Dashboard
![Dashboard](https://imgur.com/ZpE6FaJ.jpg)

## Quickstart

First, clone this repository and ensure you have node.js and npm installed. Then:

```bash
npm install
(Optional) - Nightwatch uses a version of growl with a security issue detailed at the end of this readme. You can run 'npm audit fix' or follow the steps at the end of the readme
npm start
```

To setup the database, connect to psql and run the following command:
```bash
CREATE DATABASE makers_bnb;
```
Then in terminal run:
```bash
npm install sequelize --save
npm install pg--save
npm install sequelize-cli -g (you may need to prepend this command with sudo)
sequelize db:migrate
```

## Testing

#### Nightwatch

```bash
cd myapp
npm start
npm test (in a separate terminal window/tab)
```

## Specification

We would like a web application that allows users to list spaces they have available, and to hire spaces for the night.

### Headline specifications

- Any signed-up user can list a new space.
- Users can list multiple spaces.
- Users should be able to name their space, provide a short description of the space, and a price per night.
- Users should be able to offer a range of dates where their space is available.
- Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
- Nights for which a space has already been booked should not be available for users to book that space.
- Until a user has confirmed a booking request, that space can still be booked for that night.

### Nice-to-haves

- Users should receive an email whenever one of the following happens:
 - They sign up
 - They create a space
 - They update a space
 - A user requests to book their space
 - They confirm a request
 - They request to book a space
 - Their request to book a space is confirmed
 - Their request to book a space is denied
- Users should receive a text message to a provided number whenever one of the following happens:
 - A user requests to book their space
 - Their request to book a space is confirmed
 - Their request to book a space is denied
- A ‘chat’ functionality once a space has been booked, allowing users whose space-booking request has been confirmed to chat with the user that owns that space
- Basic payment implementation though Stripe.

## User Stories
```
User story 1
As a General User
So I can maintain settings / properties
I want to be able to log in to makers bnb

User story 2
As a Listing User
So I can offer my property for rent
I want to be able to list my property on makers bnb

User story 3
As a Listing user
So I can offer all my properties for rent
I want to be able to list multiple properties on makers bnb

User story 4
As a Listing User
So I can have a unique listing
I want to be able to add a name, description and price to each space

User story 5
As a Listing User
So I control tenancy dates
I want to add available dates to my listings

User story 6
As a Renting User
So I can choose a property to rent
I want to view all listings

User story 7
As a Renting User
So I can choose a property
I want to see the available dates for a property

User story 8
As a Renting User
So I can stay in a property
I want to be able to request a property for one night

User story 9
As a Listing User
So I can rent out a property
I want to be able to see all requests and accept one user request for a property

User story 10
As a Listing User
So my properties can only be booked once at a time
I want the availability status of my property to be unavailable if booked

```

Various security vulnerabilites will exist as time passes, they are best fixed with the help of 'npm audit fix' but some can also be fixed with the below methods

Security vulnerability from installation of nightwatch

Remediation
Upgrade growl to version 1.10.0 or later. For example:

"dependencies": {
  "growl": ">=1.10.0"
}
or…
"devDependencies": {
  "growl": ">=1.10.0"
}
