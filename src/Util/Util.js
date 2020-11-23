const getCurrentTemp = (temp) =>{
    let hrs = new Date().getHours();
    if (isRange(hrs, 6, 10)) {
        return temp.morn;//Morning to 10
    } else if (isRange(hrs, 11, 16)) {
        return temp.day;//Day 11 to 4
    } else if (isRange(hrs, 17, 19)) {
        return temp.eve;//Eve 5 to 7
    } else {
        return temp.night;//Night 8 to EarlyMorning 5
    }
}

const isRange = (hrs, min, max) => {
    return hrs >= min && hrs <= max ? true : false;
}

//Calculated Weather desc based on the speed attribute from API
export const getTodaysWeather = (speed) =>{
    speed = Math.round(speed);
    if (speed<1) {
        return 'Calm';
    } else if (isRange(speed, 1, 3)) {
        return 'Light Air';
    } else if (isRange(speed, 4, 7)) {
        return 'Light Breeze';
    } else if (isRange(speed, 8, 11)) {
        return 'Gentle Breeze';
    } else if (isRange(speed, 13, 18)) {
        return 'Moderate Breeze';
    } else if (isRange(speed, 19, 24)) {
        return 'Moderate Breeze';
    } else if (isRange(speed, 25, 31)) {
        return 'Strong Breeze';
    } else if (isRange(speed, 32, 38)) {
        return 'Almost Stromy';
    } else if (isRange(speed, 39, 46)) {
        return 'Stormy';
    } else if (isRange(speed, 47, 54)) {
        return 'Very Windy';
    } else if (isRange(speed, 55, 63)) {
        return 'Storm';
    } else if (isRange(speed, 64, 74)) {
        return 'Hurricane';
    } else {
        return 'Hurricane';
    }
}


export default getCurrentTemp;
