docgetid("submit").onclick=function(){
    ajax("POST",ajaxurl+"/signin/",function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            weblsset("project005token",data["data"])
            alert("登入成功")
            location.href="admin.html"
        }else{
            docgetid("error").innerHTML=data["data"]
        }
    },JSON.stringify({
        "username": docgetid("username").value,
        "password": docgetid("password").value
    }))
}

docgetid("title").onclick=function(){
    location.href="index.html"
}

docgetid("signup").onclick=function(){
    alert("暫時禁止使用!")
    return ;

    ajax("POST",ajaxurl+"/signup/",function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            weblsset("project005token",data["data"])
            alert("註冊成功")
            location.href="admin.html"
        }else{
            docgetid("error").innerHTML=data["data"]
        }
    },JSON.stringify({
        "username": docgetid("username").value,
        "password": docgetid("password").value
    }))
}

document.onkeydown=function(event){
    if(event.key=="Enter"){
        docgetid("submit").click()
    }
}

passwordshowhide()

startmacossection()