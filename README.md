# Stitch In Time

Stitch In Time (WIP name) is an app designed to take the effort out of counting stitches when crocheting or knitting. Easily track your progress toward your totals for each step of your pattern with just a tap, customise how you track, and adjust your goal on midway through. Banish the annoying pencil and tally marks forever! 🧶🔢🧣🤩

I've built the app's front end in React Native using the Expo client. I have a C# ASP.NET Core back end in development.

## Usage

### Installation and running

In dev mode, after running `npm i` to download dependencies, use the `npm start` script to start the local Expo server. A QR code and links will come up to allow you to run the app in the Expo app on an iOS device, on an Android, or in a web browser.

Production mode TBC!

### How to use

In its current version, the "Start tracking!" option on the home screen is the only available choice. More features are in development, including the ability to track a longer-term project.

Once you choose "Start tracking", set your type to track (rows or stitches) and your target on the next screen, and then hit "Get stitching!" to get started.

On the tracking screen, use the + or - to either add the custom increment, 1, to your goal, or adjust the increment in the input field to add more at one time. Use the eraser button to restart your progress (the app will check if you're sure in case of accidental tapping!). The details at the top of the screen give you your progress as a glance.

If you'd like to change your goal, the "Change your goal" button takes you to the goal form again, but it retains your progress. For example, if you had 2/10 rows done and changed your goal to 15, hitting "Get stitching again" would set your progress to 2/15.

## Packages used

- Progress bar: [react-native-progress](https://www.npmjs.com/package/react-native-progress)
- Icons: [react-native-fontawesome]](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome)

## Development trajectory

I'm making this app as a personal project to both embed my development skills and make my crochet projects a little less maddening!

View the [Jira here](https://lizkaufman.atlassian.net/jira/software/projects/STITCH/boards/2) to see my development process.
