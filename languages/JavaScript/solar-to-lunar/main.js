/*
    INPUT  : `node main.js 2020 02 12`
    OUTPUT : `2020 01 19`
*/

var solarDate = process.argv.slice(2)

var Solar = require('./lib/Solar');
var Lunar = require('./lib/Lunar');
var LunarSolarConverter = require('./lib/LunarSolarConverter');

var solar = new Solar(
    /* YEAR  */ parseInt(solarDate[0]),
    /* MONTH */ parseInt(solarDate[1]),
    /* DAY   */ parseInt(solarDate[2]),
);
var converter = new LunarSolarConverter();
var lunar = converter.SolarToLunar(solar);

console.log(
    lunar.lunarYear,
    lunar.lunarMonth,
    lunar.lunarDay
);

if(lunar.lunarMonth == 1 && lunar.lunarDay == 1) {
    console.log('설연휴');
}
if(lunar.lunarMonth == 8 && lunar.lunarDay == 15) {
    console.log('추석연휴');
}