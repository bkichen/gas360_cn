///******************************************************??? 
///	FileName: register.js
///	Action: 会员注册页面JS处理文件
///	Copyright(c) 2004-2008 网胜科技公司技术开发部
///	Writer: XFY
///	Create Date: 2008-12-19
///	Rewriter:
///	Rewrite Date:
///******************************************************???
var rightIcon="../images/err.gif"
var rightIcons="../images/mark.gif";
var txtjbo=new  Array("txtLoginName","txtPassword","txtOldPassword","txtEmail","txtAnswer","txtLinkName","txtDepartment","txtPosition","txtMobilePhone","txtMSN","txtCompanyName","txtDealinAdd","yangzheng");
function $(id){return document.getElementById(id)}
function getobj(objName){
   if ($) {
      return eval('$("'+ objName +'")');
   }else {
      return eval('document.all["'+ objName +'"]');
   }
}

function oo(){$("yc").style.display="none"}

//得到焦点
for(var i=0;i<txtjbo.length;i++){ 
   $(txtjbo[i]).onfocus =function (){
      for (var j=0;j<txtjbo.length;j++){
         if (txtjbo[j]==event.srcElement.id){postobj(j);}
      }
   }
}

function postobj(num){
   obj = "lbl_"+txtjbo[num];
   $(obj).innerHTML =ZeXs[num];
}


function init()
{
}
//失去焦点
for(var i=0;i<txtjbo.length;i++){ 
   $(txtjbo[i]).onblur =function (){
      for(var j=0;j<txtjbo.length;j++){
         if (txtjbo[j]==event.srcElement.id){postob(j);}
      }
   }
}

function postob(num){
   $(txtjbo[num]).value=$(txtjbo[num]).value.replace(/\s/g,'');
   obj = "lbl_"+txtjbo[num];
   if ($(obj).innerHTML!=""){
      $(obj).innerHTML=""
   }else {
      $(obj).innerHTML=ok;
   }
}

///用户
 $("txtLoginName").onblur =function (){
   chkname("lbl_txtLoginName",$("txtLoginName"))
 }
 
///邮箱 
$("txtEmail").onblur=function(){
if(document.getElementById("txtEmail").value!="")
   {
      if(document.getElementById("txtEmail").value.indexOf(" ")!=-1)
      {
            document.getElementById("lbl_txtEmail").innerHTML="<img src="+rightIcon+" align=\"absmiddle\"><font color=#FF0000>电子邮件格式不正确</font>";
             return false;
      }
      else
       {
           
            chkEmail("lbl_txtEmail",$("txtEmail"))
           
       }
   }else{
         document.getElementById("lbl_txtEmail").innerHTML="<img src="+rightIcon+" align=\"absmiddle\"><font color=#FF0000>电子邮件不能为空</font>";
   }
}





///邮箱 
$("txtOldPassword").onblur=function (){
    txtOldPassword()
}

//提交
$("btnSave").onclick=function (){

   var txtbernem=new Array()
   txtbernem[0]=txtLoginName()                    //用户名称
   txtbernem[1]=txtPassword()                     //密码
   txtbernem[2]=txtOldPassword()                  //确认密码
   txtbernem[3]=txtEmail()                        //邮箱
   txtbernem[4]=true    //dropQuestion()          //提示问题
   txtbernem[5]=txtname("lbl_txtAnswer",4)        //提示答案
   txtbernem[6]=txtname("lbl_txtLinkName",5)      //真实姓名
   txtbernem[7]=txtname("lbl_txtDepartment",6)    //部门
   txtbernem[8]=txtname("lbl_txtPosition",7)      //职位
   txtbernem[9]=FixedTelephone()                  //电话
   txtbernem[10]=Telefacsimile()                  //传真
   txtbernem[10]=true;
   txtbernem[11]=txtMobilePhone()                 //手机
   txtbernem[12]=true;   //txtMSN()               //MSN
   txtbernem[13]=txtCompanyName()                 //公司名称
   txtbernem[14]=Area()                           //地区
   txtbernem[15]=txtname("lbl_txtDealinAdd",11)   //经营地址
   txtbernem[16]=yangzheng()   // yangzheng()             //验证码
   var flag=-1;
   for (i=0;i<=16;i++){
      if (txtbernem[i]==false){
         flag= flag+" " + i;
      }
   } 
   if(flag.length > 2 ){
     window.location.href="#flagKeyword";
     return false;
   }else{
     return true;
   }
   var error=0;
   if ($("SortB").selectedIndex == -1) {
	         document.getElementById("txt02").innerHTML = "<img src="+rightIcon+" align=\"absmiddle\"> <font color=#FF0000>请选择所属行业和产品类目！</font>";
	         error=1;
    }
   if(document.getElementById("txtEmail").value!="")
   {
      if(document.getElementById("txtEmail").value.indexOf(" ")!=-1)
      {
            document.getElementById("lbl_txtEmail").innerHTML="<img src="+rightIcon+" align=\"absmiddle\"><font color=#FF0000>电子邮件格式不正确</font>";
            error=1;
      }
   }else{
         document.getElementById("lbl_txtEmail").innerHTML="<img src="+rightIcon+" align=\"absmiddle\"><font color=#FF0000>电子邮件不能为空</font>"; 
         error=1;
        }
   if(error!=0)
   {
    window.location.href="#flag";
     return false;
   }else{
      document.getElementById("lbl_txtEmail").innerHTML="";
      document.getElementById("txt02").innerHTML="";
   }
}

//方法会员名称
function txtLoginName(){ 
   if ($(txtjbo[0]).value.replace(/\s/g,'')==""){
      $("lbl_txtLoginName").innerHTML=ZuCe[0];
      return false;
   }else if ($(txtjbo[0]).value.length < $("HidminName").value || $(txtjbo[0]).value.length > $("HidmaxName").value){
      $("lbl_txtLoginName").innerHTML=ZuCe[15];
     return false ;
   }//else if (ignoreSpaces($(txtjbo[0]).value.replace(/\s/g,''))==1||ignoreSpaces($(txtjbo[0]).value.replace(/\s/g,''))==2){
      //$("lbl_txtLoginName").innerHTML=ZuCe[16];
      //return false;
 //}
   else if ($("Lname").value.replace(/\s/g,'')=="1" ||$("Lname").value.replace(/\s/g,'')==""){
      $("lbl_txtLoginName").innerHTML=ZuCe[17];
      return false;
   } else {
      $("lbl_txtLoginName").innerHTML=ok;
      return true;
  }
}

//会员重名
function chkname(obj,Name){
    $(obj).innerHTML = "检测中，请稍候……";
    var ajax = new list("name="+Name.value,"0");
    ajax.onSuccess = function(){
        $(obj).innerHTML =xmlHttp.responseText;
        if(xmlHttp.responseText=="1"){
            $(obj).innerHTML=ZuCe[17];
            $("Lname").value="1";
        }else if (xmlHttp.responseText=="2"){
            $(obj).innerHTML=ZuCe[0];
            //$(obj).innerHTML="";
            $("Lname").value="2";
        }else if(Name.value.length<$("HidminName").value || Name.value.length>$("HidmaxName").value){
            $(obj).innerHTML=ZuCe[15]
        }
//        else if (ignoreSpaces(Name.value)==1||ignoreSpaces(Name.value)==2){
//            $("lbl_txtLoginName").innerHTML=ZuCe[16];
//        }
        else if(xmlHttp.responseText=="0"){
            $("Lname").value="0";
            $(obj).innerHTML="该会员名可以注册";
        }
    }
    ajax.Init();   
}

//密码
function txtPassword(){
   if($(txtjbo[1]).value.replace(/\s/g,'')==""){
      $("lbl_txtPassword").innerHTML=ZuCe[1]
      return false
   }else if ($(txtjbo[1]).value.length<=5){
      $("lbl_txtPassword").innerHTML=ZuCe[18]
      return false
   }else if($(txtjbo[1]).value.replace(/\s/g,'')==$(txtjbo[0]).value.replace(/\s/g,'')){
      $("lbl_txtPassword").innerHTML=ZuCe[19]
      return false
   }else if(isNumberContinue($(txtjbo[1]).value.replace(/\s/g,'')) == 1){
      $("lbl_txtPassword").innerHTML=ZuCe[20]
      return false
   }else{
      $("lbl_txtPassword").innerHTML=ok
      return true
   }
}

//密码2
function txtOldPassword(){
   if ($(txtjbo[2]).value.replace(/\s/g,'')==""){
      $("lbl_txtOldPassword").innerHTML=ZuCe[2]
      return false
   }else if ($(txtjbo[2]).value.replace(/\s/g,'')!=$(txtjbo[1]).value.replace(/\s/g,'')){
      $("lbl_txtOldPassword").innerHTML=ZuCe[21]
      return false
   }else{
      $("lbl_txtOldPassword").innerHTML=ok;return true
   }
}

//邮箱
function txtEmail(){
   if ($(txtjbo[3]).value.replace(/\s/g,'')==""){
      $("lbl_txtEmail").innerHTML=ZuCe[3]
      return false
   }else if(!ValidateEmail($(txtjbo[3]).value.replace(/\s/g,''))){
      $("lbl_txtEmail").innerHTML=ZuCe[22]
      return false
   }else if ($("Lemail").value.replace(/\s/g,'')=="1"){
      $("lbl_txtEmail").innerHTML=ZuCe[23]
      return false
   }else{
      $("lbl_txtEmail").innerHTML=ok
      return true
   }
}

//邮箱重名
function chkEmail(obj,Name){
    if($("hidEmail").value!="1"){
        if(!ValidateEmail($(txtjbo[3]).value.replace(/\s/g,''))){
            $("lbl_txtEmail").innerHTML=ZuCe[22]
            return false;
        }else{
            $("lbl_txtEmail").innerHTML="<font color=#999999>邮件符合规范！</font>"
            return true;
        }
    }else{
        $(obj).innerHTML = "检测中，请稍候……";
        var ajax = new list("name="+Name.value,"1");
        ajax.onSuccess = function(){       
            $(obj).innerHTML =xmlHttp.responseText;  
            if(xmlHttp.responseText=="2"){
                $(obj).innerHTML=ZuCe[3];
                $("Lemail").value="2";
            }else if(xmlHttp.responseText=="3"){
                $(obj).innerHTML=ZuCe[22];
                $("Lemail").value="3";
            }else if(xmlHttp.responseText=="1"){
                $(obj).innerHTML=ZuCe[23]+"sdf";
                $("Lemail").value="1";
            }else{
                $("Lemail").value="0";
                $(obj).innerHTML=ok;
            }        
        } 
        ajax.Init();
    }     
}

//提示问题
function dropQuestion(){
   if ($("dropQuestion").options.selectedIndex == 0){
      $("lbl_dropQuestion").innerHTML =ZuCe[32];
      return false
   }else{
      $("lbl_dropQuestion").innerHTML=ok
      return true
   }
}

//提示答案//真实名字//部门//职位 
function txtname(obj,num){
   if ($(txtjbo[num]).value.replace(/\s/g,'')==""){
      $(obj).innerHTML=ZuCe[num]
      return false
   }else{
      $(obj).innerHTML=ok
      return true
   }
}

//固定电话
function FixedTelephone(){
   var Tel3=$("txtTel_Telephone") 
   var Tel2=$("txtTel_DistrictNumber")
   var Tel1=$("txtTel_International")
   if(Tel1.value==""|| Tel2.value==""||Tel3.value==""){
      $("lbl_txtTel_1234").innerHTML=ZuCe[13];
      return false
   }else if(Tel1.value=="86"&&(Tel2.value.length==3||Tel2.value.length==4||Tel2.value.length==5 )&&(Tel3.value.length==7||Tel3.value.length==8)){
      $("lbl_txtTel_1234").innerHTML=ok
      return true
   }else{
      $("lbl_txtTel_1234").innerHTML=ZuCe[26]
      return false
   }
}

//传真
function Telefacsimile(){
    var Fax1=$("txtFax_International")
    var Fax2=$("txtFax_DistrictNumber")
    var Fax3=$("txtFax_Telephone")
    if (Fax1.value!=""&&Fax2.value!=""&&Fax3.value!=""){
        if (Fax1.value=="86"&&(Fax2.value.length<=4||Fax2.value.length>=5)&&(Fax3.value.length==7||Fax3.value.length==8)){
            $("lbl_txtFax_1234").innerHTML=ok;
            return true
        }else{
            $("lbl_txtFax_1234").innerHTML=ZuCe[24];
            return false
        }
    }else{
        $("lbl_txtFax_1234").innerHTML="";
        return true;
    }
    return true;
}

//手机
function txtMobilePhone(){
   if ($(txtjbo[8]).value!=""){
      if(!checkMobile($(txtjbo[8]).value)){
         $("lbl_txtMobilePhone").innerHTML=ZuCe[25];
         return false
      }else{
         $("lbl_txtMobilePhone").innerHTML=ok;
         return true
      }  
   }else{
      $("lbl_txtMobilePhone").innerHTML="";
      return true
   }
}

//MSN 
function txtMSN(){
   if($(txtjbo[9]).value!=""){ 
      if (!ValidateEmail($("txtMSN").value)){
         $("lbl_txtMSN").innerHTML=ZuCe[27]+ZeXs[9];
         return false
      }else{
         $("lbl_txtMSN").innerHTML=ok;
         return false
      } 
   }else{
      $("lbl_txtMSN").innerHTML="";return true
   }
}

//公司名称
function txtCompanyName(){
   var firstCode = $(txtjbo[10]).value.substring(0, 1);
   var exp = new RegExp(firstCode, "ig");
   if ($(txtjbo[10]).value.replace(/\s/g,'')==""){
      $("lbl_txtCompanyName").innerHTML=ZuCe[10]
      return false
   }else if(isNumberContinue($(txtjbo[10]).value.replace(/\s/g,''))==1){
      $("lbl_txtCompanyName").innerHTML=ZuCe[28]
      return false
   }else if ($(txtjbo[10]).value.replace(/\s/g,'').match(exp) && $(txtjbo[10]).value.replace(/\s/g,'').match(exp).length == $(txtjbo[10]).value.length) {
      $("lbl_txtCompanyName").innerHTML=ZuCe[29]
      return false 
   }else{
      $("lbl_txtCompanyName").innerHTML=ok;
      return true
   }
}

//公司地址//显示地区
function xinshi() {
   var obj =$("lbl_diqu");
   var rowTest0 = $("country"); 
   var rowTest1 = $("province");
   var rowTest2 = $("city");
   var rowTest3 = $("county");
   if (rowTest0.options[rowTest0.selectedIndex].value != "中国") {
      obj.innerHTML = "<font color=#999999>" + rowTest0.value + "</font>"
   }else if (rowTest1.options.selectedIndex == 0) {
      obj.innerHTML = ""
   }else {
      obj.innerHTML = "<font color=#999999>" + rowTest0.options[rowTest0.selectedIndex].text + "-" + rowTest1.options[rowTest1.selectedIndex].text + "-" + rowTest2.options[rowTest2.selectedIndex].text + "-" + rowTest3.options[rowTest3.selectedIndex].text + "</font>"
   }
   ob_diqu();
}

function ob_diqu() {
   if ($("country").options[$("country").selectedIndex].value == "中国"){
      if ($("province").options.selectedIndex == 0) {
         $("lbl_gjdq").innerHTML = ""
         return false
      }else if ($("city").options.selectedIndex == 0) {
         $("lbl_gjdq").innerHTML = ""
         return false
      }else if ($("county").options.selectedIndex == 0) {
         $("lbl_gjdq").innerHTML = ""
         return false
      }else {
         $("lbl_gjdq").innerHTML = ok;
         return true; 
      }
   }else {
      $("lbl_gjdq").innerHTML = ok;
      return true; 
   }
}

$("country").onchange=function (){
   Region();
   Area();
   xinshi();
}

$("province").onclick=function (){
   Area();
   xinshi();
}

$("province").onclick=function(){
   xinshi();
}

$("city").onclick=function(){
   xinshi();
}
$("county").onclick=function(){
   xinshi();
}

function Region(){
   var country=$("country").options[$("country").selectedIndex].value;
   if(country!="中国"){
      $("province").selectedIndex = 0;
      $("city").selectedIndex = 0;
      $("county").selectedIndex = 0;
      $("province").style.display = 'none';
      $("city").style.display = 'none';
      $("county").style.display = 'none';
   }else{
      $("province").style.display = '';
      $("city").style.display = '';
      $("county").style.display = '';
   }
}

function Area(){
   if ($("country").options[$("country").selectedIndex].value == "中国"){
      if ($("province").options.selectedIndex == 0 && $("city").options.selectedIndex == 0 && $("county").options.selectedIndex == 0 ){
         $("lbl_gjdq").innerHTML = ZuCe[30];
         return false;
      }else {
         $("lbl_gjdq").innerHTML = ok;
         return true; 
      }
   }else{
      $("lbl_gjdq").innerHTML = ok;
      return true; 
   }
}

//验证码
function yangzheng(){
   if (($(txtjbo[12]).value.replace(/\s/g,'')).toUpperCase() == cookie("CheckCode")){
      $("lbl_yangzheng").innerHTML = ok;
      return true;
   }else {
      $("lbl_yangzheng").innerHTML = ZuCe[31];
      return false;
   }
}

//提交处理
var titleZclon="<p><img src="+rightIcon+" align=\"absmiddle\"> <font color=#FF0000>";
var titleZclons="</font></p>"
var ZuCe=new Array()
ZuCe[0]=titleZclon+"用户名不能为空，请重新设置用户名！"+titleZclons
ZuCe[1]=titleZclon+"密码不能为空，请重新设置密码！"+titleZclons
ZuCe[2]=titleZclon+"确认密码不能为空，请重新设置重复密码！"+titleZclons
ZuCe[3]=titleZclon+"确认电子邮箱不能为空，请重新设置电子邮箱！"+titleZclons
ZuCe[4]=titleZclon+"确认提示答案不能为空，请重新设置提示答案！"+titleZclons
ZuCe[5]=titleZclon+"确认真实姓名不能为空，请重新设置真实姓名！"+titleZclons
ZuCe[6]=titleZclon+"确认部门不能为空，请重新设置部门！"+titleZclons
ZuCe[7]=titleZclon+"确认职位不能为空，请重新设置职位！"+titleZclons
ZuCe[8]=titleZclon+"确认手机不能为空，请重新设置户名！"+titleZclons
ZuCe[9]=titleZclon+"确认MSN不能为空，请重新设置户名！"+titleZclons
ZuCe[10]=titleZclon+"确认公司名称不能为空，请重设置公司名称！"+titleZclons
ZuCe[11]=titleZclon+"确认经营地址不能为空，请重设置经营地址！"+titleZclons
ZuCe[12]=titleZclon+"确认验证码不能为空，请重新设置验证码！"+titleZclons
ZuCe[13]=titleZclon+"确认固定电话不能为空，请重新设置固定电话！"+titleZclons
ZuCe[14]=titleZclon+"确认验证码不能为空，请重新设置验证码！"+titleZclons
ZuCe[15]=titleZclon+"用户名不能小于"+ ($("HidminName").value) +"位或是大于"+($("HidmaxName").value)+"位字符"+titleZclons
ZuCe[16]=titleZclon+"用户名不能包含中文或是特殊符号"+titleZclons
ZuCe[17]=titleZclon+"该用户名已存在！"+titleZclons
ZuCe[18]=titleZclon+"密码长度不能小于6，请重新设密码！"+titleZclons
ZuCe[19]=titleZclon+"为安全起见，密码不能与会员登录名相同！"+titleZclons
ZuCe[20]=titleZclon+"为安全起见，密码不能用同一个数字或字母以及相连的数字或字母"+titleZclons
ZuCe[21]=titleZclon+"密码与确认密码输入不一致，请重新设置密码！"+titleZclons
ZuCe[22]=titleZclon+"输入不符合规范 格式如下:b2b@websen.com！"+titleZclons
ZuCe[23]=titleZclon+"邮箱重名，请重新设置邮箱"+titleZclons
ZuCe[24]=titleZclon+"确认传真输入有误，请重新设置传真！"+titleZclons
ZuCe[25]=titleZclon+"确认手机输入错误，请重新设置手机！"+titleZclons
ZuCe[26]=titleZclon+"确认固定电话输入有误，请重新设置固定电话！"+titleZclons
ZuCe[27]=titleZclon+"确认MSN输入有误,请重新设置MSN!"+titleZclons
ZuCe[28]=titleZclon+"公司名称错误，公司名称不能用连续的字符或完全使用数字表示!"+titleZclons
ZuCe[29]=titleZclon+"公司名称不能用相同的字符表示，请重新设置公司名称！"+titleZclons
ZuCe[30]=titleZclon+"确认地区选择有误,请重新设置公司地址！"+titleZclons
ZuCe[31]=titleZclon+"确认验证码不符合规范，请重新设置验证码！"+titleZclons
ZuCe[32]=titleZclon+"请请选择提示问题！"+titleZclons
var ok="<font color=#999999>输入符合规范</font>";
//提示 
var ok="<font color=#999999>输入符合规范</font>"
var title="<p><img src="+rightIcons+" border=\"0\">";
var titles="</p>"
var ZeXs=new Array()
ZeXs[0]=title+"会员登录名只能由"+($("HidminName").value) + "-"+($("HidmaxName").value)+"个英文字母和数字组成"+titles;
ZeXs[1]=title+"密码为6到20位字符或数字"+titles;
ZeXs[2]=title+"请再输入一遍您上面填写的密码"+titles;
ZeXs[3]=title+"请务必填写真实邮箱,并确认是您最常用的电子邮件"+titles;
ZeXs[4]=title+"请输入密码提示答案"+titles;
ZeXs[5]=title+"请输入真实的姓名"+titles;
ZeXs[6]=title+"请输入你所在的部门"+titles;
ZeXs[7]=title+"请输入你所担任的职位"+titles;
ZeXs[8]=title+"格式如下:13*********"+titles;
ZeXs[9]="<a href='https://accountservices.passport.net/reg.srf?id=9&cbid=956&sl=1&lc=2052' target=_blank><font color=#999999>注册MSN</font></a>";
ZeXs[10]=title+"请输入你的公司名称"+titles;
ZeXs[11]=title+"请输入你的经营的地址"+titles;
ZeXs[12]=title+"请输入验证码"+titles;
ZeXs[13]=title+"国家代码－区号－电话号码-分机(非必填)"+titles;

