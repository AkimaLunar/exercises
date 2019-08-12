const revString = str => {
  if (str.length === 0) {
    return ''
  }
  return revString(str.slice(1)) + str.slice(0, 1)
}
