const moment = require('moment');

export function getWeek(date) {
    const endDate = moment(date).endOf('week').add(1, 'day');
    let startDate = moment(date).startOf('week').add(1, 'day');

    const dates = [];
    
    let currentDate = moment(startDate);
    
    while (currentDate.isSameOrBefore(endDate, 'day')) {
        dates.push(
            {  
                day: moment(currentDate).format('D'),
                weekDay: moment(currentDate).format('dddd'),
                month: moment(currentDate).format('MMMM'),
                year: moment(currentDate).format('YYYY'),
                full: moment(currentDate).format('MM.DD.YYYY')

            }
        )
        currentDate.add(1, 'day');
    }
    return dates;
}
