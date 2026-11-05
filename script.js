// Banco de dados das explicações históricas
const dadosHistoricos = {
    antiguidade: {
        titulo: "Antiguidade Clássica: O Monstro Híbrido",
        texto: "Na Grécia Antiga, as sirenas não eram peixes, mas sim criaturas metade mulher, metade pássaro. O estereótipo aqui era de um **monstro mortal**. Elas representavam os perigos incontroláveis do mar e a tentação fatal. Seu canto irresistível fazia com que os marinheiros batessem seus navios nos rochedos. A mistificação aqui era sobre o medo do desconhecido e da natureza implacável."
    },
    idadeMedia: {
        titulo: "Idade Média: A Sereia de Duas Caudas e a Vaidade",
        texto: "Na Idade Média, a igreja associou as sereias (agora com cauda de peixe) ao **pecado da vaidade e luxúria**. O estereótipo mais marcante dessa época é a sereia segurando um espelho e um pente. Como não possuíam alma segundo as lendas, elas seduziam os homens para a perdição para roubar-lhes a salvação, tornando-se símbolos de aviso moral nas catedrais europeias."
    },
    seculo19: {
        titulo: "Século XIX: A Amante Trágica",
        texto: "Com o Romantismo e a obra 'A Pequena Sereia' de Hans Christian Andersen (1837), o estereótipo mudou drasticamente. A sereia deixou de ser um monstro predador para se tornar a **vítima sofredora e passiva**. O foco passou a ser o desejo de ter uma alma imortal e o amor não correspondido por um humano, culminando em seu sacrifício silencioso virando espuma do mar. Foi o início da humanização da criatura."
    },
    atualidade: {
        titulo: "Século XX e XXI: O Ícone Infantilizado",
        texto: "Graças às animações da Disney (1989) e à cultura pop (filmes, brinquedos, séries), a sereia sofreu uma monstrificação reversa: a **infantilização total**. O estereótipo atual é de uma princesa adolescente, rebelde, colorida e acompanhada de peixes falantes. O perigo e a tragédia foram apagados. Ela se tornou um símbolo de curiosidade, aventura inofensiva e magia estética, focada inteiramente no público infantil e juvenil."
    }
};

// Função acionada ao clicar nas imagens da linha do tempo
function mostrarExplicacao(era) {
    const painel = document.getElementById('painel-explicacao');
    const titulo = document.getElementById('titulo-explicacao');
    const texto = document.getElementById('texto-explicacao');

    // Substitui o conteúdo com base na era clicada
    titulo.innerText = dadosHistoricos[era].titulo;
    texto.innerHTML = dadosHistoricos[era].texto;

    // Exibe o painel e faz a página rolar suavemente até ele
    painel.classList.remove('oculto');
    painel.style.display = 'block';
   
    // Pequeno atraso para a transição do CSS funcionar
    setTimeout(() => {
        painel.style.opacity = '1';
        painel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
}

// Função para fechar a explicação
function fecharExplicacao() {
    const painel = document.getElementById('pain