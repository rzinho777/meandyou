
const backgroundHearts = document.getElementById("backgroundHearts");
const startButton = document.getElementById("startButton");

// =====================================
// CORAÇÕES FLUTUANTES
// =====================================

function createHeart() {
    if (!backgroundHearts) return;

    const heart = document.createElement("span");
    heart.classList.add("floating-heart");
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (7 + Math.random() * 7) + "s";

    backgroundHearts.appendChild(heart);
    setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 900);

// =====================================
// ESTILOS DOS JOGOS
// =====================================

const gameStyle = document.createElement("style");

gameStyle.textContent = `
.memory-screen, .quiz-screen {
    width: min(900px, 94%);
    margin: 35px auto;
    text-align: center;
    animation: gameAppear .7s ease;
    color: #765c58;
}

@keyframes gameAppear {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.memory-screen h2, .quiz-screen h2 {
    color: #9e6872;
    font-family: Georgia, serif;
    font-size: clamp(28px, 5vw, 42px);
    margin-bottom: 10px;
}

.memory-info, .quiz-info {
    color: #987d78;
    margin: 15px 0 22px;
}

.memory-board {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
    max-width: 650px;
    margin: 0 auto;
}

.memory-card {
    aspect-ratio: 1;
    border: 1px solid #e6c9c3;
    border-radius: 13px;
    background: linear-gradient(145deg, #fffaf6, #f2dfe0);
    color: #b97882;
    font-size: clamp(22px, 5vw, 38px);
    cursor: pointer;
    box-shadow: 0 3px 10px #9c73731a;
    transition: transform .2s, background .2s;
}

.memory-card:hover { transform: translateY(-3px); }

.memory-card.revealed, .memory-card.matched {
    background: #fffdf9;
    border-color: #c9a66c;
}

.memory-card.matched {
    opacity: .65;
    cursor: default;
}

.memory-back { font-size: 25px; }

.game-result {
    margin-top: 25px;
    color: #9e6872;
    font-size: 18px;
}

.game-button {
    margin: 20px 5px 0;
    border: 0;
    border-radius: 30px;
    padding: 13px 25px;
    background: #b97882;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: .2s;
}

.game-button:hover {
    background: #9e6872;
    transform: translateY(-2px);
}

.quiz-progress {
    width: 100%;
    max-width: 550px;
    height: 8px;
    margin: 20px auto;
    background: #f0e2df;
    border-radius: 20px;
    overflow: hidden;
}

.quiz-progress-fill {
    height: 100%;
    background: #b97882;
    transition: width .3s;
}

.quiz-question {
    font-family: Georgia, serif;
    font-size: clamp(22px, 4vw, 30px);
    color: #9e6872;
    margin: 25px auto;
    max-width: 650px;
}

.quiz-options {
    display: grid;
    gap: 10px;
    max-width: 550px;
    margin: 20px auto;
}

.quiz-option {
    border: 1px solid #e6c9c3;
    border-radius: 12px;
    background: #fffdf9;
    padding: 14px;
    color: #765c58;
    font-size: 16px;
    cursor: pointer;
    transition: .2s;
}

.quiz-option:hover {
    background: #f8e9e8;
    border-color: #c58c94;
}

.quiz-option.selected {
    background: #f3dfe1;
    border: 2px solid #b97882;
    color: #9e6872;
}

.quiz-answer {
    width: min(550px, 95%);
    min-height: 110px;
    box-sizing: border-box;
    border: 1px solid #e6c9c3;
    border-radius: 12px;
    padding: 15px;
    font: inherit;
    color: #765c58;
    background: #fffdf9;
    resize: vertical;
}

.quiz-feedback {
    max-width: 550px;
    margin: 20px auto;
    padding: 18px;
    border-radius: 12px;
    background: #fff5f1;
    color: #9e6872;
    line-height: 1.7;
}

.quiz-finish {
    max-width: 600px;
    margin: 25px auto;
    padding: 20px;
    border-radius: 15px;
    background: #fffaf5;
    border: 1px solid #ead8ce;
    text-align: left;
    overflow-wrap: anywhere;
}

.quiz-finish h3 {
    color: #9e6872;
    font-family: Georgia, serif;
}

.quiz-finish p {
    border-bottom: 1px solid #f0e2df;
    padding-bottom: 10px;
    line-height: 1.6;
}

.treasure-riddle {
    max-width: 600px;
    margin: 25px auto;
    padding: 25px;
    border-radius: 15px;
    background: #fffaf5;
    border: 1px solid #ead8ce;
    color: #765c58;
    line-height: 1.9;
}

.treasure-input {
    width: min(450px, 90%);
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid #e6c9c3;
    border-radius: 12px;
    background: #fffdf9;
    color: #765c58;
    font-size: 16px;
    text-align: center;
    outline: none;
}

.treasure-input:focus {
    border-color: #b97882;
}

.wordsearch-screen {
    width: min(900px, 94%);
    margin: 35px auto;
    text-align: center;
    animation: gameAppear .7s ease;
    color: #765c58;
}

.wordsearch-screen h2 {
    color: #9e6872;
    font-family: Georgia, serif;
    font-size: clamp(28px, 5vw, 42px);
    margin-bottom: 10px;
}

.wordsearch-info {
    color: #987d78;
    margin: 15px 0 20px;
}

.wordsearch-layout {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 22px;
    margin: 20px auto;
}

.wordsearch-grid {
    display: grid;
    grid-template-columns: repeat(15, minmax(0, 1fr));
    width: min(92vw, 570px);
    gap: 3px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ead8ce;
    border-radius: 14px;
    background: #fffaf5;
    box-shadow: 0 5px 18px #9c73731a;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
}

.wordsearch-cell {
    aspect-ratio: 1;
    min-width: 0;
    border: 1px solid #f0e2df;
    border-radius: 5px;
    background: #fffdf9;
    color: #765c58;
    font-size: clamp(10px, 2.8vw, 19px);
    font-weight: 600;
    display: grid;
    place-items: center;
    padding: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
}

.wordsearch-cell.preview,
.wordsearch-cell.selecting {
    background: #f5e4e5;
    border-color: #c58c94;
}

.wordsearch-cell.found {
    background: #ead5bd;
    border-color: #c9a66c;
    color: #805b48;
}

.wordsearch-words {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    max-width: 680px;
    margin: 15px auto;
}

.wordsearch-word {
    padding: 7px 11px;
    border-radius: 20px;
    border: 1px solid #e6c9c3;
    background: #fffdf9;
    color: #765c58;
    font-size: 13px;
}

.wordsearch-word.found {
    background: #f1e5d8;
    color: #9e6872;
    text-decoration: line-through;
    border-color: #c9a66c;
}

.wordsearch-help {
    max-width: 600px;
    margin: 0 auto;
    color: #987d78;
    line-height: 1.6;
}

.wordsearch-success {
    max-width: 600px;
    margin: 25px auto;
    padding: 22px;
    border-radius: 15px;
    background: #fffaf5;
    border: 1px solid #ead8ce;
    color: #9e6872;
}

@media (max-width: 500px) {
    .wordsearch-grid { gap: 2px; padding: 5px; }
    .wordsearch-cell { border-radius: 3px; }
    .wordsearch-word { font-size: 11px; padding: 6px 8px; }
    .memory-board { gap: 6px; }
    .memory-card { border-radius: 9px; }
    .quiz-option { font-size: 14px; }
}

.final-surprise-screen {
    width: min(780px, 92%);
    margin: 35px auto;
    padding: 25px 0 45px;
    color: #765c58;
    text-align: center;
    animation: gameAppear .7s ease;
}

.final-surprise-heart {
    font-size: 55px;
    margin-bottom: 10px;
}

.final-surprise-screen h2 {
    color: #9e6872;
    font: normal clamp(27px, 5vw, 40px) Georgia, serif;
    margin: 10px 0;
}

.final-surprise-subtitle {
    color: #987d78;
    margin: 12px 0 25px;
}

.final-surprise-letter {
    padding: clamp(20px, 4vw, 38px);
    border: 1px solid #ead8ce;
    border-radius: 16px;
    background: #fffaf5;
    box-shadow: 0 5px 20px #9c73731a;
    text-align: left;
}

.final-surprise-letter p {
    color: #765c58;
    font: 16px/1.85 Georgia, serif;
    margin: 0 0 18px;
    white-space: pre-wrap;
}

.final-surprise-ending {
    color: #9e6872;
    font: 25px Georgia, serif;
    margin-top: 25px;
}

@media (max-width: 500px) {
    .final-surprise-screen {
        width: 94%;
        margin: 22px auto;
    }

    .final-surprise-letter {
        padding: 18px;
    }

    .final-surprise-letter p {
        font-size: 15px;
        line-height: 1.75;
    }
}
`;

document.head.appendChild(gameStyle);

// =====================================
// ELEMENTO PRINCIPAL
// =====================================

function getHome() {
    return document.querySelector("main.home");
}

// =====================================
// JOGO 1: JOGO DA MEMÓRIA
// =====================================

function startMemoryGame() {
    const home = getHome();
    if (!home) return;

    const symbols = [
        "❤️", "🌹", "💍", "🧸", "💕",
        "💌", "🌷", "✨", "🥰", "😘",
        "💖", "🌻", "🦋", "🍓", "🎀",
        "💐", "🌙", "⭐", "🐻", "💘"
    ];

    const cards = [...symbols, ...symbols]
        .sort(() => Math.random() - 0.5);

    let firstCard = null;
    let secondCard = null;
    let locked = false;
    let matches = 0;
    let moves = 0;

    home.innerHTML = `
        <section class="memory-screen">
            <div style="font-size:35px">♡</div>
            <h2>Jogo da Memória</h2>
            <p>Encontre os 20 pares e complete nossa primeira aventura.</p>

            <div class="memory-info">
                <span id="memoryMatches">Pares: 0/20</span>
                &nbsp; • &nbsp;
                <span id="memoryMoves">Jogadas: 0</span>
            </div>

            <div class="memory-board" id="memoryBoard"></div>

            <div class="game-result" id="memoryResult">
                Encontre cada um com o seu parceiro.
            </div>
        </section>
    `;

    const board = document.getElementById("memoryBoard");

    cards.forEach((symbol, index) => {
        const card = document.createElement("button");

        card.className = "memory-card";
        card.type = "button";
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.innerHTML = '<span class="memory-back">♡</span>';

        card.addEventListener("click", () => {
            if (
                locked ||
                card.classList.contains("matched") ||
                card === firstCard ||
                card.classList.contains("revealed")
            ) return;

            card.classList.add("revealed");
            card.textContent = symbol;

            if (!firstCard) {
                firstCard = card;
                return;
            }

            secondCard = card;
            moves++;

            document.getElementById("memoryMoves").textContent =
                "Jogadas: " + moves;

            if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");

                firstCard = null;
                secondCard = null;
                matches++;

                document.getElementById("memoryMatches").textContent =
                    "Pares: " + matches + "/20";

                if (matches === 20) {
                    document.getElementById("memoryResult").innerHTML = `
                        <h3>Você conseguiu! ❤️</h3>
                        <p>Todos os 20 pares foram encontrados!</p>

                        <button class="game-button" id="memoryContinue">
                            Continuar nossa aventura →
                        </button>
                    `;

                    document.getElementById("memoryContinue")
                        .addEventListener("click", startQuiz);
                }
            } else {
                locked = true;

                setTimeout(() => {
                    firstCard.classList.remove("revealed");
                    secondCard.classList.remove("revealed");

                    firstCard.innerHTML =
                        '<span class="memory-back">♡</span>';

                    secondCard.innerHTML =
                        '<span class="memory-back">♡</span>';

                    firstCard = null;
                    secondCard = null;
                    locked = false;
                }, 850);
            }
        });

        board.appendChild(card);
    });
}

// =====================================
// JOGO 2: QUIZ DO RELACIONAMENTO
// =====================================

const questions = [
    {
        question: "Qual dessas datas representa muito para nós?",
        options: ["12", "06", "22", "15", "04"],
        correct: [2]
    },
    {
        question: "Quem disse “Eu te amo” primeiro?",
        options: ["Layra", "Pietro"],
        correct: [0]
    },
    {
        question: "Onde foi dito o primeiro “Eu te amo”?",
        options: [
            "Na call, apenas conversando",
            "Modo CS — Free Fire",
            "Modo Rank — Free Fire",
            "Instagram"
        ],
        correct: [1]
    },
    {
        question: "Se eu fosse descrever você com uma palavra, qual seria?",
        options: [
            "Radiante",
            "Encantadora",
            "Admirável",
            "Inefável"
        ],
        correct: [3],
        explanation: true
    },
    {
        question: "E você, em suas palavras, como me descreveria?",
        open: true
    },
    {
        question: "Quem vicia o outro em jogos?",
        options: [
            "Ninguém",
            "Layrinha",
            "Rzinho",
            "Obviamente Layrinha",
            "Obviamente Rzinho"
        ],
        correct: [4]
    },
    {
        question: "O que te dá mais saudade em nós dois?",
        open: true
    },
    {
        question: "Quando tivermos um casal dos nossos DNAs no mundo, quais seriam os nomes dos nossos anjinhos?",
        options: [
            "Brian e Sophia",
            "Brian e Luiza",
            "Sophia e Antony",
            "Luiza e Guilherme",
            "Outros nomes"
        ],
        correct: [0, 4]
    },
    {
        question: "Qual pequeno detalhe meu consegue arrancar um sorriso seu?",
        open: true
    },
    {
        question: "Se nosso amor fosse uma música, qual seria?",
        open: true
    }
];

let currentQuestion = 0;
let selectedOption = null;
let quizAnswers = [];

function startQuiz() {
    currentQuestion = 0;
    selectedOption = null;
    quizAnswers = [];
    showQuestion();
}

function showQuestion() {
    const home = getHome();
    if (!home) return;

    const q = questions[currentQuestion];
    selectedOption = null;

    home.innerHTML = `
        <section class="quiz-screen">
            <div style="font-size:35px">♡</div>
            <h2>Nosso Quiz</h2>
            <p>Vamos descobrir o quanto você conhece nossa história.</p>

            <div class="quiz-info">
                Pergunta ${currentQuestion + 1} de ${questions.length}
            </div>

            <div class="quiz-progress">
                <div class="quiz-progress-fill"
                    style="width:${((currentQuestion + 1) / questions.length) * 100}%">
                </div>
            </div>

            <div class="quiz-question">${q.question}</div>

            <div id="quizContent"></div>
            <div id="quizFeedback"></div>

            <button class="game-button" id="quizSubmit">
                Confirmar resposta →
            </button>
        </section>
    `;

    const content = document.getElementById("quizContent");

    if (q.open) {
        const textarea = document.createElement("textarea");

        textarea.className = "quiz-answer";
        textarea.id = "quizOpenAnswer";
        textarea.placeholder = "Escreva sua resposta aqui...";

        content.appendChild(textarea);
    } else {
        const optionsBox = document.createElement("div");
        optionsBox.className = "quiz-options";

        q.options.forEach((option, index) => {
            const button = document.createElement("button");

            button.className = "quiz-option";
            button.type = "button";
            button.textContent = option;

            button.addEventListener("click", () => {
                selectedOption = index;

                optionsBox.querySelectorAll(".quiz-option")
                    .forEach(item => item.classList.remove("selected"));

                button.classList.add("selected");
            });

            optionsBox.appendChild(button);
        });

        content.appendChild(optionsBox);
    }

    // Usa onclick para permitir trocar a ação do botão
    // depois que a resposta estiver correta.
    document.getElementById("quizSubmit").onclick = submitAnswer;
}

function submitAnswer() {
    const q = questions[currentQuestion];
    const feedback = document.getElementById("quizFeedback");

    if (q.open) {
        const answer = document.getElementById("quizOpenAnswer")
            .value.trim();

        if (!answer) {
            feedback.innerHTML = `
                <div class="quiz-feedback">
                    Escreva sua resposta antes de continuar. ❤️
                </div>
            `;
            return;
        }

        quizAnswers.push(answer);
        showNextButton();
        return;
    }

    if (selectedOption === null) {
        feedback.innerHTML = `
            <div class="quiz-feedback">
                Escolha uma alternativa para continuar. ❤️
            </div>
        `;
        return;
    }

    const isCorrect = q.correct.includes(selectedOption);

    if (isCorrect) {
        quizAnswers.push(q.options[selectedOption]);

        if (q.explanation) {
            feedback.innerHTML = `
                <div class="quiz-feedback">
                    <h3>Você acertou! ❤️</h3>
                    <h2>INEFÁVEL</h2>
                    <p>
                        Algo tão especial, belo e profundo que não pode
                        ser explicado completamente em palavras.
                    </p>
                    <strong>É assim que eu vejo você. ❤️</strong>
                </div>
            `;
        } else {
            feedback.innerHTML = `
                <div class="quiz-feedback">
                    <strong>Acertou! ❤️</strong>
                    <p>Parabéns!</p>
                </div>
            `;
        }

        // Só libera a próxima pergunta quando acertar.
        showNextButton();

    } else {
        feedback.innerHTML = `
            <div class="quiz-feedback">
                <strong>Resposta incorreta! ❤️</strong>
                <p>Tente novamente, minha menina. Você consegue!</p>
            </div>
        `;

        // Continua na mesma pergunta.
        // O botão permanece configurado para verificar a resposta.
        return;
    }
}

// =====================================
// BOTÃO PARA AVANÇAR O QUIZ
// =====================================

function showNextButton() {
    const submit = document.getElementById("quizSubmit");
    if (!submit) return;

    submit.textContent =
        currentQuestion === questions.length - 1
            ? "Finalizar quiz ❤️"
            : "Próxima pergunta →";

    // Troca a função do botão: agora ele avança.
    submit.onclick = () => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    };
}

// =====================================
// FINAL DO QUIZ
// =====================================

function finishQuiz() {
    const home = getHome();
    if (!home) return;

    home.innerHTML = `
        <section class="quiz-screen">
            <div style="font-size:55px">💗</div>
            <h2>Você chegou ao final!</h2>
            <p>Obrigado por compartilhar esses momentos comigo.</p>

            <div class="quiz-finish" id="quizSummary">
                <h3>Suas respostas ❤️</h3>
            </div>

            <div class="quiz-feedback">
                Cada resposta faz parte da nossa história.
                E ainda temos muito para viver juntos. ❤️
            </div>

            <button class="game-button" id="goToTreasure">
                Descobrir o próximo segredo 🔐
            </button>
        </section>
    `;

    const summary = document.getElementById("quizSummary");

    questions.forEach((q, index) => {
        const item = document.createElement("p");
        const questionText = document.createElement("strong");
        const answerText = document.createElement("span");

        questionText.textContent = `${index + 1}. ${q.question} `;
        answerText.textContent = quizAnswers[index] || "";

        item.appendChild(questionText);
        item.appendChild(document.createElement("br"));
        item.appendChild(answerText);

        summary.appendChild(item);
    });

    document.getElementById("goToTreasure")
        .addEventListener("click", startTreasureGame);
}

// =====================================
// JOGO 3: BAÚ DO TESOURO
// =====================================

function startTreasureGame() {
    const home = getHome();
    if (!home) return;

    home.innerHTML = `
        <section class="treasure-screen">
            <div style="font-size:55px">🗝️</div>
            <h2>O Baú do Tesouro</h2>

            <p>
                Existe uma palavra escondida neste baú.
                Talvez você já tenha ouvido ela...
            </p>

            <p>
                Não sou um nome qualquer. Sou uma palavra que ganhou
                um significado especial depois que você entrou em minha vida.
            </p>

            <p>
                Não sou uma declaração, mas carrego um grande sentimento.
            </p>

            <p>
                Sou aquilo que o mesmo Criador que escreveu nossa história
                também criou.
            </p>

            <p>Começo com a letra S...</p>

            <p><strong>Sabe a resposta, minha menina? ❤️</strong></p>

            <input
                type="text"
                id="treasureAnswer"
                class="treasure-input"
                placeholder="Digite a palavra secreta..."
                autocomplete="off"
            >

            <div id="treasureFeedback"></div>

            <button class="game-button" id="treasureSubmit">
                Abrir o baú ❤️
            </button>
        </section>
    `;

    const answerInput = document.getElementById("treasureAnswer");
    const submitButton = document.getElementById("treasureSubmit");
    const feedback = document.getElementById("treasureFeedback");

    function checkAnswer() {
        const answer = answerInput.value.trim().toLowerCase();

        if (answer === "sirius") {
            home.innerHTML = `
                <section class="treasure-success">
                    <div style="font-size:65px">✨</div>
                    <h2>Você encontrou!</h2>
                    <h1>SIRIUS ❤️</h1>

                    <p>
                        Você encontrou minha estrela. E, entre todas
                        as estrelas que existem, nenhuma tem um significado
                        tão especial para mim quanto você.
                    </p>

                    <strong>Minha Sirius. ❤️</strong>

                    <button class="game-button" id="goToWordSearch">
                        Próximo desafio →
                    </button>
                </section>
            `;

            document.getElementById("goToWordSearch")
                .addEventListener("click", startWordSearchGame);
        } else {
            feedback.innerHTML = `
                <p class="treasure-error">
                    Ainda não é essa palavra, minha menina. Tente novamente. ❤️
                </p>
            `;
        }
    }

    submitButton.addEventListener("click", checkAnswer);

    answerInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
}

// =====================================
// SURPRESA FINAL: TEXTO PARA A LAYRA
// =====================================

function startFinalSurpriseIntro() {
    const home = getHome();
    if (!home) return;

    const finalParagraphs = [
        "Amor, de novo aqui eu fazendo mais um texto. Vc merece muito mais que isso, mas, como sabe, estamos lidando com algo muito difícil.",
        "Pq o que eu mais queria agora era estar aí do seu lado, sentindo seu aroma, abraçado ao amor da minha vida, dando apoio pra vc, que é única pra mim e sempre será minha prioridade em todos os momentos.",
        "Quero cumprir nossas promessas que fizemos um para o outro, fazendo tudo o que nós sempre tivemos vontade. Mas quero que receba isso de coração. Faço esses games, esse texto, essas brincadeiras pq quero que vc seja feliz e se sinta amada. Sei que n é com textos e jogos que vou fazer vc sentir tudo isso, mas espero que eu consiga te alegrar com essas palhaçadas que faço.",
        "Quero sempre ver vc bem. N sei se vc já captou o que sempre falo pra vc. N sei como são seus pensamentos, o que vc acha disso tudo ou se tem medo de falar algo. Saiba que quero estar aq por todos os meus dias possíveis. N quero ficar 1 dia sequer sem poder estar com vc, sorrindo, se divertindo ou vivendo qualquer outro momento.",
        "Um dia já fui um menino que falava e n cumpria, que n ligava pras coisas. Desde então, comecei a perceber o que realmente queria e o que realmente tinha que fazer. Então, finalmente, amadureci e percebi o compromisso que é honrar suas palavras e promessas, honrar o coração da pessoa que vc escolheu pra destinar a ser sua família.",
        "Depois que caí na real de como tudo tem que ser, parei com muitas coisas, mudei meu jeito, mudei meu estilo e fiquei na minha, até que um dia recebi uma notícia: minha cunhada tem irmã kkkkk. Eles nos chamaram pra jogar e, desde então, naquele momento em que começamos a conversar e compartilhar sobre nós, eu vi que aquela pessoa que eu ajoelhava e pedia a Deus, que eu buscava pra ser minha futura família, minha esposa, minha mulher, tinha aparecido.",
        "Uma pessoa com quem eu poderia sempre falar sem medo, sem precisar esconder nada e podendo falar sempre a verdade.",
        "Naquele momento, senti algo que nunca tinha sentido. E digo isso com toda a verdade: no momento em que vi que era vc, que era diferente, que n tinha os mesmos pensamentos de alguns jovens de hj, vi que vc era a pessoa que eu pedia a Deus.",
        "N é exagero falar que vc foi minha estrela cadente, aquela pra quem eu fazia pedidos, a estrela que eu chamava de Sirius.",
        "Seus olhos me encantam, sua beleza me apaixona e seu interior é inexplicável. Tudo que vc tem dentro e fora de si, nada consegue explicar. Chamei pintores, chamei IA, mas nenhuma conseguiu descrever cada detalhe do seu rosto, cada fio de cabelo. Ninguém teve a moral de desenhar ou explicar, pois algo tão perfeito apenas as mãos de Deus, que te criaram, seriam capazes de fazer novamente.",
        "Vc é muito especial pra mim. Carrego em minha alma um sentimento que, se eu fosse medir, seria o número pi (π). Uma obra-prima pela qual me apaixonei. Uma vez pensei que seria um belo livro a contar, por isso quero criar história, criar momentos e criar amor com vc.",
        "Pra uma pessoa tão especial, eu n gostaria mesmo de te deixar magoada, triste, com raiva ou com medo de errar. N vou mentir, é uma das coisas que mais me assombram, e perder vc. Também tenho dúvidas se vc pensa o mesmo que eu sobre isso.",
        "Sinto saudades. Saudade da maneira que nós conversávamos, conversas que tinham horas de assunto, em que, em qualquer lugar, n parávamos de matar a saudade que tínhamos um do outro. São coisas que eu queria muito que fossem iguais a antes.",
        "Mas, mesmo assim, n deixe de brilhar meu dia. Continue ao meu lado sempre.",
        "Um dia te prometi que iria te buscar e ficar pra sempre cmg. Mesmo que demore, irei cumprir td o que te falei. N deixarei vc sem a vontade de sonhar, de conquistar algo ou de ter algo. Quero estar ao seu lado pra te ajudar sempre.",
        "Quero ser a pessoa em quem vc confia, quero ser a pessoa que estará presente em todos os momentos do seu dia a dia. Quero sempre estar fazendo vc lembrar de mim, quero fazer vc sentir meu abraço mesmo de longe, fazer vc sentir o sentimento que eu sinto por vc.",
        "Esse foi tudo que consegui falar, não foi o suficiente pq não existe limite pra falar sobre vc. "
    ];

    home.innerHTML = `
        <section class="final-surprise-screen">
            <div class="final-surprise-heart">💗</div>
            <h2>Uma última surpresa para você, minha linda</h2>
            <p class="final-surprise-subtitle">
                De coração, para a pessoa mais especial da minha vida.
            </p>
            <article class="final-surprise-letter" id="finalSurpriseLetter"></article>
            <div class="final-surprise-ending">Eu te amo. ❤️</div>
        </section>
    `;

    const letter = document.getElementById("finalSurpriseLetter");

    finalParagraphs.forEach(text => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        letter.appendChild(paragraph);
    });
}

// =====================================
// JOGO 4: CAÇA-PALAVRAS
// =====================================

function startWordSearchGame() {
    const home = getHome();
    if (!home) return;

    const words = [
        "LAYRA", "PIETRO", "AMOR", "ETERNO", "DESTINO",
        "PROMESSAS", "FAMILIA", "FUTURO", "DEUS", "CARINHO",
        "FELICIDADE", "CORACAO", "PRINCESA", "LEALDADE", "PAIXAO"
    ];

    const size = 15;
    const grid = Array.from(
        { length: size },
        () => Array(size).fill("")
    );

    const foundWords = new Set();

    function canPlace(word, row, col, direction) {
        for (let i = 0; i < word.length; i++) {
            const r = row + (direction === "vertical" ? i : 0);
            const c = col + (direction === "horizontal" ? i : 0);

            if (r >= size || c >= size) return false;

            if (grid[r][c] !== "" && grid[r][c] !== word[i]) {
                return false;
            }
        }

        return true;
    }

    function placeWord(word) {
        const directions = ["horizontal", "vertical"];

        for (let attempt = 0; attempt < 500; attempt++) {
            const direction =
                directions[Math.floor(Math.random() * directions.length)];

            const row = Math.floor(Math.random() * size);
            const col = Math.floor(Math.random() * size);

            if (!canPlace(word, row, col, direction)) continue;

            for (let i = 0; i < word.length; i++) {
                const r = row + (direction === "vertical" ? i : 0);
                const c = col + (direction === "horizontal" ? i : 0);

                grid[r][c] = word[i];
            }

            return true;
        }

        return false;
    }

    words.sort((a, b) => b.length - a.length);

    words.forEach(word => {
        if (!placeWord(word)) {
            console.error("Não foi possível posicionar:", word);
        }
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (!grid[r][c]) {
                grid[r][c] =
                    letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }

    home.innerHTML = `
        <section class="wordsearch-screen">
            <div style="font-size:45px">💗</div>
            <h2>Caça-palavras do Amor</h2>

            <p>
                Encontre as palavras escondidas na nossa história.
                Elas podem estar na horizontal ou na vertical.
            </p>

            <p class="wordsearch-counter">
                <strong id="wordsearchCount">0</strong>
                de ${words.length} palavras encontradas
            </p>

            <div class="wordsearch-words" id="wordsearchWords"></div>

            <div class="wordsearch-grid" id="wordsearchGrid"></div>

            <p id="wordsearchFeedback">
                Selecione as letras de uma palavra arrastando o dedo ou o mouse.
            </p>
        </section>
    `;

    const wordsBox = document.getElementById("wordsearchWords");
    const gridBox = document.getElementById("wordsearchGrid");
    const feedback = document.getElementById("wordsearchFeedback");
    const count = document.getElementById("wordsearchCount");

    words.forEach(word => {
        const item = document.createElement("span");
        item.className = "wordsearch-word";
        item.textContent = word;
        item.dataset.word = word;
        wordsBox.appendChild(item);
    });

    const cells = [];
    let selecting = false;
    let startCell = null;
    let selectedCells = [];
    let activePointerId = null;

    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("button");

            cell.type = "button";
            cell.className = "wordsearch-cell";
            cell.textContent = grid[r][c];
            cell.dataset.row = r;
            cell.dataset.col = c;

            cells.push(cell);
            gridBox.appendChild(cell);
        }
    }

    function getCell(row, col) {
        return cells[row * size + col];
    }

    function clearPreview() {
        gridBox.querySelectorAll(".wordsearch-cell").forEach(cell => {
            cell.classList.remove("selecting");
        });
    }

    function selectLine(endRow, endCol) {
        if (!startCell) return;

        const rowDiff = endRow - startCell.row;
        const colDiff = endCol - startCell.col;

        // Permite somente horizontal ou vertical.
        if (rowDiff !== 0 && colDiff !== 0) return;

        const distance = Math.max(
            Math.abs(rowDiff),
            Math.abs(colDiff)
        );

        const stepRow = Math.sign(rowDiff);
        const stepCol = Math.sign(colDiff);

        const newSelection = [];

        for (let i = 0; i <= distance; i++) {
            const cell = getCell(
                startCell.row + stepRow * i,
                startCell.col + stepCol * i
            );

            if (cell) newSelection.push(cell);
        }

        clearPreview();
        selectedCells = newSelection;

        selectedCells.forEach(cell => {
            cell.classList.add("selecting");
        });
    }

    function getCellAtPoint(x, y) {
        const element = document.elementFromPoint(x, y);
        if (!element) return null;

        const cell = element.closest(".wordsearch-cell");

        if (!cell || !gridBox.contains(cell)) return null;

        return cell;
    }

    function checkSelectedWord() {
        if (!selectedCells.length) return;

        const selectedWord = selectedCells
            .map(cell => cell.textContent)
            .join("");

        const reversedWord = selectedWord
            .split("")
            .reverse()
            .join("");

        const matchedWord = words.find(word =>
            !foundWords.has(word) &&
            (word === selectedWord || word === reversedWord)
        );

        if (matchedWord) {
            foundWords.add(matchedWord);

            selectedCells.forEach(cell => {
                cell.classList.remove("selecting");
                cell.classList.add("found");
            });

            const wordItem = wordsBox.querySelector(
                `[data-word="${matchedWord}"]`
            );

            if (wordItem) {
                wordItem.classList.add("found");
            }

            count.textContent = foundWords.size;
            feedback.textContent = `Você encontrou ${matchedWord}! ❤️`;

            if (foundWords.size === words.length) {
                showWordSearchSuccess();
            }
        } else {
            selectedCells.forEach(cell => {
                cell.classList.remove("selecting");
            });

            feedback.textContent =
                "Essa combinação não formou uma palavra. Tente outra! ❤️";
        }

        selectedCells = [];
    }

    // Inicia a seleção pelo toque ou mouse.
    gridBox.addEventListener("pointerdown", event => {
        const cell = event.target.closest(".wordsearch-cell");
        if (!cell) return;

        event.preventDefault();

        selecting = true;
        activePointerId = event.pointerId;

        startCell = {
            row: Number(cell.dataset.row),
            col: Number(cell.dataset.col)
        };

        selectedCells = [];

        selectLine(startCell.row, startCell.col);

        try {
            gridBox.setPointerCapture(event.pointerId);
        } catch (error) {
            // Continua funcionando sem captura do ponteiro.
        }
    });

    // Acompanha o dedo ou mouse durante o arrasto.
    gridBox.addEventListener("pointermove", event => {
        if (!selecting || event.pointerId !== activePointerId) return;

        event.preventDefault();

        const cell = getCellAtPoint(event.clientX, event.clientY);
        if (!cell) return;

        selectLine(
            Number(cell.dataset.row),
            Number(cell.dataset.col)
        );
    });

    function finishSelection(event) {
        if (!selecting) return;

        if (event && event.pointerId !== activePointerId) return;

        selecting = false;
        activePointerId = null;

        checkSelectedWord();
    }

    gridBox.addEventListener("pointerup", finishSelection);
    gridBox.addEventListener("pointercancel", finishSelection);

    function showWordSearchSuccess() {
        home.innerHTML = `
            <section class="wordsearch-success">
                <div style="font-size:65px">💖</div>
                <h2>Você encontrou todas!</h2>

                <p>
                    Cada palavra representa um pedacinho da nossa história.
                    E agora chegou o momento de uma surpresa muito especial.
                </p>

                <h3>15 de 15 palavras encontradas! ❤️</h3>

                <button class="game-button" id="goToFinalSurprise">
                    Ir para a última surpresa ❤️
                </button>
            </section>
        `;

        document.getElementById("goToFinalSurprise")
            .addEventListener("click", startFinalSurpriseIntro);
    }
}

// =====================================
// INICIAR A AVENTURA
// =====================================

if (startButton) {
    startButton.addEventListener("click", () => {
        startMemoryGame();
    });
}
