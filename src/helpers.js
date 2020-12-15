import Axios from "axios"
import { projectUrl } from "./api"

export const websiteUrl = 'https://avenida-living.pt'
export const cmsUrl = 'https://cms.avenida-living.pt'
export const phone = '351912566905'
export const contactEmail = "geral@riocapital.pt"

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

export const sendEmail = async ({to, subject, body, data}) => {
  const email = {
    to,
    subject,
    body,
    data,
    "type": "html"
  }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await Axios.post(`${projectUrl}/auth/authenticate`, {
        email: 'andre.dargains@gmail.com',
        password: '123qweasd'
      })
      const { token } = response.data.data
      await Axios.post(`${projectUrl}/mail`, email, { headers: { Authorization: `bearer ${token}` } })
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}