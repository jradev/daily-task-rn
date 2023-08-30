## Application Info

Node Version `v18.17.1`

React Native Version `0.71.13`

This application is created using an m1 device.

Pages / Screen
- Add Edit Task
- Home Screen
- Task Details

### App File Structure

    
    .
    ├── ...
    ├── App.jsx                  #root file
    ├── src                     # source root folder
    │   ├── components          # Consist of components imported to views
    │   ├── navigation          # navigation file
    │   ├── views               # views / screen folder container
    │   ├── assets               # asset data
    │   ├── utils               # utilities function files such as constant, font size, colors, helper 
    │   └── ...                 # etc.
    └── ...


## Installation
- `yarn install` Install dependencies
- `npx pod install` Install ios pod dependencies [Use this script when facing an error installing pods `cd ios && rm Podfile.lock && pod install --repo-update`]

## Usage

To run the application
- `yarn ios` -- (`react-native run-ios --simulator="iPhone 11"`) Build the iOS App (requires a MacOS computer).
- `yarn android` -- (`react-native run-android`) Build the Android App.

## Libraries
- [react-native-date-picker](https://github.com/henninghall/react-native-date-picker) Used for selecting date
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash) Used to implement slash screen for iOS & Android
- [react-native-navigation](https://reactnavigation.org/docs/getting-started/) Used to manage page navigation & screens
- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage) Storage for data persistent locally
- [moment](https://momentjs.com/docs/) for handling date format & presentable date display
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) Used for common vector icons
- [react-native-uuid](https://github.com/eugenehp/react-native-uuid) Used for random id for each task


## Build

- Android
    - APK
        `cd android && ./gradlew clean && ./gradlew assembleRelease`
    - ABB
        `cd android && ./gradlew clean && ./gradlew bundleRelease`
- iOS
    - [How to build & publish to appstore](https://reactnative.dev/docs/publishing-to-app-store)


## Issues?

- Unable to run android due to missing sdk path for OSX
    - Create a file `local.properties` under `android` folder.
    - set local.properties file `sdk.dir = /Users/${user}/Library/Android/sdk`
    - replace `${user}` variable to your current user
- [Troubleshooting](https://reactnative.dev/docs/troubleshooting)