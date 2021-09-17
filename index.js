#!/usr/bin/env node

const boxen = require('boxen')
const inquirer = require('inquirer')
const open = require('open')

const data = require('./config')

const nextLine = '\n'

// Clean The Screen
process.stdout.write('\x1b[2J')

console.log(
  boxen(
    [
      `${data.name} / ${data.handle}`,
      nextLine,
      data.labelWork ? `${data.labelWork}  ${data.work}` : null,
      data.labelBlog ? `${data.labelBlog}  ${data.blog}` : null,
      data.labelTwitter ? `${data.labelTwitter}  ${data.twitter}` : null,
      data.labelnpm ? `${data.labelnpm}  ${data.npm}` : null,
      data.labelGitHub ? `${data.labelGitHub}  ${data.github}` : null,
      data.labelLinkedIn ? `${data.labelLinkedIn}  ${data.linkedin}` : null,
      data.labelWeb ? `${data.labelWeb}  ${data.web}` : null,
      nextLine,
      data.firstPharse ? data.firstPharse : null,
      data.secondPharse ? data.secondPharse : null
    ]
      .filter((value) => value != null)
      .join('\n'),

    {
      margin: data.boxMargin || 1,
      float: data.boxFloat || 'center',
      padding: data.boxPagging || 1,
      borderStyle: data.borderStyle || 'single',
      borderColor: data.borderColor || 'green'
    }
  )
)

inquirer
  .createPromptModule()([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Send me an email?',
          value: () => {
            open(`mailto:${data.email}`)
            console.log(data.farewell)
          }
        },
        {
          name: 'Exit',
          value: () => {
            console.log(data.farewell)
          }
        }
      ]
    }
  ])
  .then((answer) => answer.action())
