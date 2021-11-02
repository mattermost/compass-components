/* eslint-disable no-console */
'use strict';

module.exports = (page, scenario, vp) => {
    const whitelist = ['COMMAND', 'report', 'openReport', 'compare', 'createBitmaps'];

    console.log = (message) => {
        whitelist.forEach((term) => {
            if (message.includes(term)) {
                process.stdout.write(`${message}\n`);
            }
        });
    };

    process.stdout.write(`SCENARIO > (${vp.label}) > ${scenario.label}\n`);
};
