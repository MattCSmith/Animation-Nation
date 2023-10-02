let cards = [
  {
    artName: 'hanisntsolo',
    pageLink: './Art/Joy/hanisntsolo.html',
    imageLink: './Art/Joy/hanisntsolo.gif',
    author: 'Hanisntsolo',
    githubLink: 'https://github.com/hanisntsolo'
  },
  {
    artName: 'Simple BAAF',
    pageLink: './Art/baaf-Animation/index.html',
    imageLink: './Art/baaf-Animation/baafscreen.png',
    author: 'Farid Bass',
    githubLink: 'https://github.com/baafbass'
  },
  {
    artName: 'Triangle',
    pageLink: './Art/Joy/triangle.html',
    imageLink: './Art/Joy/triangle.gif',
    author: 'Joy',
    githubLink: 'https://github.com/royranger'
  },
  {
    artName: 'AnimateIbaad',
    pageLink: './Art/Ibaad/animate.html',
    imageLink: './Art/Ibaad/animationimagehover.gif',
    author: 'Ibaad',
    githubLink: 'https://github.com/ibaaddurrani'
  },
  {
    artName: '4 Color Loader',
    pageLink: './Art/rstallings/index.html',
    imageLink: './Art/rstallings/Animation.gif',
    author: 'Roosevelt S.',
    githubLink: 'https://github.com/rstallingsiii'
  },
  {
    artName: "Mr. A's Amimation",
    pageLink: "./Art/Mr.A'sAnimation/index.html",
    imageLink: "./Art/Mr.A'sAnimation/Animation.gif",
    author: 'Mr. AnkitR',
    githubLink: 'https://github.com/MrARawal'
  },
  {
    artName: 'Falling stars',
    pageLink: './Art/ChipoJ/index.html',
    imageLink: './Art/ChipoJ/star_fall.gif',
    author: 'ChipoJ',
    githubLink: 'https://github.com/Chipoj'
  },
  {
    artName: 'Bouncing Screensaver',
    pageLink: './Art/CDay-87/index.html',
    imageLink: './Art/CDay87/Bounce_Animation.gif',
    author: 'CDay-87',
    githubLink: 'https://github.com/CDay-87'
  },
  {
    artName: 'Loader',
    pageLink: './Art/Animation_makrenko-dev/index.html',
    imageLink: './Art/Animation_makrenko-dev/logog.gif',
    author: 'makrenko-dev',
    githubLink: 'https://github.com/makrenko-dev'
  },
  {
    artName: 'Running Laps',
    pageLink: './Art/runningBars/index.html',
    imageLink: './Art/runningBars/running.gif',
    author: 'Daniel',
    githubLink: 'https://github.com/dsauce817'
  }
];

// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this
let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([
    `<li class="card">` +
      `<a href='${c.pageLink}'>` +
      `<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
      `</a>` +
      `<div class="flex-content">` +
      `<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
      `<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
      `</div>` +
      `</li>`
  ]);
});

document.getElementById('cards').innerHTML = contents;

function Shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
