const clientId = "86dqus847b6h22"
const clentSecret = "5j1LmubAez7pgSke"

$(function(){
    console.log("JQuery")

    $.post("https://www.linkedin.com/oauth/v2/accessToken",{
        grant_type: "client_credentials",
        client_id : clientId,
        client_secret : clentSecret
    }).done((res) => {
        console.log(res)
    })
})