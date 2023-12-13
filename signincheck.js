let file=location.href.split("project005/")[1]

ajax("GET","/backend/project005/signincheck",function(event){
    let data=JSON.parse(event.responseText)
    if(data["success"]){
        if(parseInt(data["data"]["permission"])>=1){
            if(file=="signin.html"){
                location.href="admin.html"
            }
        }else{
            if(file=="admin.html"){
                location.href="login.html"
            }
        }
    }else{
        alert(data["data"])
    }
},null,[
    ["Authorization","Bearer "+weblsget("project005token")]
])