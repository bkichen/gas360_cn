function Dsy()
{
    this.Items = {};
}
Dsy.prototype.add = function(id,iArray)
{
    this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id)
{
    if(typeof(this.Items[id]) == "undefined") return false;
    return true;
}

function change(v,Flag)
{
   if(Flag==1)
   {  
     str0 = "_ctl0:ContInfo:";
     str1 = "_ctl0_ContInfo_";
   }
   else
   {  
      str0 = "";
      str1 = "";
   } 
   var str="0";
   var ss=document.getElementById(str0+s[v]);
   with(ss)
   {
      length = 0;
      if(v && document.getElementById(str0+s[v-1]).selectedIndex>=0)
         str=document.getElementById(str0+s[v-1]).options[document.getElementById(str0+s[v-1]).selectedIndex].value;
      if(dsy.Exists(str))
      {
         ar = dsy.Items[str];
         for (i = 0; i < ar.length; i++)
         {
            var ss = ar[i].split(",");
            options[length] = new Option(ss[0], ss[1]);
         }
      }

   }
	  if(v=="1")
	  {
	     var len = document.getElementById(str0+s[v+1]).options.length;
		 for (var i=len-1;i>=0;i--)document.getElementById(str0+s[v+1]).options[i]=null;
	  }
}

var dsy = new Dsy();

dsy.add("0",["燃气调压计量装置,985","燃气调压器,990","CNG加气设备,999","LNG供气设备,1008","LPG气化设备,1015","燃气流量计,1022","燃气报警装置,1030","燃气阀门,1037","燃气切断阀、电磁阀,1048","燃烧设备,1056","防爆消防设备,1066","燃气增效剂,1072" ]);
dsy.add("985",["楼栋调压箱,986","区域调压箱柜,987","直燃式调压箱柜,988","城市门站,989" ]);
dsy.add("990",["德国RMG,991","美国FISHER,992","美国AMCO,993","英国吉文斯,994","巴西GASCAT,995","荷兰GORTER,996","国产调压器,997","意大利塔塔里尼,998" ]);
dsy.add("999",["加气柱,1000","CNG管束,1001","CNG钢瓶,1002","高压阀门,1003","燃气压缩机,1004","燃气储气井,1005","CNG加气机,1006","顺序控制,1007" ]);
dsy.add("1008",["低温泵,1009",">LNG加气机,1010","低温阀门,1011","空温气化器,1012","低温流量计,1013","低温贮罐、钢瓶,1014" ]);
dsy.add("1015",["钢瓶胶管,1016","液相切换阀,1017","气象切换阀,1018","电热式气化器,1019","空温式气化器,1020","蒸气水浴式气化器,1021" ]);
dsy.add("1022",["质量流量计,1023","靶式流量计,1024","涡轮流量计,1025","罗茨流量计,1026","液体流量计,1027","皮模式煤气表,1028" ]);
dsy.add("1030",["毒气报警器,1031","燃气报警器,1032","便携式报警器,1033","总线制报警器,1034","工业气体报警器,1035","家用燃气报警器,1036" ]);
dsy.add("1037",["拉断阀,1038","蝶阀,1039","针阀,1040","安全阀,1041","过滤阀,1042","卡套管件,1043","法兰阀门,1044","螺纹球阀,1045","法兰截止阀,1046","高压不锈钢球阀,1047" ]);
dsy.add("1048",["美国PARK,1049","意大利MADS,1050","防爆电磁阀,1051","管道机械手,1052","低温电磁阀,1053","气动紧急切断阀,1054","电动紧急切断阀,1055" ]);
dsy.add("1056",["德国扎克,1057","瑞典百通,1058","意大利利雅路,1059","意大利百得,1060","国产燃烧机,1061","法国贵诺,1062","日本正英、成田,1063","红外线燃烧器,1064","陶瓷板,1065" ]);
dsy.add("1066",["防爆灯具,1067","防爆开关,1068","防爆风扇,1069","防爆配电箱,1070","干粉灭火设备,1071" ]);
dsy.add("1072",["丙烷气增效剂,1073","液化气增效剂,1074","二甲醚增效剂,1075","天然气增效剂,1076" ]);
var s=["SortB","SortM","SortS"];
function setup(Flag)
{
   if(Flag==1)
     str0 = "_ctl0:ContInfo:";
   else
      str0 = "";
   for(i=0;i<s.length-1;i++)
   document.getElementById(str0+s[i]).onchange=new Function("change("+(i+1)+","+Flag+")");
   change(0,Flag);
}

function initialize(Flag)
{
   if(Flag==1)
   {  
     str0 = "_ctl0:ContInfo:";
     str1 = "_ctl0_ContInfo_";
   }
   else
   {  
      str0 = "";
      str1 = "";
   } 
   for(i=0;i<s.length-1;i++)document.getElementById(str0+s[i]).onchange=new Function("change("+(i+1)+","+Flag+")");
   var v="0";
   s1=document.getElementById(str1+s[0]);
   s2=document.getElementById(str1+s[1]);
   s3=document.getElementById(str1+s[2]);
   var ProvinceID=document.getElementById(str1+"txtSortB").value;
   var cityID=document.getElementById(str1+"txtSortM").value;
   var CountyID=document.getElementById(str1+"txtSortS").value;


   with(s1)
   {
      if(dsy.Exists(0))
      {
         arr = dsy.Items[0];
         for(i=0;i<arr.length;i++)
         {
            var ss = arr[i].split(",");
            options[length] = new Option(ss[0], ss[1]);
            if(options[i].value==ProvinceID)
               options[i].selected = true;
            }
         }
       };
   with(s2)
   {
      if(dsy.Exists(ProvinceID))
      {
         arr = dsy.Items[ProvinceID];
         for(i=0;i<arr.length;i++) 
         {
            var ss = arr[i].split(",");
            options[length] = new Option(ss[0], ss[1]);
            if(options[i].value==cityID)
               options[i].selected = true;
         }
      }
   };
   with(s3)
   {
      if(dsy.Exists(cityID))
      {
         arr = dsy.Items[cityID];
         for(i=0;i<arr.length;i++)
         {
            var ss = arr[i].split(",");
            options[length] = new Option(ss[0], ss[1]);
            if(options[i].value==CountyID)
               options[i].selected = true;
         }
      }
   }
}
