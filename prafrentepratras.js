


<div id="vitor"
style="position:absolute;left: 0; top:50px">
victor</div>
<script>
    let pos=0;
    let elemento=document.getElementById('vitor');
    let direcao=1;
    let intervalo=setInterval(()=>{
     pos+=direcao;
     elemento.style.left=pos+'px';
     if(pos>=300){
        direcao=-1;

     }if(pos<=0){
        direcao=1;
     }
    },10);
</script>
