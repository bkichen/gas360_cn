///******************************************************    
///	FileName: Common.js
///	Action: 会员中心求购添加页面JS处理文件
///	Copyright(c)  2004-2008 网胜科技公司技术开发部
///	Writer: XYF
///	Create Date: 2008-12-17
///	Rewriter:
///	Rewrite Date:
///******************************************************  
var rightIcon="../images/websen.gif"
function isNumberContinue(str){
   var patn1 = /^[0-9_]+$/;
   var ascendNumber = 0;
   var descendNumber = 0;
   for (var i = 1; i < str.length; i++){
      if (str.charAt(i).charCodeAt() != (str.charAt(i - 1).charCodeAt() + 1)) {
         ascendNumber = 1;
         break;
      }
   }
   for (i = 0; i < (str.length - 1); i++) {
      if (str.charAt(i).charCodeAt() != (str.charAt(i + 1).charCodeAt() + 1)){
         descendNumber = 1;
         break;
      }
   }
   if (descendNumber == 0 || ascendNumber == 0) 
      return 1; 
   else 
      return 0;
}

//上传控件
if ($("txtupload")){
   $("txtupload").onclick=function(){
      var obj = document.getElementById("rowTest");
      if (!document.getElementById("ImgUrl1")){
         var img=document.getElementById("_ctl0_ContInfo_ImgUrl1").src;
      }else{
         var img = document.getElementById("ImgUrl1").value;
      }
      var txtupload=document.getElementById("txtupload");
      if(txtupload.value=="上传"){
         obj.style.display="block";
         txtupload.value="正在上传" 
      }else if(txtupload.value=="正在上传"){
         obj.style.display="none";
         txtupload.value="上传" ;
      }
   }
}

if ($("txturldz")){
   $("txturldz").onclick=function(){
      if (!$("ImgUrl")){
         var AllowExt=$("_ctl0_ContInfo_ImgUrl").src
      }else{
         var AllowExt=$("ImgUrl").src
      }
      $("txturldz").href=AllowExt;
   } 
}

function FileUPload(num){
   var file = document.frames["tag"].document.getElementById("upFile"); 
   var fileType=document.frames["tag"].document.getElementById("fileType");
   var name;
   if (num==1){
      name="ImgUrl1";
   }else{
      name="_ctl0_ContInfo_ImgUrl1";
   }
   if ($(name).value==""){
      return 1;
   }else if(!checkSuffix(file.value, fileType.value)){
      if (file.value==""){ 
         return 0;
      }else{ 
         return  2;
      }
   }else{
      return  0;
   }   
}

function checkSuffix(fileUrl, suffixs) {
   if (fileUrl == null || fileUrl.length == 0) return false;
   var idx = fileUrl.lastIndexOf(".");
   if (idx <= 0) return false;
   var suffix = fileUrl.substring(idx);
   return (suffixs.toLowerCase().indexOf(suffix.toLowerCase()) != -1);
}

//邮政
function isPostalCode(s){
   var patrn = /^[0-9]{6}$/;;
   if (!patrn.exec(s)) return false
   return true
}

//验证Email格式
function ValidateEmail(source){
   var patrn = /^[_a-zA-Z0-9\-\.]+@([\-_a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,3}$/;
   return patrn.exec(source);
}

//数值检测
function isNumber(name){ 
   if (name.length   ==   0)
      return false;
   for(i=0; i< name.length; i++){ 
      if (name.charAt(i)   <   "0"   ||   name.charAt(i)   >   "9")
         return false;
      }
      return true;
}

//数值检测
//function isNumber(name,flag){ 
//  var str="0";
//  if(name!="")
//  {
//   if (name.length   ==   0)
//      return false;
//   }
//   for(i=0; i< name.length; i++){ 
//      if (name.charAt(i)   <   "0" || name.charAt(i) > "9")
//        if(name.charAt(i) !=".")
//        {
//         str="1";
//         }
//      }
//      if(str=="1")
//         return false;
//      else
//        return true;
//}
function isValueSize(values,flag)
{   
    if(flag=="1")
    {
        var minValue=0;
        var maxValue=9999999;
        if(parseFloat(values)<parseFloat(minValue)||parseFloat(values)>parseFloat(maxValue))
          return false;
        else
            return true;
    }else{
        if(values<0||values>9999999)
            return false;
        else
            return true;
    }
}
// 手机
function checkMobile(s){   
   var regu =/^1[0-9]{10}$/;
   return regu.exec(s)
}

//空格 中文  符号
function ignoreSpaces(string) {
   var temp = "";
   var badchar  =  ';|<>`&!*(~^)-#?   :"/$=\\'+"'"; 
   var textchar;  
   string = '' + string;
   splitstring = string.split(" ");
   for (i = 0; i < splitstring.length; i++)
      temp += splitstring[i];
   if(escape(string).indexOf("%u")!=-1){      
          return 1;   
   }   
   for (var i  = 0; i< temp.length;i++)
   {   
       textchar   = temp.charAt(i);   
       if (badchar.indexOf(textchar)>= 0){   
          return 2;   
       }   
   }       
   return temp;
}

//过滤字符串
function onKeyUp(e, a) {
   e = e || event;
   if (e.keyCode != 37 && e.keyCode != 39){
      document.getElementById(a).value = document.getElementById(a).value.replace(/\D/g, '');
   }
}

function $(id){return document.getElementById(id)}

//验证
function cookie(name){    
   var cookieArray=document.cookie.split("; "); //得到分割的cookie名值对    
   var cookie=new Object();    
   for (var i=0;i<cookieArray.length;i++){    
      var arr=cookieArray[i].split("=");       //将名和值分开    
      if(arr[0]==name)return unescape(arr[1]); //如果是指定的cookie，则返回它的值    
   } 
   return ""; 
}  


//会员收藏
function SaveFavorites(){
   var ID= $("ID").value;
   var ajax=new list("","9") 
   ajax.onSuccess = function(){
      if (xmlHttp.responseText=="ok"){
         alert("提交成功");
      }
	  else{
	     alert(xmlHttp.responseText);
	  }
   }
}


/// <summary>
/// 获取模板
/// </summary>
/// <param name="parame">传递的参数</param>
/// <param name="ID">服务器处理程序</param>
/// <returns></returns>
function list(parame,ID){ 
   var thisTHost = top.location.host;
   var obj = this;
   //this.state ="d";
   this.Init = function() {	
   xmlHttp = false;
   if (window.XMLHttpRequest){     
      xmlHttp = new XMLHttpRequest();  //　非IE　浏览器
   }
   else if(window.ActiveXObject){      
      try { //IE
         xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");//较新版本的IE
       }
       catch(e){
          try{
              xmlHttp = new ActiveXOBject("Microsoft.XMLHTTP");//旧版本IE
          }
          catch(e)
          {}                    
      }
   }
   else{
      window.alert("不能创建　XMLHttpRequest对象，无法应用Ajax");
      return false;
   }
   //var url="http://192.168.0.131:8080/Control/Ajax.ashx?"
   var url="http://"+thisTHost+"/Control/Ajax.ashx?"
   url += parame+"&ID="+ID;
   xmlHttp.open("get",url,true);
   xmlHttp.onreadystatechange = function ()
   {  
      if(xmlHttp.readyState == 4){
          if(xmlHttp.status == 200){  
                obj.onSuccess();
          }    
      }
   } 
   xmlHttp.send(null);
} 

}


function DrawImage(ImgD,w,h){  
    var image=new Image();    
    image.src=ImgD.src;    
    if(image.width>0 && image.height>0){       
        if(image.width/image.height>= w/h){    
            if(image.width>w){    
                ImgD.width=w;    
            }else{    
                ImgD.width=image.width;    
                ImgD.height=image.height;    
            }   
			if(image.height>h){    
                ImgD.height=h;      
            }else{    
                ImgD.width=image.width;    
                ImgD.height=image.height;    
            }     
            ImgD.alt=image.width+"×"+image.height;  
			  
        }else{    
          
            ImgD.alt=image.width+"×"+image.height;    
        }    
    }    
} 




