function main(){
    ajax("GET","/backend/project005/getproductlist/"+weblsget("project005productsortby"),function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            let row=data["data"]
            if(row.length>0){
                let innerhtml=``
                for(let i=0;i<row.length;i++){
                    innerhtml=`
                        ${innerhtml}
                        <div class="productpost grid" data-id="${row[i][0]}">
                            <div class="productpostimagediv"><img src="/backend/media/${row[i][1]}" class="productpostimage"></div>
                            <div class="productposttitle macossectiondivy">${row[i][2]}</div>
                        </div>
                    `
                }

                docgetid("post").innerHTML=innerhtml

                docgetall(".productpost").forEach(function(event){
                    event.onclick=function(){
                        location.href="productdetail.html"
                        weblsset("project005productid",event.dataset.id)
                    }
                })
            }else{
                docgetid("post").innerHTML=`
                    <div class="bigerror">查無資料</div>
                `
            }
        }
    })
}

if(!weblsget("project005productsortby")){ weblsset("project005productsortby","all") }

docgetall(".productbutton").forEach(function(event){
    if(event.dataset.id==weblsget("project005productsortby")){
        event.classList.add("productbuttonselect")
    }
})

main()

docgetall(".productbutton").forEach(function(event){
    event.onclick=function(){
        weblsset("project005productsortby",event.dataset.id)
        main()
        docgetall(".productbutton").forEach(function(event){
            if(event.dataset.id==weblsget("project005productsortby")){
                event.classList.add("productbuttonselect")
            }else{
                event.classList.remove("productbuttonselect")
            }
        })
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