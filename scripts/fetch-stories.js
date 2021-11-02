'use strict';

const path = require('path');

const { writeFile } = require('fs-extra');
const puppeteerCore = require('puppeteer-core');

const usePuppeteerBrowser = async () => {
    const args = ['--no-sandbox ', '--disable-setuid-sandbox'];

    try {
        return await puppeteerCore.launch({ args });
    } catch {
        /* eslint-disable promise/avoid-new,security/detect-child-process */
        return new Promise((resolve, reject) => {
            require('child_process').exec(
                `node ${require.resolve(path.join('puppeteer-core', 'install.js'))}`,
                (error) => (error ? reject(error) : resolve(puppeteerCore.launch({ args })))
            );
        });
        /* eslint-enable promise/avoid-new,security/detect-child-process */
    }
};

const read = async (url) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const browser = await usePuppeteerBrowser();
    const page = await browser.newPage();

    await page.goto(url);

    await page.waitForFunction(
        'window.__STORYBOOK_STORY_STORE__ && window.__STORYBOOK_STORY_STORE__.extract && window.__STORYBOOK_STORY_STORE__.extract()'
    );

    const data = JSON.parse(
        await page.evaluate(() =>
            // eslint-disable-next-line no-undef,no-underscore-dangle
            JSON.stringify(window.__STORYBOOK_STORY_STORE__.getStoriesJsonData(), null, 2)
        )
    );

    setImmediate(() => {
        browser.close();
    });

    return data;
};

(async () => {
    const data = await read('http://localhost:6006/iframe.html');

    await writeFile('./visual-test/stories.json', JSON.stringify(data, null, 2));
})();
