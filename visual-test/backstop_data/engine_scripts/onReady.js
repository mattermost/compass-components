/* eslint-disable no-console,no-empty-function */
'use strict';

module.exports = () => {
    Object.keys(console).forEach((key) => {
        if (key !== 'memory') {
            console[key] = () => {};
        }
    });
};
