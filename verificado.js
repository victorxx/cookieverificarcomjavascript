<div id="x" onclick="oi()" style="background-color: aqua; padding: 20px; cursor: pointer; width: 10px;">
  x
  <div id="mensagem" style="position: fixed; padding-top: 20px;">
    <iframe src="https://www.espiritosanto-es.com.br/vps.html" width="300" height="400"></iframe>
  </div>

  <script>
    // Verifica se o cookie 'meu=ok' já existe
    let cookies = document.cookie.split(';');
    let existe = false;
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith('meu=ok')) {
        existe = true;
        break;
      }
    }

    // Se já existir, oculta a div
    if (existe) {
      document.getElementById('x').style.display = 'none';
    }

    // Função chamada ao clicar na div
    function oi() {
      // Oculta a div
      document.getElementById('x').style.display = 'none';

      // Cria cookie para não mostrar novamente por 1 dia
      let data = new Date();
      data.setTime(data.getTime() + 24 * 60 * 60 * 1000); // 1 dia
      let expires = "expires=" + data.toUTCString();
      document.cookie = "meu=ok; " + expires + "; path=/";
    }
  </script>
</div>
