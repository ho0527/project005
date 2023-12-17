function main(data){
    docgetid("post").innerHTML=``

    ajax("GET","/backend/project005/getpostlist/"+data,function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            let row=data["data"]
            if(row.length>0){
                for(let i=0;i<row.length;i=i+1){
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
            }else{
                docgetid("post").innerHTML=`
                    <div class="error">查無資料</div>
                `
            }
        }
    })
}

ajax("GET","/backend/project005/taglist",function(event){
    let data=JSON.parse(event.responseText)
    if(data["success"]){
        let row=data["data"]
        for(let i=0;i<row.length;i=i+1){
            docgetid("select").innerHTML=`
                ${docgetid("select").innerHTML}
                <option value="${row[i]["name"]}">${row[i]["name"]}</option>
            `
        }
        docgetid("select").onchange=function(){
            main(this.value)
        }
    }
})

main("ALL")

docgetid("newpost").onclick=function(){
    location.href="newpost.html"
}

docgetid("title").onclick=function(){
    location.href="index.html"
}

docgetid("signout").onclick=function(){
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