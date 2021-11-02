/* eslint-disable no-console,no-empty-function */
'use strict';

((original) => {
    console.enableLogging = () => {
        console.log = original;
    };
    console.disableLogging = () => {
        console.log = () => {};
    };
})(console.log);

module.exports = () => console.disableLogging();
