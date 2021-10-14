#!/usr/bin/env node

import boxen from "boxen";
import inquirer from "inquirer";
const {createPromptModule} = inquirer
import open from "open";

import config from "./config.js";

const {
  name,
  handle,
  labelWork,
  work,
  labelBlog,
  blog,
  labelTwitter,
  twitter,
  labelnpm,
  npm,
  labelGitHub,
  github,
  labelLinkedIn,
  linkedin,
  labelWeb,
  web,
  firstPharse,
  secondPharse,
  boxMargin,
  boxFloat,
  boxPagging,
  borderStyle,
  borderColor,
  email,
  farewell,
} = config

const nextLine = "\n";

// Clean The Screen
process.stdout.write("\x1b[2J");

console.log(
  boxen(
    [
      `${name} / ${handle}`,
      nextLine,
      labelWork ? `${labelWork}  ${work}` : null,
      labelBlog ? `${labelBlog}  ${blog}` : null,
      labelTwitter ? `${labelTwitter}  ${twitter}` : null,
      labelnpm ? `${labelnpm}  ${npm}` : null,
      labelGitHub ? `${labelGitHub}  ${github}` : null,
      labelLinkedIn ? `${labelLinkedIn}  ${linkedin}` : null,
      labelWeb ? `${labelWeb}  ${web}` : null,
      nextLine,
      firstPharse ? firstPharse : null,
      secondPharse ? secondPharse : null,
    ]
      .filter((value) => value != null)
      .join("\n"),

    {
      margin: boxMargin || 1,
      float: boxFloat || "center",
      padding: boxPagging || 1,
      borderStyle: borderStyle || "single",
      borderColor: borderColor || "green",
    }
  )
);

createPromptModule()([
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: "Send me an email?",
        value: () => {
          open(`mailto:${email}`);
          console.log(farewell);
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log(farewell);
        },
      },
    ],
  },
]).then((answer) => answer.action());
