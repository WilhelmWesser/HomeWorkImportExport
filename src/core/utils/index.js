import moment from "moment";
const calculateSumOfNumbers = (numbers) => {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    })
    return sum;
}

const getFormattedTime = (date = new Date()) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export {
    calculateSumOfNumbers,
    getFormattedTime
}