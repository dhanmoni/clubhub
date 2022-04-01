# ClubHub

An open source software for students and colleges to view and manage clubs and posts all in one place!

## Website

[ClubHub](https://clubhub-c03ac.web.app/)


## Installation

Clone the repo and install the dependencies:

```bash
npm install
```

It will install the required dependencies.

Create a firebaseKeys.js file in the src/Firebase directory.
put your firebase keys inside the file.


To run the app on localhost, go to the root directory and run:

```bash
> npm start
```


## About the project

CLubHub is a social networking site made for colleges where their clubs will be able to post events and notifications and the students will be able to view all of them inone single place.

The project was created using React.js and Redux on the frontend and Firebase as the backend.

### Landing Page

![landing](https://res.cloudinary.com/dmn19/image/upload/v1648796181/screencapture-clubhub-c03ac-web-app-2022-04-01-12_19_17.png)

### Home Page

![account](https://res.cloudinary.com/dmn19/image/upload/v1648796182/screencapture-clubhub-c03ac-web-app-home-2022-04-01-12_18_57.png)

### Post Page

![Home](https://res.cloudinary.com/dmn19/image/upload/v1648796183/screencapture-clubhub-c03ac-web-app-post-2022-04-01-12_19_41.png)

### Here is a list of features that we are providing:

1. User can register with their email address
2. Once registered, user will be redirected to home page where user can view all the posts that are posted in the college clubs
3. User can be an admin of a club, so if the registered user is an admin then he/she will be able to make posts to that specific club.
4. There are three types of role for the user: member, club_admin and super_admin.
5. Member users can only view posts and they cannot make any post nor access the protected routes
6. CLub Admin can make posts to the club of which he/she is the admin
7. Super admin can create clubs, assign admins, manage posts etc

## Future plans

We could not implement all the features that we're planning to, but we'll add them after this event. Some of the features that we are going to be implementing are:

- Admin panel to control everything
- Like and comment on posts
- Complete the different screens such as: setting, active and inactive clubs etc

## Appreciation

Our team would like to thank AEC Coding club for organizing this amazing hackathon. It was really exciting to be a part of it

## License

[MIT](https://choosealicense.com/licenses/mit/)
