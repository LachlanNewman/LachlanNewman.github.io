const axios = require('axios')

axios
  .post('https://www.linkedin.com/oauth/v2/accessToken', {
    grant_type: "client_credentials",
    client_id : clientId,
    client_secret : clentSecret
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })