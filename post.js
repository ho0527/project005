ajax("GET","/backend/project005/getpost/"+weblsget("project005postid")+"/",function(event){
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

startmacossection()