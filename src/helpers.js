export const websiteUrl = 'https://jc20.graffito.pt'
export const phone = '351912566905'

export const isAndroid = () => navigator.userAgent.toLowerCase().indexOf("android") > -1

export const isIOS = () => [
  'iPad Simulator',
  'iPhone Simulator',
  'iPod Simulator',
  'iPad',
  'iPhone',
  'iPod'
].includes(navigator.platform)
// iPad on iOS 13 detection
|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)

export const shareMobile = async () => {
  if (navigator.canShare) {
    try {
      await navigator.share({
        title: document.title,
        url: websiteUrl
      })
      console.log('share successful')
    } catch(err) {
      console.log(err)
    }
    
  } else {
    console.log('não é possível fazer share');
  }
}

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