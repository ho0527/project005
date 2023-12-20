let html=location.href.split("project005/")[1]

if(docgetid("navigationbar")){
    if(html=="admin.html"||html=="adminproduct.html"||html=="adminwebknowledge.html"||html=="newproduct.html"||html=="newpost.html"){
        docgetid("navigationbar").innerHTML=`
            <div class="navigationbarleft" id="title">
                <img src="material/icon/logo.png" class="logo">
            </div>
            <div class="navigationbarright">
                <input type="button" class="navigationbarbutton" id="" onclick="" value="公司簡介">
                <input type="button" class="navigationbarbutton" id="" onclick="" value="服務說明">
                <input type="button" class="navigationbarbutton" id="adminproduct.html" onclick="location.href='adminproduct.html'" value="解決方案">
                <input type="button" class="navigationbarbutton" id="adminwebknowledge.html" onclick="location.href='adminwebknowledge.html'" value="網站知識">
                <input type="button" class="navigationbarbutton" id="" onclick="" value="聯絡我們">
                <input type="button" class="navigationbarbutton" id="signout" value="登出">
            </div>
        `
        docgetid("title").onclick=function(){
            location.href="admin.html"
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
    }else{
        docgetid("navigationbar").innerHTML=`
            <div class="navigationbarleft" id="title">
                <img src="material/icon/logo.png" class="logo">
            </div>
            <div class="navigationbarright">
                <input type="button" class="navigationbarbutton" id="" onclick="" value="公司簡介">
                <input type="button" class="navigationbarbutton" id="" onclick="" value="服務說明">
                <input type="button" class="navigationbarbutton" id="product.html" onclick="location.href='product.html'" value="解決方案">
                <input type="button" class="navigationbarbutton" id="webknowledge.html" onclick="location.href='webknowledge.html'" value="網站知識">
                <input type="button" class="navigationbarbutton" id="connect.html" onclick="location.href='connect.html'" value="聯絡我們">
                <input type="button" class="navigationbarbutton" id="signin.html" onclick="location.href='signin.html'" value="登入後台">
            </div>
        `
        docgetid("title").onclick=function(){
            location.href="index.html"
        }
    }
    if(docgetid(html)){
        docgetid(html).onclick=function(){
            location.reload()
        }
        docgetid(html).classList.add("navigationbarselect")
    }
}

if(docgetid("footer")){
    docgetid("footer").innerHTML=`
        <div class="footertopdiv">
            <div class="footertop">
                <img src="material/icon/logo.png" class="footerlogo">
            </div>
            <div class="footertop">
                <img src="material/picture/line.png" class="footericon">
                wang00123
            </div>
            <div class="footertop">
                <img src="material/picture/mail.png" class="footericon">
                clelerver@gmail.com
            </div>
            <div class="footertop">
                <img src="material/picture/phone.png" class="footericon">
                0912252136
            </div>
        </div>
        <div class="footerbottom">
            統一編號: 94313069<br>
            Copyright &copy; 2023 clelervr. All Rights Reserved.
        </div>
    `
}