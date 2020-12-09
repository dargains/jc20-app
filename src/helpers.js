export const formatNumber = num =>  num
.toFixed(2) // always two decimal digits
.replace('.', ',') // replace decimal point character with ,
.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

export const zeroPrefix = (num, digit = 2) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}