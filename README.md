# srn-filter-list

bootcamp

## Installation

```sh
npm install srn-filter-list
```

## Changelogs

```Changes per version
v0.1.5 - use lodash in useViewModel
v0.1.4 - changes in readme
v0.1.3 - changes in readme
v0.1.2 - add the dataIn, dataLoad, and dataOut props in readme
v0.1.1 - miniapp first publish
```

## FilterList Mini App DataIn Props

| Prop                       | Required | Type         | Description                                            |
| :------------------------- | :------- | :----------- | :----------------------------------------------------- |
| **`showAllButton`**        | No       | `Boolean`    | if true, 'All' button will show                        |
| **`multiSelect`**          | No       | `Boolean`    | if true, will allows you to select two or more buttons |
| **`sameWidth`**            | No       | `Boolean`    | if true, all button will have the same width           |
| **`activeButtonStyle`**    | No       | `View Style` | View style for all active buttons                      |
| **` inActiveButtonStyle`** | No       | `View Style` | View style for all inactive buttons                    |

        |

## FilterList Data Load Props

| Prop             | Type    |
| :--------------- | :------ |
| **`value`**      | string  |
| **`buttonName`** | string  |
| **`isSelected`** | boolean |

## FilterList Data Out Props

| Prop                    | Required | Type         | Description          |
| :---------------------- | :------- | :----------- | :------------------- |
| **`FilterListDataOut`** | Yes      | `() => void` | Button onClick event |

## Example

Run the following commands

`npm run boostrap`:setup project by installing all dependencies and pods.
`npm run example run start`: start the Metro server for the example app.
`npm run example run android`: run the example app on Android.
`npm run example run ios`: run the example app on iOS.

## License

MIT
