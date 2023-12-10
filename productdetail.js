ajax("GET","/backend/project005/getpost/"+weblsget("project005postid")+"/",function(event){
    let data=JSON.parse(event.responseText)
    console.log(data)
})

docgetid("title").onclick=function(){
    location.href="index.html"
}

startmacossection()