# Compass Components

The compass components package is the implementation of the [compass design system](https://zeroheight.com/29be2c109/p/995619-compass-design-system)
meant (but not limited) to be used in the mattermost products: Messaging, Playbooks and Focalboard.

The intention behind the package is to create a unified look and feel across the products.

## Use compass components in your project

1. install compass components from npm

    in your project run

    ```shell
    npm i @mattermost/compass-components
    ```

2. import `ThemeProvider` in your application root

    In order for the compass components to be styled correctly you need to wrap your application in a `ThemeProvider`.

    It also manages custom themes for your application (if you wish so).

    ```javascript
    import ThemeProvider from '@mattermost/compass-components/utilities/theme';
    ```

3. import the components you need into your files

    ```javascript
    import Text from '@mattermost/compass-components/components/Text';
    ```

### Example

This is just a basic example how the `ThemeProvider` can be used to provide a theme and toggle between two themes

```typescript jsx
import { useState } from 'react';
import ThemeProvider, {
    lightTheme,
    darkTheme,
} from '@mattermost/compass-components/utilities/theme';
import Button from '@mattermost/compass-components/components/button';

function App() {
    const [themeIndex, setThemeIndex] = useState(0);
    const themes = [lightTheme, darkTheme];

    const handleClick = () => setThemeIndex(themeIndex === 0 ? 1 : 0);

    return (
        <ThemeProvider theme={themes[themeIndex]}>
            <Button
                icon={'mattermost'}
                iconPosition={'start'}
                label={'TESTBUTTON'}
                onClick={handleClick}
            />
        </ThemeProvider>
    );
}

export default App;
```

### Running storybook for development

1. Fork/Checkout this repository to a folder on your computer (we will use the user folder in this example)

    ```shell
    cd path/to/your/projects/folder
    git clone https://github.com/<YOUR_GITHUB_USERNAME>/compass-components.git
    ```

    It should now be cloned to `path/to/your/projects/folder/compass-components`

2. Install all dependencies needed for running storybook

    go to the project folder:

    ```shell
    cd compass-components
    ```

    and install dependencies with `npm`:

    ```shell
    npm install --legacy-peer-deps
    ```

    > **NOTE:** adding the flag `--legacy-peer-deps` is currently needed when there is no valid `package-lock.json` in
    > place, since `peerDependencies` differ and cannot be resolved for storybook and other packages.

3. Run storybook

    once all packages are installed you can run storybook:

    ```shell
    npm run storybook
    ```

    when storybook is up and running you can access it by navigating in your browser to `localhost:6006`.

### Requirements

-   node version 16.x
-   npm version 7.x

## How to contribute

As we are a company committed to open-source we welcome every contribution from the wider community.
This section should outline the very basic steps to contribute to the project.

### Creating a new component

For ease of use we created a convenience `generate component` function to create a boilerplate template for new
components.

Simply run

```shell
npm run gc
```

You will be asked which kind of component you would like to create:

-   `Foundation`
    (_Atomic component_) - will go into the `src/foundations` folder
-   `Component`
    (_Molecule component_) - will go into the `src/components` folder
-   `Utility`
    (_Utility component_) - will go into the `src/utilities` folder

The function will create a component structure like this:

```
ComponentName/
├── ComponentName.constants.ts
├── ComponentName.props.ts
├── ComponentName.root.ts
├── ComponentName.stories.mdx
├── ComponentName.tsx
├── ComponentName.types.ts
└── index.ts
```

### Naming convention

we mainly use 3 different types of namings and each one has their own use-case:

| naming style | used for          | example                                 |
| ------------ | ----------------- | --------------------------------------- |
| `PascalCase` | component names   | `MenuItem`                              |
|              | props definitions | `type PMenuItem = { ... }`              |
|              | types definitions | `type TMenuItemSize = { ... }`          |
| `UPPER_CASE` | constants         | `const MENU_ITEM_SIZES = ...`           |
| `camelCase`  | everything else   | `const setMenuItemSize = () => { ... }` |

### Testing the package in your local project

for an easier way to test this package in your locally running project we added a script to build, pack and save it.

Simply run the following command in the compass-component package root and it will perform all the actions, except for
installing it in your project (but it will give you a command to do so :D)

```shell
npm run pack
```

after the script finishes it gives you a command to run in your project root, that should look something like this:

```shell
npm install -S "$COMPASS_COMPONENTS_PACKAGE_PATH"
```

> **INFO:**
>
> the script will export a variable `COMPASS_COMPONENTS_PACKAGE_PATH` to your shell. This is not ultimately needed
> and is being set only for convenience. You can still install the package directly using a path (absolute or relative
> to your projects folder).
>
> the installable tarball is saved to the compass-component root folder (`<PATH_TO_COMPASS_COMPONENTS>/packed.tgz`)
