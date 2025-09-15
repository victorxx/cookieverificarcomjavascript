<!-- Botão de fechar -->
<div id="x" onclick="oi()" style="position: fixed; top: 130px; left: 5px; background-color: red; color: white; padding: 10px; cursor: pointer; z-index: 1001; width=120px;">
  x
</div>

<!-- Conteúdo fixo na tela -->
<div id="mensagem" style="position: fixed; bottom: 20px; left: 5px; z-index: 1000;">
  <iframe src="https://www.espiritosanto-es.com.br/vps.html" width="300" height="400" style="border: none;"></iframe>
</div>

<script>
  // Verifica se o cookie já existe
  let cookies = document.cookie.split(';');
  let existe = false;
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith('meu=okçs')) {
      existe = true;
      break;
    }
  }

  // Se o cookie existir, oculta tudo
  if (existe) {
    document.getElementById('x').style.display = 'none';
    document.getElementById('mensagem').style.display = 'none';
  }

  // Função ao clicar no botão "x"
  function oi() {
    document.getElementById('x').style.display = 'none';
    document.getElementById('mensagem').style.display = 'none';

    // Cria cookie por 1 dia
    let data = new Date();
    data.setTime(data.getTime() + 24 * 60 * 60 * 1000);
    let expires = "expires=" + data.toUTCString();
    document.cookie = "meu=ok; " + expires + "; path=/";
  }
</script>
