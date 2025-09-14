
        window.onload = function() {
            // Criar cookie chamado "victor"
            let data = new Date();
            data.setTime(data.getTime() + 24 * 60 * 60 * 1000); // 1 dia
            let expires = 'expires=' + data.toUTCString();
            document.cookie = 'victor=meucookie;' + expires + ';path=/';

            // Verificar se o cookie "victor" existe
            let cookies = document.cookie.split(';');
            let existe = false;

            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.startsWith('victor=')) {
                    existe = true;
                    break;
                }
            }

            if (existe) {
                alert('O cookie "victor" existe!');
            } else {
                alert('O cookie "victor" NÃO existe.');
            }
        }
