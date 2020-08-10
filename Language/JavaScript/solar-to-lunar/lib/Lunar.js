module.exports = class Lunar {
    constructor(lunarYear=0, lunarMonth=0, lunarDay=0, isleap=false) {
        this.isleap = isleap;
        this.lunarDay = lunarDay;
        this.lunarMonth = lunarMonth;
        this.lunarYear = lunarYear;
    }
}