## File Properties

| Name     | Type    | Description    |
|----------|---------|----------------|
| `extension`   | `string` | Gets the extension of the file. |
| `isLocked`   | `boolean` | Gets a value indicating whether the file is currently locked, meaning a background operation associated with this file is running. |
| `lastModified`   | `Date` | Gets the Date object specifying the last time this entity was modified. |
| `name`   | `string` | Gets the name of the entity. |
| `parent`   | `Folder` | Gets the Folder object representing the parent of this entity. Will be null for a root folder like Documents or Temporary. This property is readonly. |
| `path`   | `string` | Gets the fully-qualified path (including the extension for a File) of the entity.|
| `size`   | `number` | Gets the size in bytes of the file. |

## File Methods

| Name     | Return Type    | Description    |
|----------|---------|----------------|
| `read`   | `Promise<any>` | Reads the binary content of the file asynchronously. |
| `readSync(onError?: function)`   | `any` | Reads the binary content of the file synchronously. |
| `readText(encoding?: string)`   | `Promise<string>` | Reads the content of the file as a string using the specified encoding (defaults to UTF-8). |
| `readTextSync(onError?: function, encoding?: string)`   | `string` | Reads the content of the file as a string synchronously, using the specified encoding (defaults to UTF-8). |
| `remove`   | `void` | Removes (deletes) the current Entity from the file system. |
| `removeSync(onError?: function)`   | `void` | Removes (deletes) the current Entity from the file system synchronously.|
| `rename(newName: string)`   | `Promise<any>` | Renames the current entity using the specified name. |
| `renameSync(newName: string, onError?: function)`   | `void` | Renames the current entity synchronously, using the specified name. |
| `write(newName: string)`   | `Promise<void>` | Writes the provided binary content to the file. |
| `writeSync(newName: string, onError?: function)`   | `void` | Writes the provided binary content to the file synchronously. |
| `writeText(encoding?: string)`   | `Promise<string>` | Writes the content of the file as a string using the specified encoding (defaults to UTF-8). |
| `writeTextSync(onError?: function, encoding?: string)`   | `string` | Writes the content of the file as a string synchronously, using the specified encoding (defaults to UTF-8). |
| `exists(path: string)`   | `boolean` | Checks whether a File with the specified path already exists. |
| `fromPath(path: string)`   | `File` | Gets or creates a File entity at the specified path. |

## Folder Properties

| Name     | Type    | Description    |
|----------|---------|----------------|
| `isKnown`   | `boolean` | Determines whether this instance is a KnownFolder (accessed through the KnownFolders object). |
| `lastModified`   | `Date` | Gets the Date object specifying the last time this entity was modified. |
| `name`   | `string` | Gets the name of the entity. |
| `parent`   | `Folder` | Gets the Folder object representing the parent of this entity. Will be null for a root folder like Documents or Temporary. This property is readonly. |
| `path`   | `string` | Gets the fully-qualified path (including the extension for a File) of the entity.|

## Folder Methods

| Name     | Return Type    | Description    |
|----------|---------|----------------|
| `clear`   | `Promise<any>` | Deletes all the files and folders (recursively), contained within this Folder. |
| `clearSync(onError?: function)`   | `void` | Deletes all the files and folders (recursively), contained within this Folder synchronously. |
| `contains(name: string)`   | `boolean` | Checks whether this Folder contains an Entity with the specified name. The path of the folder is added to the name to resolve the complete path to check for. |
| `eachEntity(onEntity: function)`   | `any` | Enumerates all the top-level FileSystem entities residing within this folder. |
| `getEntities`   | `Promise<Array<FileSystemEntity>>` | Gets all the top-level entities residing within this folder. |
| `getEntitiesSync(onError?: function)`   | `Array<FileSystemEntity>` | Gets all the top-level entities residing within this folder synchronously |
| `getFile(name: string)`   | `File` | Gets or creates a File entity with the specified name within this Folder. |
| `getFolder(name: string)`   | `Folder` | Gets or creates a Folder entity with the specified name within this Folder. |
| `remove`   | `Promise<any>` | Removes (deletes) the current Entity from the file system. |
| `removeSync`   | `removeSync(onError?: function)` | Removes (deletes) the current Entity from the file system synchronously. |

## knownFolders Methods

| Name     | Return Type    | Description    |
|----------|---------|----------------|
| `currentApp`   | `Folder` | Gets the root folder for the current application. This Folder is private for the application and not accessible from Users/External apps. iOS - this folder is read-only and contains the app and all its resources. |
| `documents`   | `Folder` | Gets the Documents folder available for the current application. This Folder is private for the application and not accessible from Users/External apps. |
| `temp`   | `Folder` | Gets the Temporary (Caches) folder available for the current application. This Folder is private for the application and not accessible from Users/External apps. |

## path Methods

| Name     | Return Type    | Description    |
|----------|---------|----------------|
| `join(...paths: string[])`   | `string` | Joins all the provided string components, forming a valid and normalized path. |
| `normalize(path: string)`   | `string` | Normalizes a path, taking care of occurrances like ".." and "//". |


## API References

| Name     | Type    | 
|----------|---------|
| [tns-core-modules/file-system](https://docs.nativescript.org/api-reference/modules/_file_system_.html) | `Module` | 
| [FileSystem](https://docs.nativescript.org/api-reference/classes/_file_system_.file.html) | `Class` | 
| [FileSystemEntity](https://docs.nativescript.org/api-reference/classes/_file_system_.filesystementity.html) | `Class` |
| [Folder](https://docs.nativescript.org/api-reference/classes/_file_system_.folder.html) | `Class` |
| [knownFolders](https://docs.nativescript.org/api-reference/modules/_file_system_.knownfolders) | `Module` |
| [path](https://docs.nativescript.org/api-reference/modules/_file_system_.path) | `Module` |

