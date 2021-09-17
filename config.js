const chalk = require('chalk')

const data = {
  name: chalk.bold.green('        Eliaz Bobadilla'),
  email: chalk.bold.green('eliazbobadilladev@gmail.com'),
  handle: chalk.cyan('@UltiRequiem'),

  // Links
  twitter: chalk.gray('https://twitter.com/') + chalk.green('UltiRequiem'),
  npm: chalk.gray('https://npmjs.com/') + chalk.green('~ultirequiem'),
  github: chalk.gray('https://github.com/') + chalk.green('UltiRequiem'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.green('eliazbobadilla'),

  // labelWork: '',
  // labelBlog: '',

  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        NPM:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),

  firstPharse: `A ${chalk.bold.green(
    'passionate'
  )} 14 years old student, learning all the time.`,
  secondPharse: `I love working with ${chalk.cyan(
    'JavasCript'
  )} and ${chalk.cyan('Golang')}.`,

  farewell: chalk.bold.blue(' See you later!'),
  borderColor: 'green',
  borderStyle: 'single'
}

module.exports = data
