ajax("GET","/backend/project005/getpostlist/",function(event){
    let data=JSON.parse(event.responseText)
    if(data["success"]){
        let row=data["data"]
        console.log(row)
        for(let i=0;i<row.length;i++){
            docgetid("post").innerHTML=`
                ${docgetid("post").innerHTML}
                <div class="webknowledgepost grid" data-id="${row[i][0]}">
                    <div class="webknowledgepostimagediv macossectiondivy"><img src="/backend/media/${row[i][1]}" class="webknowledgepostimage"></div>
                    <div class="webknowledgeposttitle macossectiondivy">${row[i][2]}</div>
                    <div class="webknowledgepostcontent macossectiondivy">${row[i][3]}</div>
                </div>
            `
        }

        docgetall(".webknowledgepost").forEach(function(event){
            event.onclick=function(){
                location.href="post.html"
                weblsset("project005postid",event.dataset.id)
            }
        })
    }
})

docgetid("newpost").onclick=function(){
    location.href="newpost.html"
}

docgetid("title").onclick=function(){
    location.href="index.html"
}

docgetid("logout").onclick=function(){
    ajax("POST","/backend/project005/signout/",function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            alert("登出成功")
            weblsset("project005token",null)
            location.href="index.html"
        }else{
            alert(data["data"])
        }
    },null,[
        ["Authorization","Bearer "+weblsget("project005token")]
    ])
}

startmacossection()