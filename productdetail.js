ajax("GET",ajaxurl+"/getproduct/"+weblsget("project005productid"),function(event){
    let data=JSON.parse(event.responseText)
    docgetid("main").innerHTML=`
        <div class="productdetailtop">
            <div class="productdetailtitle">
                ${data["data"][2]}
            </div>
            <img src="/backend/media/${data["data"][1]}" class="productdetailimage">
        </div>
        <div class="productdetail">
            ${data["data"][3]}
        </div>
    `
    console.log(data)
})

docgetid("title").onclick=function(){
    location.href="index.html"
}

startmacossection()