export function dataAjax(url,method,data=null){
	var xmlhttp;
	xmlhttp=new XMLHttpRequest()//创建XMLHttpRequest对象
	xmlhttp.open(method,url,true);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState=4&&xmlhttp.status==200){
			return xmlhttp.reponseText;
		}
	}
}