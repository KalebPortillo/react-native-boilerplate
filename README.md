React Native Boilerplate
===

[![React Native](https://img.shields.io/badge/react%20native-0.57.1-brightgreen.svg)](https://github.com/facebook/react-native)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/KalebPortillo/react-native-boilerplate/blob/master/LICENSE)

Building apps with React Native is great, because it helps create high quality products for both major mobile platforms quickly and cost-effectively.

Getting started on a new app just takes too long, though. Most apps need the same basic building blocks and developer infrastructure, and most of us are bored of reinventing the wheel time and time again.

## tldr;

Sounds good and you just want to see how it works? Here is a quick start guide:

```
git clone git@github.com:KalebPortillo/react-native-boilerplate.git
cd react-native-boilerplate
yarn install
yarn run ios
```

For further setup instructions please see our [Getting Started](#getting-started) section.

## Contents

### Application Blueprint

* Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
* Modular and well-documented structure for application code
* [Redux](http://redux.js.org/) with [Ducks](https://github.com/erikras/ducks-modular-redux) proposal for state management
* [Reselect](http://redux.js.org/) for compute devided data
* [React Navigation](https://reactnavigation.org/) for awesome navigation with 60fps transitions
* [Redux Persist](https://github.com/rt2zz/redux-persist) Disk-persisted application state caching for offline support and snappy startup performance
* Sample app to show how to wire it all together
* [React Native Config](https://github.com/luggit/react-native-config) Multi-environment configuration (dev, staging, production) for iOS and Android
* Automagically update project version in both Android and iOS when running npm version command
* [Prettier](https://prettier.io/) for consistant code format
* Custom splash screen ready, just change the image asset

### Testing Setup

* [Jest](https://facebook.github.io/jest/) for unit testing application code and providing coverage information.
* [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components
* Utilities for end-to-end integration testing Redux state, including side effects and asynchronous actions

## Getting started

To build your own app on top of the Boilerplate, fork or mirror this repository. For serious use we recommend [mirroring using these instructions](https://help.github.com/articles/duplicating-a-repository/), since you can't make a fork of a public repository private on GitHub. To contribute to Boilerplate development or just playing around, forking is the way to go.

First, give your application a name by running `./support/rename.sh YourAppName`.

If you dont't want to rename de package name by hand, you can use [react-native-rename](https://github.com/junedomingo/react-native-rename)

Of course, you will need node, npm, yarn(prefereb), Android Studio, Xcode, React Native CLI, and all these basic stuff setup in your machine

## Development workflow

After you have set up the project using above instructions, you can use your favorite IDE or text editor to write code, and run the application from the command line. Turn on React Native hot module reloading in the app developer menu to update your application as you code.

##### Start the application in iOS simulator
```
$ yarn ios
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ yarn android
```

##### Run unit tests
```
$ yarn test
```

##### Run tests every time code changes
```
$ yarn test:watch
```

##### Generate code coverage report
```
$ yarn coverage
```

##### Update project version
```
$ yarn version
```

For more awesome **yarn** commands, refer to [package.json](package.json) scripts section

## Debugging

For standard debugging select *Debug JS Remotely* from the React Native Development context menu (To open the context menu, press *CMD+D* in iOS or *D+D* in Android). This will open a new Chrome tab under [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui) and prints all actions to the console.

For advanced debugging under **macOS** we suggest using the standalone [React Native Debugger](https://github.com/jhen0409/react-native-debugger), which is based on the official debugger of React Native.
It includes the React Inspector and Redux DevTools so you can inspect React views and get a detailed history of the Redux state.

You can install it via [brew](https://brew.sh/) and run it as a standalone app:
```
$ brew update && brew cask install react-native-debugger
```
> Note: Make sure you close all active chrome debugger tabs and then restart the debugger from the React Native Development context menu.

## Contributing

If you find any problems, please [open an issue](https://github.com/KalebPortillo/react-native-boilerplate/issues/new) or submit a fix as a pull request.

We welcome new features, but for large changes let's discuss first to make sure the changes can be accepted and integrated smoothly.

## License

[MIT License](LICENSE)

## Credits

This project was based and motivated by [Pepperoni](https://github.com/futurice/pepperoni-app-kit) and [Ignite](https://github.com/infinitered/ignite-ir-boilerplate), React Native boilerplates by Futurice and InfiniteRed, respectively
