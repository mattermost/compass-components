'use strict';

module.exports = (page, scenario, vp) =>
    process.stdout.write(`SCENARIO > ${scenario.label} (${vp.label})\n`);
