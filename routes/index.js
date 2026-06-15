var express = require('express');
var router = express.Router();

const flashcards = [

    // LINGUAGENS
    {
        materia: "Linguagens",
        pergunta: "O que é uma metáfora?",
        resposta: "Figura de linguagem que estabelece uma comparação implícita."
    },
    {
        materia: "Linguagens",
        pergunta: "O que é linguagem verbal?",
        resposta: "Comunicação realizada por palavras."
    },
    {
        materia: "Linguagens",
        pergunta: "O que é um artigo de opinião?",
        resposta: "Texto argumentativo que apresenta o ponto de vista do autor."
    },
    {
        materia: "Linguagens",
        pergunta: "Qual a função da linguagem predominante em propagandas?",
        resposta: "Função conativa ou apelativa."
    },
    {
        materia: "Linguagens",
        pergunta: "O que é intertextualidade?",
        resposta: "Relação entre textos diferentes."
    },
    {
        materia: "Linguagens",
        pergunta: "O que caracteriza o Modernismo?",
        resposta: "Ruptura com padrões tradicionais e valorização da identidade nacional."
    },
    {
        materia: "Linguagens",
        pergunta: "O que é denotação?",
        resposta: "Uso da palavra em seu sentido literal."
    },
    {
        materia: "Linguagens",
        pergunta: "O que é conotação?",
        resposta: "Uso da palavra em sentido figurado."
    },
    {
        materia: "Linguagens",
        pergunta: "Qual a principal característica da crônica?",
        resposta: "Relatar fatos do cotidiano de forma reflexiva."
    },
    {
        materia: "Linguagens",
        pergunta: "O que é um narrador em primeira pessoa?",
        resposta: "Narrador que participa da história."
    },

    // MATEMÁTICA
    {
        materia: "Matemática",
        pergunta: "Qual a fórmula da área do círculo?",
        resposta: "A = πr²"
    },
    {
        materia: "Matemática",
        pergunta: "Qual a fórmula de Bhaskara?",
        resposta: "x = (-b ± √Δ) / 2a"
    },
    {
        materia: "Matemática",
        pergunta: "Qual a soma dos ângulos internos de um triângulo?",
        resposta: "180°"
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 15% de 200?",
        resposta: "30"
    },
    {
        materia: "Matemática",
        pergunta: "Qual a fórmula da velocidade média?",
        resposta: "Vm = ΔS / ΔT"
    },
    {
        materia: "Matemática",
        pergunta: "O que é uma função afim?",
        resposta: "Função do tipo f(x)=ax+b."
    },
    {
        materia: "Matemática",
        pergunta: "Qual a fórmula da área do retângulo?",
        resposta: "Base × altura"
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é √144?",
        resposta: "12"
    },
    {
        materia: "Matemática",
        pergunta: "O que é uma razão?",
        resposta: "Comparação entre duas grandezas."
    },
    {
        materia: "Matemática",
        pergunta: "Qual o valor de π aproximado?",
        resposta: "3,14"
    },

    // CIÊNCIAS HUMANAS
    {
        materia: "Ciências Humanas",
        pergunta: "Em que ano ocorreu a Independência do Brasil?",
        resposta: "1822"
    },
    {
        materia: "Ciências Humanas",
        pergunta: "Quem proclamou a República no Brasil?",
        resposta: "Marechal Deodoro da Fonseca."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "O que foi a Revolução Francesa?",
        resposta: "Movimento que derrubou a monarquia francesa em 1789."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "Qual é a capital do Ceará?",
        resposta: "Fortaleza."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "O que é globalização?",
        resposta: "Integração econômica, cultural e tecnológica entre países."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "Quem escreveu O Príncipe?",
        resposta: "Nicolau Maquiavel."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "O que é democracia?",
        resposta: "Sistema político baseado na participação popular."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "Qual o maior continente?",
        resposta: "Ásia."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "O que é urbanização?",
        resposta: "Crescimento das cidades."
    },
    {
        materia: "Ciências Humanas",
        pergunta: "O que foi a Guerra Fria?",
        resposta: "Disputa política e ideológica entre EUA e URSS."
    },

    // CIÊNCIAS DA NATUREZA
    {
        materia: "Ciências da Natureza",
        pergunta: "Qual a fórmula química da água?",
        resposta: "H₂O"
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "Qual é o planeta mais próximo do Sol?",
        resposta: "Mercúrio."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "O que é fotossíntese?",
        resposta: "Processo em que plantas produzem glicose usando luz solar."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "Qual é a velocidade da luz no vácuo?",
        resposta: "300.000 km/s."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "Qual gás é mais abundante na atmosfera?",
        resposta: "Nitrogênio."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "O que é um átomo?",
        resposta: "Menor unidade básica da matéria."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "Qual órgão bombeia sangue pelo corpo?",
        resposta: "Coração."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "O que é força gravitacional?",
        resposta: "Atração entre corpos com massa."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "Qual o símbolo químico do ouro?",
        resposta: "Au."
    },
    {
        materia: "Ciências da Natureza",
        pergunta: "O que é DNA?",
        resposta: "Molécula que contém informações genéticas."
    }
];

router.get('/', function(req, res) {

    var usuarioLogado =
        req.session && req.session.usuario ?
        req.session.usuario :
        undefined;

    res.render('index', {
        title: 'Home',
        usuario: usuarioLogado,
        flashcards: flashcards
    });

});

module.exports = router;
module.exports = router;