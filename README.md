# React Starter
A very basic React starter kit without too many bells and whistles. Allows for
importing SASS, and supports hot-loading, and that's about it!

## Using
Clone it down, `npm install` and then `npm run dev`!
Go to [http://127.0.0.1:3000](http://127.0.0.1:3000) and you're good to go!

## File Structure
```
- app // Where the app source code goes
  - components // Store all components in here
    - RootComponent // In folders of their own!
      - package.json // With a package.json that points to a "main" script
      - RootComponent.jsx
  - app.js
- build // Where the build stuff will go!
  - index.html // The base index.html
- .gitignore
- package.json
- README.md
- webpack.config.js
```
