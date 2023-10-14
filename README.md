<div align="center">
  <h1 style="display:flex;justify-content:center;">✨ Animation Nation ✨</h1>
</div>
<br>
<div align="center">
  <img src="https://img.shields.io/github/stars/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <img src="https://img.shields.io/github/repo-size/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <br>
  <img src="https://img.shields.io/github/last-commit/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <img src="https://img.shields.io/github/contributors-anon/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <br>
  <img src="https://img.shields.io/github/issues/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <br>
  <img src="https://img.shields.io/github/issues-closed-raw/zero-to-mastery/Animation-Nation?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr-closed-raw/zero-to-mastery/Animation-Nation?style=for-the-badge" />
</div>
<br>

![header-picture](./public/images/colourpencils.png)

👉 _Sharpen your pencils, we're getting creative❗_

Hello and welcome to [Animation Nation](https://animation-nation.netlify.app), a ZTM project for Hacktoberfest! [This site](https://animation-nation.netlify.app) aims to showcase the creative talents of the ZTM community :)

# Rules

The rules are simple. You have to:

- Use HTML `<divs>` and CSS only! No JS, and no SVGs!
- Have at least one animation in your work.
- Please make sure that the code is indeed your own, and not copied from someone else.
- That's it!

# How to contribute

If you've never forked a repository or made a pull request before, we recommend making your first one over at [https://github.com/zero-to-mastery/start-here-guidelines](https://github.com/zero-to-mastery/start-here-guidelines). That will count towards your total, and then you'll be ready to take on this challenge with your new GitHub skills!

A cool resource to learn about the fork workflow can also be found here - [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)

Now, once you've forked this repo and got a local version up on your computer, follow these steps:

1. In the Art directory (folder), create a directory named after your GitHub username.
2. Within this folder you just made, create two files, an HTML file, and a CSS file.
3. Link your CSS file to your HTML file.
4. Using only HTML and CSS (no `<script>` allowed!!), create a work of art! It can be as simple or as complex as you like, as long as it's animated in some way!
5. Get a screen recording of your finished work, **and make a gif**! Try to crop it so that it looks good as a smallish (preferably squarish) image. Save this in your directory, together with your HTML and CSS files. Static screenshots are also acceptable.  
  _If you don't add a gif/screenshot, the website won't show your animation._
6. Go to the root `include.js`. You will see an array of objects, each one represents a work of art that someone has created. Copy this example object and paste it at the end, filling it out with your art information and links (remove the comments present):

```js
let cards = [
  // add your card in this section
  {
    artName: 'Triangle', // change this to the name of your artwork
    pageLink: './Art/<YOUR GITHUB USERNAME>/triangle.html', // change this
    imageLink: './Art/<YOUR GITHUB USERNAME>/triangle.gif', // change this
    author: 'Joy', // change this to your name
    githubLink: 'https://github.com/<YOUR GITHUB USERNAME>' // change this
  }
  // remove these comments now
];
```

# Important Note

- If a maintainer asks for some changes, _please make the required changes to your original pull request._

- Do not close a PR and re-open it for the same contribution. It will add an unnecessary burden on maintainers, as they will have to review the complete pull request again.

- If you don't follow these rules, maintainers reserve the right to mark your pull request as invalid.<br>
  **In this case it won't count for Hacktoberfest**.
