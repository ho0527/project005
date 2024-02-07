function main(){
    ajax("GET",ajaxurl+"/getproductlist/"+weblsget("project005productsortby"),function(event){
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
                            <img src="/icon/bootstrap/pencil-square.svg" class="productpostedit">
                        </div>
                    `
                }

                domgetid("post").innerHTML=innerhtml

                onclick(".productpost",function(element,event){
                    if(event.target.classList=="productpostedit"){
                        weblsset("project005producteditid",element.dataset.id)
                        location.href="editproduct.html"
                    }else{
                        weblsset("project005productid",element.dataset.id)
                        location.href="productdetail.html"
                    }
                })
            }else{
                domgetid("post").innerHTML=`
                    <div class="bigerror">查無資料</div>
                `
            }
        }
    })
}

if(!weblsget("project005productsortby")){ weblsset("project005productsortby","all") }

domgetall(".productbutton").forEach(function(event){
    if(event.dataset.id==weblsget("project005productsortby")){
        event.classList.add("productbuttonselect")
    }
})

main()

domgetall(".productbutton").forEach(function(event){
    event.onclick=function(){
        weblsset("project005productsortby",event.dataset.id)
        main()
        domgetall(".productbutton").forEach(function(event){
            if(event.dataset.id==weblsget("project005productsortby")){
                event.classList.add("productbuttonselect")
            }else{
                event.classList.remove("productbuttonselect")
            }
        })
    }
})

domgetid("newproduct").onclick=function(){
    location.href="newproduct.html"
}

startmacossection()