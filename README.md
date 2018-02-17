## SilverStripe Mix Recipe ##

Recipe to add Laravel Mix build chain dependencies to a SilverStripe project. This includes:

- `.babelrc`: [Babel config file](https://babeljs.io/)
- `.eslintrc.js`: [eslint config file](https://eslint.org/)
- `package.json`: [Laravel Mix](https://github.com/JeffreyWay/laravel-mix), [Vue](https://vuejs.org/), [Jest](https://facebook.github.io/jest/)

## Installation ##

Install the recipe with the following composer call

    composer require-recipe benmanu/recipe-mix

Once the files have been added you can build the theme files using either, Yarn:

    yarn install
    yarn run dev
    yarn run production

or NPM:

    npm install
    npm run dev
    npm run production

By default a `themes/mix/` folder is included as a starter theme. You can either set this to be the project theme, and add your template files. Alternatively you can change the theme source by editing the `themeDir` variable defined in the `webpack.mix.js` file.