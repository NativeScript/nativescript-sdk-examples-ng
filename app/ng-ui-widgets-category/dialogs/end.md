## Properties

### Action Dialog Propeties

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `title`  | `string`  | Gets or sets the dialog title. |
| `message`| `string`  | Gets or sets the dialog message. |
| `cancelable`| `boolean`  | *_[Android only]_* Gets or sets if the dialog can be canceled by taping outside of the dialog. |
| `actions`  | `Array<string>`  | Gets or sets the list of available actions. |
| `cancelButtonText`| `string`  | Gets or sets the Cancel button text. |

### Alert Dialog Properties

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `title`  | `string`  | Gets or sets the dialog title. |
| `message`| `string`  | Gets or sets the dialog message. |
| `cancelable`| `boolean`  | *_[Android only]_* Gets or sets if the dialog can be canceled by taping outside of the dialog. |
| `okButtonText`  | `string`  | Gets or sets the OK button text. |

### Confirm Dialog Properties

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `title`  | `string`  | Gets or sets the dialog title. |
| `message`| `string`  | Gets or sets the dialog message. |
| `cancelable`| `boolean`  | *_[Android only]_* Gets or sets if the dialog can be canceled by taping outside of the dialog. |
| `cancelButtonText`| `string`  | Gets or sets the Cancel button text. |
| `okButtonText`  | `string`  | Gets or sets the OK button text. |
| `neutralButtonText`  | `string`  | Gets or sets the neutral button text.|


### Login Dialog Properties

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `title`  | `string`  | Gets or sets the dialog title. |
| `message`| `string`  | Gets or sets the dialog message. |
| `cancelable`| `boolean`  | *_[Android only]_* Gets or sets if the dialog can be canceled by taping outside of the dialog. |
| `cancelButtonText`| `string`  | Gets or sets the Cancel button text. |
| `okButtonText`  | `string`  | Gets or sets the OK button text. |
| `neutralButtonText`  | `string`  | Gets or sets the neutral button text.|
| `userName`| `string`  | Gets or sets the default text to display in the username input box. |
| `userNameHint`| `string`  | Gets or sets the default text to display as hint in the username input box. |
| `password`| `string`  | Gets or sets the default text to display in the password input box. |
| `passwordHint`| `string`  | Gets or sets the default text to display as hint in the password input box. |

### Login Dialog Result Properties

The result are received in the dialog resolved promise after the user closes or dismisses the dialog.

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `userName`| `string`  | Gets the username entered in the login dialog. |
| `password`| `string`  | Gets the password entered in the login dialog. |
| `result` | `boolean`  | Returns `false` when the dialog is dismissed. Otherwise returns `true` |

### Prompt Dialog Properties

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `title`  | `string`  | Gets or sets the dialog title. |
| `message`| `string`  | Gets or sets the dialog message. |
| `cancelable`| `boolean`  | *_[Android only]_* Gets or sets if the dialog can be canceled by taping outside of the dialog. |
| `cancelButtonText`| `string`  | Gets or sets the Cancel button text. |
| `okButtonText`  | `string`  | Gets or sets the OK button text. |
| `neutralButtonText`  | `string`  | Gets or sets the neutral button text.|
| `defaultText`| `string`  | Gets or sets the default text to display in the input box. |
| `capitalizationType` | `string` | Gets or sets the prompt capitalizationType (none, all, sentences, or words). |
| `inputType` | `string` | Gets or sets the prompt input type (plain text, password, or email). |

### Prompt Dialog Result Properties

The result are received in the dialog resolved promise after the user closes or dismisses the dialog.

| Name     | Type      | Description    |
|----------|-----------|----------------|
| `text`| `string`  | Gets the text entered in the prompt dialog input field. |
| `result` | `boolean`  | Returns `false` when the dialog is dismissed. Otherwise returns `true` |

## Events

No applicable events are present. The dialogs are using promises to return results. 

## API References

| Name     | Type    | API Reference Link |
|----------|---------|--------------------|
| [tns-core-modules/ui/dialogs](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) | `Module` | 
| [action](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action) | `function`  | 
| [ActionOptions](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.actionoptions) | `interface`  | 
| [alert](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert) | `function`  | 
| [AlertOptions](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.alertoptions) | `interface`  | 
| [confirm](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm) | `function`  | 
| [ConfirmOptions](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.confirmoptions) | `interface`  | 
| [login](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login) | `function`  | 
| [LoginOptions](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.loginoptions) | `interface`  | 
| [LoginResults](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.loginresult) | `interface`  | 
| [prompt](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt) | `function`  | 
| [PromptOptions](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.promptoptions) | `interface`  | 

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [android.app.AlertDialog.Builder](https://developer.android.com/reference/android/app/AlertDialog.Builder)  | [UIAlertController](https://developer.apple.com/documentation/uikit/uialertcontroller) | 

