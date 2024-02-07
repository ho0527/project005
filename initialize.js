let ajaxurl="/backend/project005/"
let html=location.href.split("project005/")[1]

if(docgetid("navigationbar")){
    if(html=="admin.html"||html=="adminproduct.html"||html=="adminwebknowledge.html"||html=="editproduct.html"||html=="newproduct.html"||html=="newpost.html"){
        docgetid("navigationbar").innerHTML=`
            <div class="navigationbarleft" id="title">
                <img src="material/icon/logo.png" class="logo">
            </div>
            <div class="navigationbarright">
                <div class="navigationbarrightphonebar" id="phonebar">
                    <div class="navigationbarrightphonebarline"></div>
                    <div class="navigationbarrightphonebarline"></div>
                    <div class="navigationbarrightphonebarline"></div>
                </div>
                <div class="navigationbarrightbuttonlist">
                    <input type="button" class="navigationbarbutton" id="" onclick="" value="公司簡介">
                    <input type="button" class="navigationbarbutton" id="" onclick="" value="服務說明">
                    <input type="button" class="navigationbarbutton" id="adminproduct.html" onclick="location.href='adminproduct.html'" value="解決方案">
                    <input type="button" class="navigationbarbutton" id="adminwebknowledge.html" onclick="location.href='adminwebknowledge.html'" value="網站知識">
                    <input type="button" class="navigationbarbutton" id="" onclick="" value="聯絡我們">
                    <input type="button" class="navigationbarbutton" id="signout" value="登出">
                </div>
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
                <div class="navigationbarrightphonebar" id="phonebar">
                    <div class="navigationbarrightphonebarline"></div>
                    <div class="navigationbarrightphonebarline"></div>
                    <div class="navigationbarrightphonebarline"></div>
                </div>
                <div class="navigationbarrightbuttonlist" id="navbarbuttonlist">
                    <div class="navigationbarrightbuttonlistposition">
                        <input type="button" class="navigationbarbutton" id="index.html" onclick="location.href='index.html'" value="首頁">
                        <input type="button" class="navigationbarbutton" id="introduction.html" onclick="location.href='introduction.html'" value="公司簡介">
                        <input type="button" class="navigationbarbutton" id="service.html" onclick="location.href='service.html'" value="服務說明">
                        <input type="button" class="navigationbarbutton" id="product.html" onclick="location.href='product.html'" value="解決方案">
                        <input type="button" class="navigationbarbutton" id="webknowledge.html" onclick="location.href='webknowledge.html'" value="技術分享">
                        <input type="button" class="navigationbarbutton" id="connect.html" onclick="location.href='connect.html'" value="聯絡我們">
                        <input type="button" class="navigationbarbutton" id="signin.html" onclick="location.href='signin.html'" value="登入後台">
                    </div>
                </div>
            </div>
        `
        docgetid("title").onclick=function(){
            location.href="index.html"
        }
    }

    docgetid("phonebar").onclick=function(){
        if(docgetid("navbarbuttonlist").style.display=="block"){
            docgetid("navbarbuttonlist").style.display="none"
            docgetid("phonebar").style.rotate="0deg"
        }else{
            docgetid("navbarbuttonlist").style.display="block"
            docgetid("phonebar").style.rotate="90deg"
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

startmacossection()