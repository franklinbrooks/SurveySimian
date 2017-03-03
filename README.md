# SurveySimian - a clone of a familiar data collection portal

As I was coming to the end of my studies in the Web Development Immersive program at General Assembly NYC in February of 2017, I was reflecting on the acquaintances I had made there.  Soon, we would all be heading off to start our careers in coding.  This made me anxious.  I wondered if my peers were feeling the same way.  Would we continue the friendships and support network we had fostered there?  How would we go about it? 

It struck me that some of the technologies we had been learning may be helpful in determining how the gauging the collective minds.  And, to determine the way forward.

Since I started at GA, I've taken several questionnaires on SurveyMonkey platform. It seems to be the go-to for the UX/UI folks.  Now that we have studied Ruby on Rails, and NoSQL databases, I thought I may be able to put together a simple survey backend that will run behing a Single-Page-Application React front.

This is the result.

### Screenshot:
![Screenshot](http://www.franklinchristopherbrooks.com/images/SurveySimianScreenShot.png)

#### [Link to Live Site](https://pure-eyrie-59063.herokuapp.com/)  
#### [Link to Repo](https://github.com/franklinbrooks/SurveySimian)  
#### [Link to ZenHub](https://github.com/franklinbrooks/SurveySimian#boards?repos=82426480)  

## Getting Started

This project includes a package.JSON file which provides details for the Node JavaScript dependencies on the React front-end. These are then managed by Webpack and made availale within the Ruby-on-Rails environmenr. Ruby gems are configured in Gemfile and are managed by Homebrew.

Download or clone repo.
Run `bundle install` in terminal.
Cd into 'client' folder in terminal.
Run `$ npm install--save` in terminal.
Run `foreman start -f Procfile.dev` from terminal.

Navigate to `localhost:5000` in your browser to begin the survey!

## Built With

* [Ruby on Rails](https://github.com/shakacode/react_on_rails) - The backend web framework used
* [HomeBrew](https://www.npmjs.com/) - Dependency Management
* [React](https://facebook.github.io/react/) - The frontend web framework used
* [Firebase](firebase.com) - A No-SQL database to store collected form data
* [React-Bootstrap](https://react-bootstrap.github.io/) - CSS framework to style the React form

## Author

* **Franklin Brooks** - *Initial work* - [Franklin Christopher Brooks](https://github.com/franklinbrooks)

## Acknowledgments

* This project was developed as part of the Web Development Immersive program at General Assembly in NYC, February 2017. My mentors for this build were Ariana and Vince. My thanks to them!

