<div id="mensagem">


    https://www.youtube.com
</div>

<script>
    window.onload = function () {
        let corpo = document.getElementById('mensagem').textContent.trim();

        if (corpo.startsWith('https://')) {
            let criar = document.createElement('a');
            criar.href = corpo;
            criar.textContent = corpo;
            criar.target = "_blank"; // Abre em nova aba
            criar.style.color = "blue"; // (opcional) estilo visual

            // Substitui o conteúdo antigo pelo link clicável
            let container = document.getElementById('mensagem');
            container.innerHTML = ''; // limpa o conteúdo anterior
            container.appendChild(criar);
        }
    }
</script>
