The `BottomNavigation` component provides a simple way to navigate between different views while providing common UI for both iOS and Android platforms.  The recommended scenario suitable for `BottomNavigation` is a high level navigation with 3 to 5 tabs each with separate function. For additional information and details about bottom navigation refer to [the Material Design guidelines](https://material.io/design/components/bottom-navigation.html#usage).

> **Note:** NativeScript 6 introduced two new UI components called `BottomNavigation` and `Tabs`. The idea behind them is to provide more control when building tab based UI, while powering the CSS styling, the icon font support and other specific functionalities. Prior to NativeScript 6, we had the `TabView` component which had top and bottom implementations with different behavoirs for the different platofrms and some styling limitations. With `BottomNavigaiton` and `Tabs` coomponents available, the `TabView` can be considered obsolete.

The `BottomNavigation` component roundup

Component Primary Objectives:
- Used for High Level navigation.
- Good for UX structure with 3 to 5 different options.

Limitations 
- No navigation transitions.
- No navigation gestures (e.g., swipe to navigate).
- No content preloading.
