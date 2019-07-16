> **Disclaimer:** The `Tabs` component is currently in **Beta** version. The component is being actively developed - use [the tracking issue](https://github.com/NativeScript/NativeScript/issues/6967) for details about the ongoing implementation.

The `Tabs` component provides a simple way to navigate between different views while providing common UI for both iOS and Android platforms.  The recommended scenario suitable for `Tabs` is a mid level navigation. For additional information and details about bottom navigation refer to [the Material Design guidelines](https://material.io/design/components/tabs.html#usage).

> **Note:** NativeScript 6 introduced two new UI components called `BottomNavigation` and `Tabs`. The idea behind them is to provide more control when building tab based UI, while powering the CSS styling, the icon font support and other specific functionalities. Prior to NativeScript 6, we had the `TabView` component which had top and bottom implementations with different behavoirs for the different platofrms and some styling limitations. With `BottomNavigaiton` and `Tabs` coomponents available, the `TabView` can be considered obsolete.

The `Tabs` component roundup

- Semantic: Mid Level Navigation
- Usage: Unlimited Tabs with common function
- Transitions: Slide Transition indicating the relative position to each other
- Gestures: Swipe Gesture
- Preloading: At least 1 to the sides (because of the swipe gesture)
