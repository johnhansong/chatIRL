const formatDate = (dateTime) => {
    let year = dateTime.slice(0,4)
    let monthDay = dateTime.slice(5, 10).split('-').join('/')

    let time = dateTime.slice(11, 16)
    let hour = time.slice(0, 2)
    let minute = time.slice(3)

    if (hour > 12) {
        hour = parseInt(hour) - 12
        time = hour.toString() + ':' + minute + 'PM'
    } else if (hour === '00') {
        time = '12:'+ minute + "AM"
    } else {
        time = hour + ":" + minute + "AM"
    }

    return monthDay + '/' + year + " " + time
}

export { formatDate }
