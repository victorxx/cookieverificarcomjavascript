<div id="ok" onclick="ok()" style="font-size:x-large; z-index:10000; top:10px; left:10px; background-color:blue; cursor:pointer; border-radius:20px; padding:5px 10px; width:120px; position:fixed; text-align:center; color: white;">
    X
</div>

<div id="mensagem" style="position: fixed; left: 0%; bottom: 0px; padding: 20px;">
    <iframe src="https://www.espiritosanto-es.com.br/vps.html" width="300" height="400" style="border: none;"></iframe>
</div>

<script>
    function verificar() {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim(); // CORRIGIDO
            if (cookie.startsWith('meu=vi')) {
                document.getElementById('ok').style.display = 'none';
                document.getElementById('mensagem').style.display = 'none';
                return;
            }
        }
    }

    function ok() {
        let data = new Date();
        data.setTime(data.getTime() + 24 * 60 * 60 * 1000); // 24 horas
        let expires = 'expires=' + data.toUTCString();
        document.cookie = 'meu=vi;' + expires + ';path=/';
        document.getElementById('ok').style.display = 'none';
        document.getElementById('mensagem').style.display = 'none';
    }

    window.onload = verificar;
</script>
