## Methods

| Name     | Type    | Description    |
|----------|---------|----------------|
| `clear`   | `void` | Removes all stored values. |
| `flush`   | `boolean` | Flush all changes to disk synchronously. The return flag indicates if changes were saved successfully to disk. |
| `getAllKeys`   | `Array<string>` | Array containing all stored keys |
| `getBoolean(key: string, deafaultValue?: boolean)`   | `boolean` | Gets a value (if existing) for a key as a Boolean Object. A default value can be provided in case there is no existing value. |
| `getNumber(key: string, deafaultValue?: number)`   | `number` | Gets a value (if existing) for a key as a Number Object. A default value can be provided in case there is no existing value |
| `getString(key: string, deafaultValue?: string)`   | `string` | Gets a value (if existing) for a key as a String Object. A default value can be provided in case there is no existing value. |
| `hasKey(key: string)`   | `boolean` | Checks whether such a key exists. |
| `remove`   | `void` | Removes an entry by its key name. |
| `setBoolean(key: string, value: boolean)`   | `void` | Sets a Boolean Object for a key. |
| `setNumber(key: string, value: number)`   | `void` | Sets a Number Object for a key. |
| `setString(key: string, value: string)`   | `void` | Sets a String Object for a key. |


## API References

| Name     | Type    | 
|----------|---------|
| [tns-core-modules/application-settings](https://docs.nativescript.org/api-reference/modules/_application_settings_.html) | `Module` | 

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [android.content.SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences.html) | [NSUserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults) | 
