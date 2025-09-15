let entrada=prompt('Digite algo');
let data=new Date();
data.setTime(data.getTime()+24*60*60*1000);
let expires='expires='+data.toUTCString();
let existe=false;
let dado=entrada;
document.cookie=`meu=${dado};`+expires+';path=/';
let cookies=document.cookie.split(';');
for(let i=0;i<cookies.length;i++){
    let cookie=cookies[i].trim();
    if(cookie.startsWith('vi=')){
        existe=true;
        break;
    }
   
}
 if(existe){
        alert('ok');
    }else{
        alert('nao tem');
    }
  
