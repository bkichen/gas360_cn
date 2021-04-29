


// 获取关键词
function AjaxSearch(obj,Name)
{

    var ajax = new list("","<book>"+Name+"</book>","10");   
    ajax.onSuccess =function() {

      document.getElementById("search_result").innerHTML =xmlHttp.responseText;     
   }
   ajax.Init();
}

function checkCookieExist(){ 
    if(cookie("LoginName")!=""&&cookie("LoginName")!=null){
        document.getElementById("loginName").innerHTML = "<div style='margin-top:5px;'>您好" + cookie("LoginName") + ", <a href='/member/index.aspx'><span style='color:red;'>我的商务中心</span></a>&nbsp;&nbsp;<a href=\"/Login/Logout.aspx\" onclick='delCookie(\"LoginName\")'>[退出]</a></div>";
    } else {
        //document.getElementById("loginName").innerHTML="您好,欢迎您的光临&nbsp;&nbsp;<a href=\"/login/login.aspx\" target=\"_blank\">[请登录]</a>&nbsp;&nbsp;<a href=\"/login//login/register.aspx\" target=\"_blank\">[免费注册]</a>";
        document.getElementById("loginName").innerHTML = "<form id=\"UserLogin\" method=\"post\" action=\"/Default.aspx\">用户名：<input type='text'  name=\"UserName\" style=\"WIDTH: 100px; HEIGHT: 14px\" maxlength=\"20\"/>&nbsp;&nbsp;密码：<input  name=\"Password\" type=\"password\" style=\"WIDTH: 100px; HEIGHT: 14px\" maxlength=\"20\"/>&nbsp;&nbsp;<input name=\"submit\" type=\"image\" src=\"/Templates/blue2/image/index_05.jpg\" /></form>";
   }
} 
 
function tabit(id,cid) {
biz_tit1.className="tagsbutton2";biz_tit2.className="tagsbutton2";id.className="tagsbutton lanktitle";
biz_1.style.display="none";biz_2.style.display="none";cid.style.display="block";
}

function cookie(name){    
   var cookieArray=document.cookie.split("; "); //得到分割的cookie名值对    
   var cookie=new Object();    
   for (var i=0;i<cookieArray.length;i++){    
      var arr=cookieArray[i].split("=");       //将名和值分开    
      if(arr[0]==name)return unescape(arr[1]); //如果是指定的cookie，则返回它的值    
   } 
   return ""; 
}  
 
function delCookie(name)//删除cookie
{
   document.cookie = name+"=;path=/;expires="+(new Date(0)).toGMTString();
}

//新闻Digg
function AjaxDigg(strType,strID){
    if(getCookie("WebDigg")==strID)
    {
        alert("您已经评论过")
        return false;
    }
    var str="<book>";
    str +="<mode>"+strType+"</mode>";
    str +="<id>"+strID+"</id>";
    str +="</book>"
    var ajax = new list("",str ,"6");   
    ajax.onSuccess =function() {            
        if(strType=="up"){
            document.getElementById("up").innerHTML="已顶过";
	        addCookie("WebDigg",strID,"1")
            document.getElementById("CountUp").innerHTML= ++document.getElementById("CountUp").innerHTML; 
        }else{
            document.getElementById("down").innerHTML="已踩过";
	        addCookie("WebDigg",strID,"1")
            document.getElementById("CountDown").innerHTML= ++document.getElementById("CountDown").innerHTML;  
        }
    }
    ajax.Init();
}



///**********************************新闻评论*****************************************************
function save(){
    if(getCookie("wbrefer")==document.getElementById("newsid").value){
        window.alert("您不是已经提交过了嘛！");
		document.getElementById("userName").focus();
		return;
    } 
	if (document.getElementById("userName").value=="" && document.getElementById("hasName").checked == false) {
		window.alert("请输入用户名!");
		document.getElementById("userName").focus();
		return;
	}
	if (document.getElementById("fcontent").value=="") {
		window.alert("请输入内容!");
		$("fcontent").focus();
		return ;
	}
	// $("Result").innerHTML="提交成功";
   //	document.getElementById("myform").submit(); 
    //异步提交数据

	//var str="<book><name>"+$("userName").value +"</name><pass>"+ $("fcontent").value+"</pass></book>"
	var str="<book>";
	str +="<typeid>"+document.getElementById("newsid").value+"</typeid>";
	str +="<name>"+document.getElementById("userName").value +"</name>";
	str +="<info>"+ document.getElementById("fcontent").value+"</info>";
	str +="</book>";
	var ajax = new list("",str,"8");  
    ajax.onSuccess = function(){
        if (xmlHttp.responseText=="ok"){
          // $("Result").innerHTML="提交成功";
          alert("评论成功");
          //document.cookie  = "wbrefer=1";
          addCookie("wbrefer",document.getElementById("newsid").value,"1")
        }
		else{
		   // $("Result").innerHTML=="提交成功";
		   alert("评论");
	    }
    }
      ajax.Init();
}

function getCookie(objName){//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++){
        var temp = arrStr[i].split("=");
        if(temp[0] == objName) return unescape(temp[1]);
   } 
}

function addCookie(objName,objValue,objHours){      //添加cookie
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){                               //为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
   }
   document.cookie = str;
}


function checkclick(){
	if(document.getElementById("hasName").checked==true){
		document.getElementById("userName").value="匿名用户"
	}
	else{
		document.getElementById("userName").value=""
	}
}

function checkSMSMessage(){  
    var content=document.getElementById("fcontent").value;
	document.getElementById("leaveCount").innerText=120-content.length;
		if (content.length>=120){ 
			document.getElementById("fcontent").value=content.substring(0,120); 
		} 
}

function setLeaveCount(){
   window.setTimeout('checkSMSMessage()', 100);
}

///**********************************END**************************************************


/// <summary>
/// 获取模板
/// </summary>
/// <param name="parame">传递的参数</param>
/// <param name="ID">服务器处理程序</param>
/// <returns></returns>
function list(parame,xmldom,ID){ 
   
    // 判断浏览器的类型
    if(document.implementation && document.implementation.createDocument)
    {        
        // 支持Mozilla浏览器
        try
        {
            var oParser = new DOMParser();
            var xmlDoc = oParser.parseFromString(xmldom,"text/xml");
        }
        catch(e)
        {
            alert("error:001");
        }
    }
    else if(typeof window.ActiveXObject != 'undefined')
    {        
        //var xmlDoc=Server.CreateObject("Msxml2.DOMDocument.4.0");        
        // 支持IE浏览器
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM'); 
        xmlDoc.async = false;
        xmlDoc.loadXML(xmldom);
    }
    else
    {
        alert("Browser unknown!");
    }
    var  thisTHost = top.location.host;
    var obj = this;
    this.Init = function() {	
        xmlHttp = false;
        if (window.XMLHttpRequest){     
            xmlHttp = new XMLHttpRequest();  //　非IE　浏览器
             if(!xmlHttp){
                alert("创建 XMLHttpRequest 对象失败!"); 
             }
        }
        else if(window.ActiveXObject){      
            try { //IE
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");//较新版本的IE
            }
            catch(e){
                try{
                    xmlHttp = new ActiveXOBject("Microsoft.XMLHTTP");//旧版本IE
                }
                catch(e){
                    //alert("error:002");
                }                    
         }
      }
      else{
         window.alert("不能创建　XMLHttpRequest对象，无法应用Ajax");
         return false;
      }
      var url="http://"+thisTHost+"/Control/Ajax.ashx?"
      url += parame+"&ID="+ID;
      xmlHttp.open("POST",url,false);
      xmlHttp.onreadystatechange = function ()
      {  
         if (xmlHttp.readyState == 4){
             if (xmlHttp.status==200){
                obj.onSuccess();
             }
         }
      } 
      xmlHttp.send(xmlDoc);
   } 
}



function insert_page(tag,id){   
    var myField; 
    myField = document.getElementById(id); 
    if (document.selection) { 
        myField.focus(); 
        sel = document.selection.createRange(); 
        sel.text = tag; 
        myField.focus(); 
    }else if (myField.selectionStart || myField.selectionStart == '0') { 
        var startPos = myField.selectionStart; 
        var endPos = myField.selectionEnd; 
        var cursorPos = endPos; 
        myField.value = myField.value.substring(0, startPos) 
            + tag 
            + myField.value.substring(endPos, myField.value.length); 
        cursorPos += tag.length; 
        myField.focus(); 
        myField.selectionStart = cursorPos; 
        myField.selectionEnd = cursorPos; 
    }else { 
        myField.value += tag; 
        myField.focus(); 
    } 
}