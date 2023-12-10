signin(
    submitfunction=function(){
        ajax("POST","/backend/project005/signin/",function(event){
            let data=JSON.parse(event.responseText)
            if(data["success"]){
                weblsset("project005token",data["data"])
                alert("登入成功")
                location.href="admin.html"
            }else{
                alert("登入失敗: "+data["data"])
            }
        },JSON.stringify({
            "username": docgetid("username").value,
            "password": docgetid("password").value
        }))
    },
    navbar=`
        <div class="navigationbar" id="navigationbar">
            <div class="navigationbarleft" id="title">
                <img src="/website/material/icon/mainicon.png" class="logo">
                <div class="maintitle">貝爾網站</div>
            </div>
            <div class="navigationbarright">
                <input type="button" class="navigationbarbutton" value="公司簡介">
                <input type="button" class="navigationbarbutton" value="服務說明">
                <input type="button" class="navigationbarbutton" value="作品實績">
                <input type="button" class="navigationbarbutton" onclick="location.href='webknowledge.html'" value="網站知識">
                <input type="button" class="navigationbarbutton" value="聯絡我們">
                <input type="button" class="navigationbarbutton navigationbarselect" onclick="location.href='signin.html'" value="登入後台">
            </div>
        </div>
    `,
    center=`
        <div class="main" id="loginmain">
            <div class="iconinputdiv">
                <div class="iconinputtext">帳號:</div>
                <input type="text" class="iconiinputinput input" id="username">
                <div class="iconinputicondiv"><img src="/website/material/icon/user.svg" class="iconinputicon" draggable="false"></div>
            </div>
            <div class="iconinputdiv">
                <div class="iconinputtext">密碼:</div>
                <input type="password" class="iconiinputinput input" id="password">
                <div class="iconinputicondiv"><img src="/website/material/icon/eyeclose.svg" class="iconinputicon cursor_pointer" id="passwordicon" draggable="false"></div>
            </div>
            <input type="button" class="button" id="signup" value="註冊">
            <input type="button" class="button" id="submit" value="登入"><br>
        </div>
    `,
    footer=``
)

docgetid("signup").onclick=function(){
    ajax("POST","/backend/project005/signup/",function(event){
        let data=JSON.parse(event.responseText)
        if(data["success"]){
            weblsset("project005token",data["data"])
            alert("註冊成功")
            location.href="admin.html"
        }else{
            alert("註冊失敗: "+data["data"])
        }
    },JSON.stringify({
        "username": docgetid("username").value,
        "password": docgetid("password").value
    }))
}

docgetid("title").onclick=function(){
    location.href="index.html"
}

startmacossection()