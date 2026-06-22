const express = require("express");
const router = express.Router();

const Flashcard = require("../models/Flashcard");
const { auth } = require("../middlewares/middleware");

// =========================
// FUNÇÃO AUXILIAR
// =========================
function obterUsuarioId(req) {
    // Valida se o objeto usuario existe na sessão antes de buscar o id
    return req.session && req.session.usuario ? req.session.usuario.id : null;
}

// =========================
// PÁGINA EJS (LISTAR)
// =========================
// Removemos o middleware 'auth' daqui porque ele responde em JSON. 
// Faremos a checagem direto na rota para redirecionar para a tela de login!
router.get("/", async (req, res) => {
    try {
        const donoDoCard = obterUsuarioId(req);

        // PROBLEMA 1 SOLUCIONADO: Se não estiver logado, redireciona o navegador para o login
        if (!donoDoCard) {
            return res.redirect("/login");
        }

        // Busca todas as receitas salvas pelo usuário logado
        const minhasReceitas = await Flashcard.find({
            usuarioId: donoDoCard
        });

        // Renderiza a página 'flashcards.ejs' passando a lista de receitas encontradas
        res.render("flashcards", { receitas: minhasReceitas });
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Erro ao carregar as receitas salvas.");
    }
});

// =========================
// SALVAR RECEITA (CRIAR FLASHCARD)
// =========================
// PROBLEMA 2 SOLUCIONADO: Ajustado para usar o padrão esperado pelo seu front-end
router.post("/salvar", async (req, res) => {
    console.log("Dados recebidos da busca:", req.body);

    try {
        const { idReceita, nome, imagem } = req.body;
        const donoDoCard = obterUsuarioId(req);

        // Se falhar na sessão, tentamos buscar se a autenticação preencheu req.user (comum em JWT)
        const userIdFinal = donoDoCard || (req.user ? req.user.id : null);

        if (!userIdFinal) {
            return res.status(401).json({
                sucesso: false,
                msg: "Você precisa estar logado"
            });
        }

        // Mapeando os dados para o seu Model de Flashcard
        const novaReceita = new Flashcard({
            pergunta: nome,
            resposta: imagem,
            materia: "Receitas Salvas",
            usuarioId: userIdFinal
        });

        await novaReceita.save();

        return res.status(201).json({
            sucesso: true,
            msg: "Receita salva com sucesso nos seus favoritos!"
        });

    } catch (erro) {
        console.log(erro);
        return res.status(500).json({
            sucesso: false,
            erro: erro.message
        });
    }
});

// =========================
// LISTAR FLASHCARDS DADOS (Caso o front antigo precise)
// =========================
router.get("/dados", auth, async (req, res) => {
    try {
        const donoDoCard = obterUsuarioId(req);
        const flashcards = await Flashcard.find({
            usuarioId: donoDoCard
        });
        return res.json(flashcards);
    } catch (erro) {
        return res.status(500).json({
            erro: erro.message
        });
    }
});

module.exports = router;