import chalk from 'chalk';

const { bold, cyan, gray, green, white } = chalk;

const data = {
  name: bold.green('        Eliaz Bobadilla'),
  email: bold.green('eliazbobadilladev@gmail.com'),
  handle: cyan('@UltiRequiem'),

  // Links
  twitter: gray('https://twitter.com/') + green('UltiRequiem'),
  npm: gray('https://npmjs.com/') + green('~ultirequiem'),
  github: gray('https://github.com/') + green('UltiRequiem'),
  linkedin: gray('https://linkedin.com/in/') + green('eliazbobadilla'),

  // labelWork: '',
  // labelBlog: '',

  labelTwitter: white.bold('    Twitter:'),
  labelnpm: white.bold('        NPM:'),
  labelGitHub: white.bold('     GitHub:'),
  labelLinkedIn: white.bold('   LinkedIn:'),

  firstPharse: `A ${bold.green(
    'passionate'
  )} 14 years old student, learning all the time.`,
  secondPharse: `I love working with ${cyan('JavasCript')} and ${cyan(
    'Golang'
  )}.`,

  farewell: bold.blue(' See you later!'),
  borderColor: 'green',
  borderStyle: 'single',
};

export default data;
