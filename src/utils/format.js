import moment from 'moment'

export function formatDate (dateString) {
  const now = moment()
  const momentObj = moment(dateString, 'YYYY-MM-DD')

  momentObj.locale('sv')

  if (moment(dateString, 'YYYY-MM-DD').isSame(now, 'days')) {
    return 'idag'
  }
  else if (moment(dateString, 'YYYY-MM-DD').diff(now, 'days') < 7) {
    return momentObj.format('dddd')
  } else {
    return momentObj.format('DD/MM')
  }
}
