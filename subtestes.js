const ano = document.getElementById('yearInput');
const botaoAno = document.querySelector('.leapYearBtn');
const resultadoAno = document.querySelector('.leapYearResult');
const palindromoInput = document.getElementById('palindromeInput');
const botaoPalindromo = document.querySelector('.palindromeBtn');
const resultadoPalindromo = document.querySelector('.palindromeResult');
const menu = document.getElementById('buttonsSelect');
const conteudos = document.querySelectorAll('.somar, .bissexto, .palindrome');
const container = document.querySelector('.container');

function ehBissexto(ano) {
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
}

function obterValorInput() {
    return ano.value;
}

botaoAno.addEventListener('click', function() {
    const valorAno = obterValorInput();
    if (Number.isNaN(Number(valorAno)) || valorAno.trim() === '') {
        resultadoAno.textContent = 'Por favor, insira um ano válido.';
        return;
    }
    if (ehBissexto(valorAno)) {
        resultadoAno.textContent = `${valorAno} é um ano bissexto.`;
    } else {
        resultadoAno.textContent = `${valorAno} não é um ano bissexto.`;
    }
 });

 function ehPalindromo(str) {
    const formatado = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invertido = formatado.split('').reverse().join('');
    return formatado !== '' && invertido === formatado;
}

function obterValorPalindromo() {
    return palindromoInput.value;
}

botaoPalindromo.addEventListener('click', function() {
    const valorPalindromo = obterValorPalindromo();
    if (valorPalindromo.trim() === '') {
        resultadoPalindromo.textContent = 'Por favor, insira um texto para verificar.';
        return;
    }
    if (ehPalindromo(valorPalindromo)) {
        resultadoPalindromo.textContent = `"${valorPalindromo}" é um palíndromo.`;
    } else {
        resultadoPalindromo.textContent = `"${valorPalindromo}" não é um palíndromo.`;
    }
    });

menu.addEventListener('click', (event) => {
    const alvo = event.target.getAttribute('data-target');
    if (alvo) {
        alternarConteudo(alvo);
    }
});

function alternarConteudo(alvo) {
    console.log("Tentando alternar para:", alvo);
    container.style.display = 'block';

    conteudos.forEach(el => {
        if (el.classList.contains(alvo)) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}