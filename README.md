# Compass Components

The compass components package is the implementation of the [compass design system](https://zeroheight.com/29be2c109/p/995619-compass-design-system) meant (but not limited) to be used in the mattermost products: Messaging, Playbooks and Focalboard.

The intention behind the püackage is to create a unified look and feel across the products.

## Use compass components in your project

1. install compass components from npm

    in your project run

    ```bash
    npm i @mattermost/compass-components
    ```

2. import `ThemeProvider` in your application root

    In order for the compass components to be syled correctly you need to wrap your applcation in a `ThemeProvider`.

    It also manages custom themes for your application (if you wish so).

    ```javascript
    import ThemeProvider from '@mattermost/compass-components/utilities/theme';
    ```

3. import the components you need into your files

    ```javascript
    import Text from '@mattermost/compass-components/components/Text';
    ```

### running storybook for development

1. Fork/Checkout this repository to a folder on your computer (we will use the user folder in this example)

    ```bash
    cs path/to/your/projects/folder
    git clone https://github.com/<YOUR_GITHUB_USERNAME>/compass-components.git
    ```

    It should now be cloned to `path/to/your/projects/folder/compass-components`

2. Install all dependencies needed for running storybook

    go to the project folder:

    ```bash
    cd compass-components
    ```

    and install dependencies with `npm`:

    ```bash
    npm install --legacy-peer-deps
    ```

    > **NOTE:** adding the flag `--legacy-peer-deps` is curently needed when there is no valid `package-lock.json` in
    > place, since `peerDependencies` differ fand cannot be resolved for storybook and other packages.

3. Run storybook

    once all packages are installed you can run storybook:

    ```bash
    npm run storybook
    ```

    when storybook is up and running you can access it by navigating in your browser to `localhost:6006`.

### Requirements

-   node version 16.x
-   npm version 7.x
