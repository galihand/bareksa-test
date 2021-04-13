const { format } = require("date-fns");

const parserRevenue = data => {
  let date = []
  let revenue = []
  data.forEach(item => {
    date.push(format(new Date(item.start_date), 'dd-MM-yyy'))
    revenue.push(+item.conversion_revenue)
  });
  return { date, revenue }
}

export default parserRevenue