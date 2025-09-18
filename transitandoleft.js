<div id="vitor"
style="position: absolute;left: 0; top:50px;"
>VICTOR</div>
<script>
    let pos=0;
    let elemento=document.getElementById('vitor');
    let intervalo=setInterval(()=>{
      if(pos>=300){
        clearInterval(intervalo);
      }else{
        pos++;
        elemento.style.left=pos+'px';
      }
    },10);
</script>
