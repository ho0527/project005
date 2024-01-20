let carouselcount=0
let slides=domgetall(".carouselcontent")
let carouseltime=0

function main(){
    ajax("GET",ajaxurl+"/getproductlist/system",function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            let row=data["data"]
            if(row.length>0){
                let innerhtml=``

                row=row[0]

                innerhtml=`
                    ${innerhtml}
                    <div class="productpost grid" data-id="${row[0]}">
                        <div class="productpostimagediv"><img src="/backend/media/${row[1]}" class="productpostimage"></div>
                        <div class="productposttitle macossectiondivy">${row[2]}</div>
                    </div>
                `

                docgetid("indexproductmain").innerHTML=docgetid("indexproductmain").innerHTML+innerhtml

                docgetall(".productpost").forEach(function(event){
                    event.onclick=function(){
                        location.href="productdetail.html"
                        weblsset("project005productid",event.dataset.id)
                    }
                })
            }
        }
        ajax("GET",ajaxurl+"/getproductlist/commercializeapp",function(event){
            let data=JSON.parse(event.responseText)
            if(data["success"]){
                let row=data["data"]
                if(row.length>0){
                    let innerhtml=``

                    row=row[0]

                    innerhtml=`
                        ${innerhtml}
                        <div class="productpost grid" data-id="${row[0]}">
                            <div class="productpostimagediv"><img src="/backend/media/${row[1]}" class="productpostimage"></div>
                            <div class="productposttitle macossectiondivy">${row[2]}</div>
                        </div>
                    `

                    docgetid("indexproductmain").innerHTML=docgetid("indexproductmain").innerHTML+innerhtml

                    docgetall(".productpost").forEach(function(event){
                        event.onclick=function(){
                            location.href="productdetail.html"
                            weblsset("project005productid",event.dataset.id)
                        }
                    })
                }
            }
            ajax("GET",ajaxurl+"/getproductlist/personalizeapp",function(event){
                let data=JSON.parse(event.responseText)
                if(data["success"]){
                    let row=data["data"]
                    if(row.length>0){
                        let innerhtml=``

                        row=row[0]

                        innerhtml=`
                            ${innerhtml}
                            <div class="productpost grid" data-id="${row[0]}">
                                <div class="productpostimagediv"><img src="/backend/media/${row[1]}" class="productpostimage"></div>
                                <div class="productposttitle macossectiondivy">${row[2]}</div>
                            </div>
                        `

                        docgetid("indexproductmain").innerHTML=docgetid("indexproductmain").innerHTML+innerhtml

                        docgetall(".productpost").forEach(function(event){
                            event.onclick=function(){
                                location.href="productdetail.html"
                                weblsset("project005productid",event.dataset.id)
                            }
                        })
                    }
                }
            })
        })
    })
}

function carouselmove(){
    if(carouselcount>=slides.length){
        carouselcount=0
    }

    if(carouselcount<0){
        carouselcount=slides.length-1
    }

    for(let i=0;i<slides.length;i=i+1){
        slides[i].style.display="none"
    }

    slides[carouselcount].style.display="flex"
}

// ====================================================================================================

if(!weblsget("project005productsortby")){ weblsset("project005productsortby","all") }

setInterval(function(){
    carouseltime=carouseltime+1
},500)

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

onclick("#prev",function(element,event){
    carouselcount=carouselcount-1
    carouselmove()
})

onclick("#next",function(element,event){
    carouselcount=carouselcount+1
    carouselmove()
})

setInterval(function(){
    if(carouseltime==7){
        carouselcount=carouselcount+1
        carouselmove()
        carouseltime=0
    }
},10)

startmacossection()