const parseConversion = (data) => {
  let tmp = []

  data.forEach(item => {
    if (tmp.indexOf(item.conversion_item) < 0) tmp = [...tmp, item.conversion_item]
  });

  let result = tmp.map(item => {
    let y = 0
    data.forEach(order => {
      if (order.conversion_item === item) y += +order.conversion_revenue
    })
    return {
      name: item,
      y
    }
  })
  return result
}

export default parseConversion