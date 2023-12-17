let cover

InlineEditor.create(docgetid("newposteditor"),{
    // plugins:[CKFinder],
    extraPlugins: [ MyCustomUploadAdapterPlugin ],
    // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
    toolbar: {
        items: ["selectAll","undo","redo","bold","italic","blockQuote","heading","imageTextAlternative","toggleImageCaption","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","uploadImage","imageUpload","indent","outdent","link","numberedList","bulletedList","mediaEmbed","insertTable","tableColumn","tableRow","mergeTableCells"],
        shouldNotGroupWhenFull: true
    },
    // Changing the language of the interface requires loading the language file using the <script> tag.
    // language: "es",
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
    heading: {
        options: [
            { model: "paragraph",title: "Paragraph",class: "ck-heading_paragraph" },
            { model: "heading1",view: "h1",title: "Heading 1",class: "ck-heading_heading1" },
            { model: "heading2",view: "h2",title: "Heading 2",class: "ck-heading_heading2" },
            { model: "heading3",view: "h3",title: "Heading 3",class: "ck-heading_heading3" },
            { model: "heading4",view: "h4",title: "Heading 4",class: "ck-heading_heading4" },
            { model: "heading5",view: "h5",title: "Heading 5",class: "ck-heading_heading5" },
            { model: "heading6",view: "h6",title: "Heading 6",class: "ck-heading_heading6" }
        ]
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
    placeholder: "請在此輸入文字!",
    // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
    fontFamily: {
        options: ["default","Arial,Helvetica,sans-serif","Courier New,Courier,monospace","Georgia,serif","Lucida Sans Unicode,Lucida Grande,sans-serif","Tahoma,Geneva,sans-serif","Times New Roman,Times,serif","Trebuchet MS,Helvetica,sans-serif","Verdana,Geneva,sans-serif"],
        supportAllValues: true
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-size-feature
    fontSize: {
        options: [10,12,14,"default",18,20,22],
        supportAllValues: true
    },
    // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
    // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
    htmlSupport: {
        allow: [
            {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
            }
        ]
    },
    // Be careful with enabling previews
    // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
    htmlEmbed: {
        showPreviews: true
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
    link: {
        decorators: {
            addTargetToExternalLinks: true,
            defaultProtocol: "https://",
            toggleDownloadable: {
                mode: "manual",
                label: "Downloadable",
                attributes: {
                    download: "file"
                }
            }
        }
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#configuration
    mention: {
        feeds: [
            {
                marker: "@",
                feed: [
                    "@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@dragée","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@soufflé","@sugar","@sweet","@topping","@wafer"
                ],
                minimumCharacters: 1
            }
        ]
    },
    // removePlugins: [
    //     "AIAssistant",
    //     "CKBox",
    //     "CKFinder",
    //     "EasyImage",
    //     "RealTimeCollaborativeComments",
    //     "RealTimeCollaborativeTrackChanges",
    //     "RealTimeCollaborativeRevisionHistory",
    //     "PresenceList",
    //     "Comments",
    //     "TrackChanges",
    //     "TrackChangesData",
    //     "RevisionHistory",
    //     "Pagination",
    //     "WProofreader",
    //     "MathType",
    //     "SlashCommand",
    //     "Template",
    //     "DocumentOutline",
    //     "FormatPainter",
    //     "TableOfContents",
    //     "PasteFromOfficeEnhanced"
    // ]
}).then(function(event){
    docgetid("submit").onclick=function(){
        if(cover&&title!=""){
            let taglist=[]
            docgetall("#selecttag>.tag").forEach(function(event){
                taglist.push(event.dataset.name)
            })
            ajax("POST","/backend/project005/newpost/",function(event){
                let data=JSON.parse(event.responseText)
                if(data["success"]){
                    alert("上傳成功")
                    location.href="adminwebknowledge.html"
                }
            },formdata([
                ["cover",cover],
                ["title",docgetid("posttitle").value],
                ["content",event.getData()],
                ["tag",taglist.join("|&|")],
            ]),[])
        }else{
            alert("請填寫標題及上傳封面")
        }
    }
})

docgetid("file").onchange=function(){
    let file=this.files[0]
    cover=file
    let reader=new FileReader()
    reader.onload=function(e){
        docgetid("preview").src=e.target.result
        docgetid("preview").style.display="block"
    }
    reader.readAsDataURL(file)
}

docgetid("title").onclick=function(){
    location.href="index.html"
}

docgetid("uploadfile").onclick=function(){
    docgetid("file").click()
}

docgetid("uploadfile").ondragover=function(event){
    event.preventDefault()
    event.stopPropagation()
}

docgetid("uploadfile").ondragleave=function(event){
    event.preventDefault()
    event.stopPropagation()
}

docgetid("uploadfile").ondrop=function(event){
    event.preventDefault()
    event.stopPropagation()

    let files=event.dataTransfer.files
    if(files.length>0){
        let file=files[0]
        cover=file

        let reader=new FileReader()
        reader.onload=function(e){
            docgetid("preview").src=e.target.result
            docgetid("preview").style.display="block"
        }
        reader.readAsDataURL(file)
    }
}


docgetid("newposteditor").ondrop=function(){
    cover=this.files[0]
    console.log("cover=",cover)
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

ajax("GET","/backend/project005/taglist",function(event){
    let data=JSON.parse(event.responseText)
    tag("tagdiv",data["data"],function(value){
        if(value!="|&|"&&value!="ALL"){
            ajax("POST","/backend/project005/addtag",function(event){
                let data=JSON.parse(event.responseText)
                console.log(data)
            },JSON.stringify({
                "name": value
            }))
        }else{
            alert("請勿輸入'|&|'或'ALL'")
        }
    })
})

startmacossection()