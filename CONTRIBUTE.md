
## Add New Component Category

1. Create a new directory inside the `app` directory with the name of the component, for example `action-bar`. The name of the directory will be prettified and will become the component section header. Create a file named `overview.md` and place the general overview text for the component. You **cannot** use code snippets here. 

## Add New Example

1. Create a new directory inside a component directory, for example inside the `button` directory. The name of the directory will be prettified and will become the example header, i.e. title. For example, if your directory name is `tap-event` the header will become `Tap Event`, that is, all dashes will be replaced with spaces and all the words will be capitalized.
2. Create a file named `article.md`. Place the article text and code snippet placeholders there. You can place code snippets in TypeScript, XML and CSS. The code snippet placeholder syntax is explained [here](https://github.com/NativeScript/markdown-snippet-injector). Here is a sample article.md file:

######article.md
```
Attaching the tap event handler from XML:
<snippet id='button-tap-event-xml'/>

Attaching the tap event handler from code:
<snippet id='button-tap-event-code'/>
```
3. Add your example source code files, i.e. `.ts`, `.xml`, and `.css` files. These files should contain the actual code snippets to be injected in `article.md`. For example:

######page.xml
```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="onPageLoaded">
  <StackLayout>
    <!-- >> button-tap-event-xml -->
    <Button id="button" text="Tap Me!" tap="onTap"/>
    <!-- << button-tap-event-xml -->
  </StackLayout>
</Page>
```

######page.ts
```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="onPageLoaded">
  <StackLayout>
    <!-- >> button-tap-event-xml -->
    <Button id="button" text="Tap Me!" tap="onTap"/>
    <!-- << button-tap-event-xml -->
  </StackLayout>
</Page>
```
4. (Optional) Create a file named `links.md` and place additional links to external resources such as API References or any other materials that are relevant to this particular example. Here is a sample `links.md` file:
```
[Button Class](http://docs.nativescript.org/api-reference/classes/_ui_button_.button.html)

[Button Cookbook](http://docs.nativescript.org/cookbook/ui/button)
```

5. (Optional) Make а screenshot of your example named `image.png` and add it to the example directory. Here is an image with android and ios phone screenshots:

|Image|
|---|
|![Image](app/button/image.png "Image")|

6. Finally, add your example page to the main page navigation list:

######app/main-page.xml
```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="onPageLoaded">
  <ScrollView>
    <StackLayout id="root">
      <Button text="Button Tap Event" tap="{{ navigate }}" url="./button-tap-event/page"/>
      <Button text="Button Text" tap="{{ navigate }}" url="./button-text/page"/>
      <!--Add your sample here-->      
    </StackLayout>
  </ScrollView>
</Page>
```

## Run Application
```
npm install
tns run android
```
or
```
npm install
tns run ios
```

## Build Article
```
npm run build
```
You can find the build results in the `dist` directory.

## Show Preview 
To see a GitHub Flavored Markdown preview of the article, execute the following command:
```
npm run show-preview
``` 

Your default browser will open [this](https://github.com/NativeScript/nativescript-sdk-examples-preview/blob/master/sdk-examples.md).

This command pushes to github.com using SSH, so you might need [generate a new SSH key and add it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) in case you haven't done so already.

## Bugs, issues and enhancements
https://github.com/NativeScript/nativescript-sdk-examples/issues
