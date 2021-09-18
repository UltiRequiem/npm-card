# NPM Cards

Have you seen all the [npm cards](https://github.com/topics/npm-card)
on GitHub and now you want one too?

This repository tries to help you make one easily.

## Setup

1. Fork this repo

2. Edit [config.js](./config.js) to fit you

3. Change the [package name](https://github.com/UltiRequiem/npm-card/blob/main/package.json#L2) with your name

4. Create a new [npmjs token](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-tokens-with-the-cli) and add it to the secrets of your fork as `NPM_TOKEN `

5. Make a new Release

Done!

Now you can go to you shel and run `npx ${yourname}`

## Example

This is my NPM card:

![Screenshot](./screenshot.png)

If you want a demo go to your shell and type `npx ultirequiem`.

### License

This project is licensed under the [MIT License](./LICENSE.md)
