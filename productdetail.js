ajax("GET",ajaxurl+"/getproduct/"+weblsget("project005productid"),function(event){
    let data=JSON.parse(event.responseText)
    docgetid("main").innerHTML=`
        <div class="productdetailtop">
            <div class="productdetailtitle">
                ${data["data"][2]}
            </div>
            <img src="material/picture/postcover.png" class="productdetailimage">
        </div>
        <div class="productdetail" id="ckeditor">${data["data"][3]}</div>
    `

    // ClassicEditor.create(domgetid("ckeditor"),{
    //     config:{
    //     toolbar: ['bold', 'italic', 'bulletedList', '|', 'numberedList', 'alignment'],
    //     removePlugins: ['Heading', 'Link'],
    //     isReadOnly: true,
    //     }
    // }).then(function(event){
    //     event.ui.view.toolbar.element.style.display="none"
    //     event.enableReadOnlyMode("editor")
    // })
})

docgetid("title").onclick=function(){
    location.href="index.html"
}

startmacossection()