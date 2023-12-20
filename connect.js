let isupload=false

docgetid("submit").onclick=function(){
    let errorlist=[]

    // 驗證資料 START
    if(docgetid("companyname").value==""){
        errorlist.push("\"公司名稱\"")
    }
    if(docgetid("name").value==""){
        errorlist.push("\"姓名\"")
    }
    if(docgetid("phone").value==""){
        errorlist.push("\"連絡電話\"")
    }
    if(docgetid("email").value==""){
        errorlist.push("\"電子信箱\"")
    }
    if(docgetid("content").value==""){
        errorlist.push("\"需求說明\"")
    }
    // 驗證資料 END

    if(errorlist.length==0){
        if(!isupload){
            isupload=true
            ajax("POST","/backend/project005/newconnect",function(event){
                let data=JSON.parse(event.responseText)
                if(data["success"]){
                    alert("上傳成功")
                    location.reload()
                }
            },JSON.stringify({
                "companyname": docgetid("companyname").value,
                "name": docgetid("name").value,
                "phone": docgetid("phone").value,
                "email": docgetid("email").value,
                "content": docgetid("content").value
            }))
        }
    }else{
        docgetid("error").innerHTML=`
            ${errorlist.join("、")}為必填欄位，請填寫完畢。
        `
    }
}