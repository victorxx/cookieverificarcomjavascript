<div id="ok" onclick="ok()" style="font-size:x-large; z-index:10000; left:0%; background-color:blue; bottom:80%; cursor:pointer; border-radius:20px; padding:2px; width:120px; position:fixed; text-align:center;">
    X
</div>

<div id="mensagem" style="position: fixed; left: 0%; bottom: 0px; padding: 20px; z-index: 20000;">
    <iframe src="https://www.espiritosanto-es.com.br/vps.html" width="300" height="400" style="border: none;"></iframe>
</div>

<script>
    // Função que verifica se o cookie existe
    function verificarCookie() {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith('meu=vi')) {
                // Esconde se o cookie existir
                document.getElementById('ok').style.display = 'none';
                document.getElementById('mensagem').style.display = 'none';
                return;
            }
        }
        // Caso o cookie não exista, mostra os elementos
        document.getElementById('ok').style.display = 'block';
        document.getElementById('mensagem').style.display = 'block';
    }

    // Função chamada ao clicar no botão
    function ok() {
        let data = new Date();
        data.setTime(data.getTime() + 24 * 60 * 60 * 1000); // 1 dia
        let expires = 'expires=' + data.toUTCString();
        document.cookie = 'meu=vi;' + expires + ';path=/';

        // Esconde os elementos imediatamente
        document.getElementById('ok').style.display = 'none';
        document.getElementById('mensagem').style.display = 'none';
    }

    // Verifica cookie ao carregar a página
    window.onload = verificarCookie;
</script>
