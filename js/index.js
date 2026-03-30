document.addEventListener('DOMContentLoaded', () => {
    console.log('index.js carregado'); // Debug
    
    // Seleciona todos os links DENTRO de cada profile
    const profileLinks = document.querySelectorAll('.profile a');
    
    console.log('Links encontrados:', profileLinks.length); // Debug
    
    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Impede o redirecionamento imediato
            event.preventDefault();
            
            // Pega o nome do figcaption
            const figcaption = link.querySelector('figcaption');
            const nome = figcaption ? figcaption.textContent.trim() : '';
            
            // Pega o caminho da imagem
            const img = link.querySelector('img');
            let imgSrc = img ? img.getAttribute('src') : '';
            
            // Ajusta caminho relativo para que funcione a partir de catalogo/catalogo.html
			// Se for um caminho relativo como "assets/1.webp", prefixa "../" para apontar ao root
			if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('..')) {
				imgSrc = '../' + imgSrc;
			}
            
            console.log('Salvando no localStorage:', { nome, imgSrc }); // Debug
            
            // Salva no localStorage
            if (nome) {
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imgSrc);
                
                // Depois de salvar, redireciona manualmente
                const href = link.getAttribute('href');
                window.location.href = href;
            } else {
                // Se não achou o nome, redireciona mesmo assim
                window.location.href = link.getAttribute('href');
            }
        });
    });
});