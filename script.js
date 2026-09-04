const brawlers = [
  { name: 'Shelly', rarity: 'commune', gender: 'fille', hair: 'violet', style: 'humain', health: 'moyen', type: 'degats', range: 'moyen', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: true, stun: true, superHeal: false, shield: false, poison: false, slow: true, summon: false, dash: false, pierce: false, bounce: false, wallBreak: true, thrower: false, fast: false },
  { name: 'Colt', rarity: 'commune', gender: 'garcon', hair: 'rouge', style: 'humain', health: 'faible', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: false, stun: false, superHeal: false, shield: false, poison: false, slow: false, summon: false, dash: false, pierce: false, bounce: false, wallBreak: true, thrower: false, fast: false },
  { name: 'Bull', rarity: 'rare', gender: 'garcon', hair: 'noir', style: 'humain', health: 'fort', type: 'tank', range: 'proche', ranged: false, healer: false, invisible: false, tank: true, robot: false, weapon: true, area: true, stun: false, superHeal: false, shield: false, poison: false, slow: false, summon: false, dash: true, pierce: false, bounce: false, wallBreak: true, thrower: false, fast: false },
  { name: 'Jessie', rarity: 'rare', gender: 'fille', hair: 'roux', style: 'humain', health: 'moyen', type: 'controle', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: true, stun: false, superHeal: false, shield: false, poison: false, slow: false, summon: true, dash: false, pierce: false, bounce: true, wallBreak: false, thrower: false, fast: false },
  { name: 'Brock', rarity: 'rare', gender: 'garcon', hair: 'noir', style: 'humain', health: 'faible', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: true, stun: false, superHeal: false, shield: false, poison: false, slow: false, summon: false, dash: false, pierce: false, bounce: false, wallBreak: true, thrower: false, fast: false },
  { name: 'Poco', rarity: 'rare', gender: 'garcon', hair: 'aucun', style: 'squelette', health: 'moyen', type: 'support', range: 'moyen', ranged: true, healer: true, invisible: false, tank: false, robot: false, weapon: false, area: true, stun: false, superHeal: true, shield: false, poison: false, slow: false, summon: false, dash: false, pierce: true, bounce: false, wallBreak: false, thrower: false, fast: false },
  { name: 'El Primo', rarity: 'rare', gender: 'garcon', hair: 'bleu', style: 'humain', health: 'fort', type: 'tank', range: 'proche', ranged: false, healer: false, invisible: false, tank: true, robot: false, weapon: false, area: true, stun: true, superHeal: false, shield: false, poison: false, slow: false, summon: false, dash: true, pierce: false, bounce: false, wallBreak: false, thrower: false, fast: false },
  { name: 'Spike', rarity: 'legendary', gender: 'inconnu', hair: 'aucun', style: 'plante', health: 'faible', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: false, area: true, stun: false, superHeal: false, shield: false, poison: true, slow: true, summon: false, dash: false, pierce: false, bounce: false, wallBreak: false, thrower: false, fast: false },
  { name: 'Leon', rarity: 'legendary', gender: 'garcon', hair: 'vert', style: 'humain', health: 'moyen', type: 'assassin', range: 'moyen', ranged: true, healer: false, invisible: true, tank: false, robot: false, weapon: false, area: false, stun: false, superHeal: false, shield: false, poison: false, slow: false, summon: false, dash: false, pierce: false, bounce: false, wallBreak: false, thrower: false, fast: true },
  { name: 'Rico', rarity: 'super rare', gender: 'garcon', hair: 'aucun', style: 'robot', health: 'faible', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: true, weapon: true, area: false, stun: false, superHeal: false, shield: false, poison: false, slow: false, summon: false, dash: false, pierce: true, bounce: true, wallBreak: false, thrower: false, fast: false }
];

const knownBrawlerNames = [
  'Nita', 'Barley', 'Rosa', 'Dynamike', 'Tick', '8-Bit', 'Darryl', 'Penny', 'Carl', 'Jacky',
  'Gus', 'Bo', 'Emz', 'Stu', 'Piper', 'Pam', 'Frank', 'Bibi', 'Bea', 'Nani', 'Edgar', 'Griff',
  'Grom', 'Bonnie', 'Gale', 'Colette', 'Belle', 'Ash', 'Lola', 'Sam', 'Mandy', 'Maisie', 'Hank',
  'Pearl', 'Larry & Lawrie', 'Angelo', 'Berry', 'Mortis', 'Tara', 'Gene', 'Max', 'Mr. P', 'Sprout',
  'Byron', 'Squeak', 'Lou', 'Ruffs', 'Buzz', 'Fang', 'Eve', 'Janet', 'Otis', 'Buster', 'Gray',
  'Willow', 'Doug', 'Chuck', 'Charlie', 'Mico', 'Melodie', 'Lily', 'Draco', 'Kenji', 'Juju',
  'Meeple', 'Lumi', 'Clancy', 'Kit', 'Cordelius', 'R-T', 'Amber', 'Meg', 'Surge', 'Crow', 'Sandy',
  'Chester', 'Kaze', 'Finx', 'Jae-Yong', 'Alli', 'Cosmo', 'Vince'
];

const knownRarities = {
  Mortis: 'mythique', Tara: 'mythique', Gene: 'mythique', Max: 'mythique', 'Mr. P': 'mythique',
  Sprout: 'mythique', Byron: 'mythique', Squeak: 'mythique', Lou: 'mythique', Ruffs: 'mythique',
  Buzz: 'mythique', Fang: 'mythique', Eve: 'mythique', Janet: 'mythique', Otis: 'mythique',
  Buster: 'mythique', Gray: 'mythique', Willow: 'mythique', Doug: 'mythique', Chuck: 'mythique',
  Charlie: 'mythique', Mico: 'mythique', Melodie: 'mythique', Lily: 'mythique', Draco: 'mythique',
  Kenji: 'mythique', Juju: 'mythique', Meeple: 'mythique', Lumi: 'mythique', Clancy: 'mythique',
  Kit: 'legendary', Cordelius: 'legendary', Amber: 'legendary', Meg: 'legendary', Surge: 'legendary',
  Crow: 'legendary', Sandy: 'legendary', Chester: 'legendary', Kaze: 'legendary', Finx: 'mythique',
  'Jae-Yong': 'mythique', Alli: 'mythique', Cosmo: 'mythique', Vince: 'mythique'
};

knownBrawlerNames.forEach((name) => {
  if (!brawlers.some((brawler) => brawler.name === name)) {
    brawlers.push({ name, rarity: knownRarities[name] || 'inconnue', type: 'inconnu' });
  }
});

const questions = [
  { text: 'Est-ce un brawler légendaire ?', key: 'rarity', value: 'legendary' },
  { text: 'Est-ce un brawler mythique ?', key: 'rarity', value: 'mythique' },
  { text: 'Est-ce un brawler épique ?', key: 'rarity', value: 'épique' },
  { text: 'Est-ce un brawler super rare ?', key: 'rarity', value: 'super rare' },
  { text: 'Est-ce un brawler rare ?', key: 'rarity', value: 'rare' },
  { text: 'Est-ce un brawler commun ?', key: 'rarity', value: 'commune' },
  { text: 'Est-ce que le brawler tire de loin ?', key: 'range', values: ['loin', 'moyen', 'proche'] },
  { text: 'Peut-il soigner ses alliés ?', key: 'healer', value: true },
  { text: 'Peut-il devenir invisible ?', key: 'invisible', value: true },
  { text: 'Est-ce un tank ?', key: 'tank', value: true },
  { text: 'Est-ce un robot ?', key: 'robot', value: true },
  { text: 'Utilise-t-il une arme ?', key: 'weapon', value: true },
  { text: 'Son attaque fait-elle des dégâts de zone ?', key: 'area', value: true },
  { text: 'Est-ce un brawler de soutien ?', key: 'type', value: 'support' },
  { text: 'A-t-il beaucoup de PV ?', key: 'health', value: 'fort' },
  { text: 'A-t-il peu de PV ?', key: 'health', value: 'faible' },
  { text: 'Son super peut-il étourdir (stun) ?', key: 'stun', value: true },
  { text: 'Son super peut-il soigner ?', key: 'superHeal', value: true },
  { text: 'Peut-il créer un bouclier ?', key: 'shield', value: true },
  { text: 'Son attaque ou son super empoisonne-t-il ?', key: 'poison', value: true },
  { text: 'Peut-il ralentir les ennemis ?', key: 'slow', value: true },
  { text: 'Peut-il invoquer un allié ou une tourelle ?', key: 'summon', value: true },
  { text: 'Son super lui permet-il de foncer ?', key: 'dash', value: true },
  { text: 'Ses tirs peuvent-ils traverser les ennemis ?', key: 'pierce', value: true },
  { text: 'Ses tirs peuvent-ils rebondir ?', key: 'bounce', value: true },
  { text: 'Peut-il détruire les murs ?', key: 'wallBreak', value: true },
  { text: 'Lance-t-il des attaques par-dessus les murs ?', key: 'thrower', value: true },
  { text: 'Est-il très rapide ?', key: 'fast', value: true },
  { text: 'Son attaque fait-elle des dégâts sur plusieurs ennemis ?', key: 'area', value: true },
  { text: 'Son super est-il surtout défensif ?', key: 'shield', value: true },
  { text: 'Est-ce un personnage de contrôle ?', key: 'type', value: 'controle' },
  { text: 'Est-ce un assassin ?', key: 'type', value: 'assassin' },
  { text: 'Est-ce un brawler qui combat au corps à corps ?', key: 'range', value: 'proche' },
  { text: 'Est-ce un brawler qui utilise une tourelle ?', key: 'summon', value: true },
  { text: 'Peut-il devenir difficile à repérer ?', key: 'invisible', value: true },
  { text: 'Son attaque peut-elle toucher en ligne droite plusieurs fois ?', key: 'pierce', value: true },
  { text: 'Est-il plutôt fragile ?', key: 'health', value: 'faible' }
  , { text: 'Est-ce une fille ?', key: 'gender', value: 'fille' }
  , { text: 'Est-ce un garçon ?', key: 'gender', value: 'garcon' }
  , { text: 'A-t-il les cheveux noirs ?', key: 'hair', value: 'noir' }
  , { text: 'A-t-il les cheveux rouges ou roux ?', key: 'hair', matches: ['rouge', 'roux'] }
  , { text: 'A-t-il les cheveux bleus ?', key: 'hair', value: 'bleu' }
  , { text: 'A-t-il les cheveux violets ?', key: 'hair', value: 'violet' }
  , { text: 'A-t-il les cheveux verts ?', key: 'hair', value: 'vert' }
  , { text: 'A-t-il des cheveux ?', key: 'hair', value: 'aucun', invert: true }
  , { text: 'Est-ce un robot ?', key: 'style', value: 'robot' }
  , { text: 'Est-ce une créature ou un monstre ?', key: 'style', matches: ['squelette', 'plante'] }
  , { text: 'A-t-il une apparence humaine ?', key: 'style', value: 'humain' }
];

let candidates = [];
let askedQuestions = [];
let answers = [];
let currentQuestion = null;
const gamePanel = document.querySelector('#game-panel');
const resultPanel = document.querySelector('#result-panel');
const questionText = document.querySelector('#question-text');
const questionHint = document.querySelector('#question-hint');
const questionNumber = document.querySelector('#question-number');
const candidateCount = document.querySelector('#candidate-count');
const progressBar = document.querySelector('#progress-bar');

function chooseQuestion() {
  const available = questions.filter((question) => isQuestionAllowed(question));
  const usefulQuestion = available
    .sort((first, second) => scoreQuestion(second) - scoreQuestion(first))
    .find((question) => scoreQuestion(question) > 0);
  if (usefulQuestion) return usefulQuestion;
  if (askedQuestions.length < 9 && available.length > 0) return available[0];
  const nextCandidate = candidates.find((brawler) => !askedQuestions.some((question) => question.key === 'name' && question.value === brawler.name));
  return nextCandidate
    ? { text: `Est-ce ${nextCandidate.name} ?`, key: 'name', value: nextCandidate.name }
    : null;
}

function isQuestionAllowed(question) {
  if (askedQuestions.includes(question)) return false;
  const previousAnswers = answers.filter((answer) => answer.key === question.key);
  if (previousAnswers.some((answer) => answer.type === 'unknown')) return false;
  if (previousAnswers.some((answer) => answer.question === question)) return false;
  if (previousAnswers.some((answer) => answer.type === 'yes' && !question.values)) return false;
  return true;
}

function scoreQuestion(question) {
  if (question.values) {
    const counts = question.values.map((value) => candidates.filter((brawler) => brawler[question.key] === value).length);
    return candidates.length - Math.max(...counts);
  }
  if (question.matches) {
    const matches = candidates.filter((brawler) => question.matches.includes(brawler[question.key])).length;
    return Math.min(matches, candidates.length - matches);
  }
  const matches = candidates.filter((brawler) => brawler[question.key] === question.value).length;
  return Math.min(matches, candidates.length - matches);
}

function updateQuestion() {
  if (candidates.length <= 1 || askedQuestions.length >= 10) return showResult();
  currentQuestion = chooseQuestion();
  if (!currentQuestion) return showResult();
  askedQuestions.push(currentQuestion);
  configureAnswerButtons();
  questionText.textContent = currentQuestion.text;
  if (currentQuestion.key === 'health') {
    questionHint.textContent = 'Repère : beaucoup = 7 000 PV ou plus · moyen = de 4 000 à 6 999 PV · petit = moins de 4 000 PV environ.';
    questionHint.classList.remove('is-hidden');
  } else if (currentQuestion.key === 'rarity') {
    questionHint.textContent = 'Repère : commune · rare · super rare · épique · mythique · légendaire.';
    questionHint.classList.remove('is-hidden');
  } else {
    questionHint.textContent = '';
    questionHint.classList.add('is-hidden');
  }
  questionNumber.textContent = askedQuestions.length;
  candidateCount.textContent = candidates.length;
  progressBar.style.width = `${Math.max(12, 100 - (askedQuestions.length - 1) * 13)}%`;
}

function configureAnswerButtons() {
  const yesButton = document.querySelector('.answer-button.yes');
  const mediumButton = document.querySelector('.answer-button.medium');
  const noButton = document.querySelector('.answer-button.no');

  if (currentQuestion.values) {
    yesButton.textContent = 'Oui';
    yesButton.dataset.answer = 'loin';
    mediumButton.classList.remove('is-hidden');
    noButton.textContent = 'Proche';
    noButton.dataset.answer = 'proche';
    return;
  }

  yesButton.textContent = 'Oui';
  yesButton.dataset.answer = 'yes';
  mediumButton.classList.add('is-hidden');
  noButton.textContent = 'Non';
  noButton.dataset.answer = 'no';
}

function startGame() {
  candidates = [...brawlers];
  askedQuestions = [];
  answers = [];
  resultPanel.classList.add('is-hidden');
  gamePanel.classList.remove('is-hidden');
  updateQuestion();
}

function answer(answerType) {
  if (!currentQuestion) return;
  answers.push({
    key: currentQuestion.key,
    question: currentQuestion,
    type: currentQuestion.values ? 'value' : answerType,
    value: currentQuestion.values ? answerType : currentQuestion.value
  });
  if (answerType !== 'unknown') {
    candidates = candidates.filter((brawler) => {
      if (currentQuestion.values) {
        return !brawler[currentQuestion.key] || brawler[currentQuestion.key] === answerType;
      }
      if (brawler[currentQuestion.key] === undefined) return true;
      const matches = currentQuestion.matches
        ? currentQuestion.matches.includes(brawler[currentQuestion.key])
        : currentQuestion.invert
        ? brawler[currentQuestion.key] !== currentQuestion.value
        : brawler[currentQuestion.key] === currentQuestion.value;
      return answerType === 'yes' ? matches : !matches;
    });
  }
  if (candidates.length === 0) return showNoMatch();
  updateQuestion();
}

function showResult() {
  gamePanel.classList.add('is-hidden');
  resultPanel.classList.remove('is-hidden');
  const guess = candidates[0];
  document.querySelector('#result-title').textContent = guess ? 'Tu pensais à...' : 'Je sèche !';
  document.querySelector('#guess-card').innerHTML = guess
    ? `<strong>${guess.name}</strong><span>${guess.rarity} · ${guess.type}</span><span class="image-status">Recherche de l’image...</span>`
    : '<strong>Aucun brawler</strong><span>Essaie avec des réponses différentes.</span>';
  document.querySelector('#result-message').textContent = guess
    ? `Je l’ai trouvé en ${askedQuestions.length} question${askedQuestions.length > 1 ? 's' : ''}.`
    : 'Une réponse ne correspondait pas aux données actuelles.';
  if (guess) loadWikipediaImage(guess.name);
}

async function loadWikipediaImage(brawlerName) {
  const status = document.querySelector('.image-status');
  if (!status) return;
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    origin: '*',
    prop: 'pageimages',
    pithumbsize: '500',
    titles: `${brawlerName} (Brawl Stars)`
  });

  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
    if (!response.ok) throw new Error('Wikipedia indisponible');
    const data = await response.json();
    const page = Object.values(data.query.pages)[0];
    if (!page?.thumbnail?.source) throw new Error('Image absente');

    const image = document.createElement('img');
    image.className = 'guess-image';
    image.alt = `Image de ${brawlerName}`;
    image.src = page.thumbnail.source;
    status.replaceWith(image);
  } catch {
    status.textContent = 'Image Wikipédia indisponible';
  }
}

function showNoMatch() {
  candidates = [];
  showResult();
}

document.querySelector('#start-button').addEventListener('click', startGame);
document.querySelector('#play-again-button').addEventListener('click', startGame);
document.querySelector('#restart-button').addEventListener('click', startGame);
document.querySelector('#wrong-button').addEventListener('click', startGame);
document.querySelectorAll('.answer-button').forEach((button) => {
  button.addEventListener('click', () => answer(button.dataset.answer));
});
