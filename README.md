[![Contributors][contributors-shield]][contributors-url][![Forks][forks-shield]][forks-url][![Stargazers][stars-shield]][stars-url][![Issues][issues-shield]][issues-url]
[![hire-badge](https://img.shields.io/badge/Consult%20/%20Hire%20Ikraam-Click%20to%20Contact-brightgreen)](mailto:consult.ikraam@gmail.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GhoorIkraam?label=Follow%20Ikraam%20on%20Twitter&style=social)](https://twitter.com/GhoorIkraam)

# Tech Favourites
<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="https://github.com/ikraamg/techStore.git">
    <p align="center"> <img src="https://user-images.githubusercontent.com/34813339/96832600-4d75e800-143f-11eb-811b-bf58741c4c45.gif" alt="react-redux" height="500">
    </p>
  </a>

  <h3 align="center">Tech favourites - Full-Stack Rails and React APP </h3>

  <p align="center">
    <a href="https://github.com/ikraamg/techStore/issues">Report a Bug or Request a Feature</a>
    ·
    <a href="https://tech-favourites.herokuapp.com/home">Live Demo</a>
  </p>
</p>

<!-- Live Link  -->

### [Live Demo Link](https://tech-favourites.herokuapp.com/home)

<br>
<!-- ABOUT THE PROJECT -->

## About The Project

This is a mobile-first full-stack app, the front end is a single page app that is built in React/Redux that communicates with the [Ruby on Rails back-end](https://github.com/ikraamg/laptech/tree/api-feature) via API requests that are secured by JWT authentication.

This repo contains the TypeScript front-end SPA built in the Ionic-React Framework which enables quick multi-platform apps. There is a dark mode toggle added in the menu too!

The back-end can be found [here](https://github.com/ikraamg/laptech/tree/api-feature)

<!-- CONTROL'S -->
## Built With

- TypeScript
- React.js
- Redux
- Ionic Framwork
- JWT
- Webpack
- Eslint
- Jest

## How to use

- Users can register and login to an account
- Users can view list of technology items and click to view full details.
- Users can favourite items and view a list of favourites

<!-- INSTALLATION -->

### Installation

To run the app locally, clone the repository and navigate to it's directory:

```bash
https://github.com/ikraamg/techStore.git
cd techStore
git checkout front-end-store
npm install
ionic-serve
```

Now go to [localhost:8100](http://localhost:8100) in your browser.

### Automated Testing 🧪

The app was test with jest, redux-mock-store and react-testing-library.

```bash
npm run test
```

## "Nice To Have Requirements" that are implemented

- Implemented proper user authentication from the front-end to the server
- Created a user table in the database, so that a given user can only access the favourites they selected
- Made the app responsive, creating both tablet and desktop versions, following design guidelines
- Transitions were implemented to make the user experience better
- Created full documentation for the API
- Dark Mode via toggle

## Potential Updates

- Users can add their own tech-favourites
- Users can message the creator of a tech-favourite
- A store like checkout system can be created

<!-- CONTACT -->

## Authors

👤 **Ikraam Ghoor**

- Github: [@ikraamg](https://github.com/ikraamg)
- Twitter: [@GhoorIkraam](https://twitter.com/GhoorIkraam)
- LinkedIn: [isghoor](https://linkedin.com/isghoor)
- Email: [consult.ikraam@gmail.com](mailto:consult.ikraam@gmail.com)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

Design influenced by [Alexey Savitskiy on Behance](https://www.behance.net/alexey_savitskiy)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ikraamg/react-redux.svg?style=flat-square
[contributors-url]: https://github.com/ikraamg/techStore/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ikraamg/react-redux.svg?style=flat-square
[forks-url]: https://github.com/ikraamg/techStore/network/members
[stars-shield]: https://img.shields.io/github/stars/ikraamg/react-redux.svg?style=flat-square
[stars-url]: https://github.com/ikraamg/techStore/stargazers
[issues-shield]: https://img.shields.io/github/issues/ikraamg/react-redux.svg?style=flat-square
[issues-url]: https://github.com/ikraamg/techStore/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
