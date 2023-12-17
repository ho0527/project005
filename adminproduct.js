if(!weblsget("project005productsortby")){ weblsset("project005productsortby","all") }

docgetall(".productbutton").forEach(function(event){
    if(event.dataset.id==weblsget("project005productsortby")){
        event.classList.add("productbuttonselect")
    }
})

ajax("GET","/backend/project005/getproductlist/"+weblsget("project005productsortby"),function(event){
    let data=JSON.parse(event.responseText)
    if(data["success"]){
        let row=data["data"]
        if(row.length==0){
            docgetid("post").innerHTML=`
                <div class="error">查無資料</div>
            `
        }else{
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
                    location.href="productdetail.html"
                    weblsset("project005productid",event.dataset.id)
                }
            })
        }
    }
})

docgetall(".productbutton").forEach(function(event){
    event.onclick=function(){
        location.reload()
        weblsset("project005productsortby",event.dataset.id)
    }
})

docgetall(".button").forEach(function(event){
    event.onclick=function(){
        location.reload()
        weblsset("project005productsortby",event.dataset.id)
    }
})

docgetid("newproduct").onclick=function(){
    location.href="newproduct.html"
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