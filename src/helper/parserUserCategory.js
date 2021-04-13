const parseUserCategory = (data) => {
  return Object.values(data).sort((a, b) => a - b).map((item, index) => {
    return {
      name: Object.keys(data)[index].replace('_', ' '),
      y: +item,
      z: index + 1
    }
  })
  // console.log(data)
}

export default parseUserCategory