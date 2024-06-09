# Group 3 Architecture Decision Record 

## CONTEXT
We are developing a weather application targeted for Android devices. The application aims to provide users with accurate weather information based on their current location. 

## DECISION
### Target Devices

*	Platform: Android
*	The app will be designed and optimized for Android devices, considering various screen sizes and performance capabilities.

### CSS Framework:

*	Framework: Bootstrap
*	Bootstrap will be utilized for styling the app's user interface. This decision is made due to Bootstrap's robust and responsive design capabilities, which will help in creating a consistent and visually appealing UI across different Android devices.


### Development Framework:

*	Framework: React Native
*	React Native is chosen for its ability to write code once and run it on multiple platforms, including Android. This will facilitate quicker development and maintenance of the app, leveraging the reusable components and a large community for support. Also, it provides near-native performance which is crucial for a real-time data display.

### Navigation Strategy:
*	Library: React Navigation
*	The app will employ React Navigation for handling navigation. The primary navigation structure will consist of a bottom tab navigator with four main tabs:
      ####	Home: Displays current weather information and forecasts.
      ####	Hourly: Provides detailed hourly weather updates.
      ####	Daily: Offers daily weather forecasts for the upcoming week.
      ####	Settings: Allows users to adjust app preferences, such as units of measurement and notification settings.

### Hardware
*	Utilization: GPS, speaker, and fingerprint scanner.
*	The app will utilize the device's Integrate GPS for location tracking, speaker for alert notifications, and fingerprint scanner for user authentication. The GPS hardware is to obtain the user's current location. This information is crucial for providing accurate and localized weather updates. Speak is used for audible alerts and notifications. Fingerprint scanner could help to enhance security for user data, and enforce seamless login.

### Database Storage
*	Type: Local Storage
*	Solution: SQLite
*	The app will use local storage for storing user preferences and cached weather data. SQLite will be the database choice due to its lightweight nature and ability to run efficiently on mobile devices. This ensures quick access to data without the need for constant internet connectivity, providing a seamless user experience.

## STATUS

Accepted

## CONSEQUENCES

These architecture decisions will guide us in the development process. By choosing React Native, we align our development efforts with a robust framework capable of scaling and integrating advanced features such as GPS and fingerprint authentication. We will proceed with setting up the development environment tailored for React Native and Bootstrap. The team will also start doing research on the chosen navigation strategy and hardware integrations, and begin the first development cycle focusing on core functionality.
