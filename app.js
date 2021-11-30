/* Aula 20 MaiaQuiz  */
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "O que as ações de saúde e segurança no trabalho levam para as empresas?",
    alternativaA : "Aumento da produtividade",
    alternativaB : "Bem-estar do trabalhador",
    alternativaC : "Prevenção de acidentes",
    alternativaD : "Todas as anteriores",
    correta      : "Todas as anteriores",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Você sabe o significado de presenteísmo?",
    alternativaA : "Presença no trabalho mesmo doente",
    alternativaB : "Presença no trabalho com diminuição da produtividade",
    alternativaC : "Sair do trabalho mais cedo, sem justificativa",
    alternativaD : "Falta no trabalho sem justificativa",
    correta      : "Presença no trabalho com diminuição da produtividade",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Quais são as três principais causas de afastamento do trabalho no Brasil?",
    alternativaA : "Doenças osteomusculares, doenças cardiorespiratórias e transtornos mentais",
    alternativaB : "Transtornos mentais, doenças gástricas e acidente do trabalho",
    alternativaC : "Acidente de trabalho, trauma e lesão e doenças cardiovasculares",
    alternativaD : "Trauma e lesão, doenças osteomusculares e transtornos mentais",
    correta      : "Trauma e lesão, doenças osteomusculares e transtornos mentais",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Quando é o Dia Mundial de Saúde e Segurança no Trabalho?",
    alternativaA : "1 de Julho",
    alternativaB : "10 de Outubro",
    alternativaC : "28 de Abril",
    alternativaD : "27 de Julho",
    correta      : "28 de Abril",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual o significado de LER ?",
    alternativaA : "Lesão por Esforço Repetido",
    alternativaB : "Lesão por Esforço Repetitivo",
    alternativaC : "Lesão por Estres Repetido",
    alternativaD : "Lesão por Estres Repetitivo",
    correta      : "Lesão por Esforço Repetitivo",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o significado da sigla CIPA?",
    alternativaA : "Conselho Interno de Prevenção de Acidentes",
    alternativaB : "Comitê Interno de Prevenção de Acidentes",
    alternativaC : "Comissão Interna de Participação de Acidentes",
    alternativaD : "Comissão Interna de Prevenção de Acidentes",
    correta      : "Comissão Interna de Prevenção de Acidentes",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual o significado da sigla PCMSO?",
    alternativaA : "Participação no Controle Médico de Saúde Ocupacional",
    alternativaB : "Presença no Controle Médico de Saúde Ocupacional",
    alternativaC : "Programa de Controle Médico de Saúde Ocupacional",
    alternativaD : "Programa de Casos Médicos de Saúde Ocupacional",
    correta      : "Programa de Controle Médico de Saúde Ocupacional",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Um acontecimento indesejado, inesperado que provoca perda é chamado de",
    alternativaA : "Imprevisto",
    alternativaB : "Incidente",
    alternativaC : "Acidente",
    alternativaD : "Acontecimento",
    correta      : "Acidente",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Quais os sintomas do stress ?",
    alternativaA : "Sinais de cansaço, tristeza e dor de cabeça",
    alternativaB : "Agitação, crises, angústia e diminuição da produtividade",
    alternativaC : "Isolamento, mau humor e medo",
    alternativaD : "Todas as anteriores",
    correta      : "Todas as anteriores",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "O que fazer se estiver sendo alvo de brincadeiras constantes dos colegas ?",
    alternativaA : "Sofrer calado e ignorar o fato",
    alternativaB : "Retribuir a brincadeira com outra brincadeira mais ofensiva",
    alternativaC : "Explique isso ao colega; caso persista, informe ao supervisor",
    alternativaD : "Pedir demissão e ocultar o fato na entrevista de desligamento",
    correta      : "Explique isso ao colega; caso persista, informe ao supervisor",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
