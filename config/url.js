import env from './env'

const DEV_URL = 'http://127.0.0.1:8808'
const PRO_URL = 'http://www.dashuntech.com:8808'

export default env === 'development' ? DEV_URL : PRO_URL
