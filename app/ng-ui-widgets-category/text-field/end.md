## Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `autocapitalizationType` | [`AutocapitalizationType`](https://docs.nativescript.org/api-reference/modules/_ui_editor_text_base_#autocapitalizationtype) | Gets or sets the autocapitalization type. |
| `autocorrect` | `boolean` | Enables or disables autocorrection. |
| `keyboardType` | [`KeyboardType`](https://docs.nativescript.org/api-reference/modules/_ui_editor_text_base_#keyboardtype) | Gets or sets the soft keyboard type |
| `letterSpacing` | `number` | Gets or sets letter space style property. |
| `lineHeight` | `number` | Gets or sets line height style property. |
| `maxLength` | `number` | Gets or sets the max number of symbols allowed as input. |
| `returnKeyType` | [`ReturnKeyType`](https://docs.nativescript.org/api-reference/modules/_ui_editor_text_base_#returnkeytype) | Gets or sets the soft keyboard return key flavor. |
| `secure` | `string` | Gets or sets if a text field is for password entry. Possible values: true or false |
| `text` | `string` | Gets or sets the text. |
| `textAlignment` | `TextAlignment` | Gets or sets the text alignment. |
| `textDecoration` | `TextDecoration` | Gets or sets the text decoration. |
| `textTransform` | `TextTransform` | Gets or sets the text transform. |
| `whiteSpace` | `WhiteSpace` | Gets or sets white space style property. |

## Methods

| Name                   | Description                                           |
|:-----------------------|:------------------------------------------------------|
| `focus` | Tries to focus the view. Returns a value indicating whether this view or one of its descendants actually took focus. Returns `boolean`. |
| `dismissSoftInput` | Hides the soft input method, ususally a soft keyboard. |

## Events

| Name                   | Description                                           |
|:-----------------------|:------------------------------------------------------|
| `blur` | Emitted when the text field is unfocused. |
| `focus` | Emitted when the text field is focused. |
| `returnPress` | Emitted when the return key is tapped. |
| `textChange` | Emitted when there is a new text input. |

## API References

| Name     | Type    |
|----------|---------|
| [tns-core-modules/ui/text-field](http://docs.nativescript.org/api-reference/modules/_ui_text_field_.html) | `Module` | 
| [TextField](https://docs.nativescript.org/api-reference/classes/_ui_text_field_.textfield) | `Class` |


## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |


