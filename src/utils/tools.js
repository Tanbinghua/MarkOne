export const formatDate = (str) => {
  if (!str) return ''
  let date = new Date(str)
  let arr = date.toString().split(' ')
  return arr[1] + ' ' + arr[2] + ', ' + arr[3]
}
