const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const minutes = []
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
for (let i = 0; i <= 23; i++) {
  hours.push(i)
}
for (let i = 0; i <= 59; i++) {
  minutes.push(i)
}
Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    hours: hours,
    minutes: minutes,
    month: 2,
  
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      hour: this.data.hours[val[3]],
      minute: this.data.minutes[val[4]]
    })
  }
})