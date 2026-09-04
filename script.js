const brawlers = [
  { name: 'Shelly', rarity: 'commune', type: 'degats', range: 'moyen', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: true },
  { name: 'Colt', rarity: 'commune', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: false },
  { name: 'Bull', rarity: 'rare', type: 'tank', range: 'proche', ranged: false, healer: false, invisible: false, tank: true, robot: false, weapon: true, area: true },
  { name: 'Jessie', rarity: 'rare', type: 'controle', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: true },
  { name: 'Brock', rarity: 'rare', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: true, area: true },
  { name: 'Poco', rarity: 'rare', type: 'support', range: 'moyen', ranged: true, healer: true, invisible: false, tank: false, robot: false, weapon: false, area: true },
  { name: 'El Primo', rarity: 'rare', type: 'tank', range: 'proche', ranged: false, healer: false, invisible: false, tank: true, robot: false, weapon: false, area: true },
  { name: 'Spike', rarity: 'legendary', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: false, weapon: false, area: true },
  { name: 'Leon', rarity: 'legendary', type: 'assassin', range: 'moyen', ranged: true, healer: false, invisible: true, tank: false, robot: false, weapon: false, area: false },
  { name: 'Rico', rarity: 'super rare', type: 'degats', range: 'loin', ranged: true, healer: false, invisible: false, tank: false, robot: true, weapon: true, area: false }
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

knownBrawlerNames.forEach((name) => {
  if (!brawlers.some((brawler) => brawler.name === name)) {
    brawlers.push({ name, rarity: 'inconnue', type: 'inconnu' });
  }
});

const questions = [
  { text: 'Est-ce un brawler légendaire ?', key: 'rarity', value: 'legendary' },
  { text: 'Est-ce que le brawler tire de loin ?', key: 'range', values: ['loin', 'moyen', 'proche'] },
  { text: 'Peut-il soigner ses alliés ?', key: 'healer', value: true },
  { text: 'Peut-il devenir invisible ?', key: 'invisible', value: true },
  { text: 'Est-ce un tank ?', key: 'tank', value: true },
  { text: 'Est-ce un robot ?', key: 'robot', value: true },
  { text: 'Utilise-t-il une arme ?', key: 'weapon', value: true },
  { text: 'Son attaque fait-elle des dégâts de zone ?', key: 'area', value: true },
  { text: 'Est-ce un brawler de soutien ?', key: 'type', value: 'support' }
];

let candidates = [];
let askedQuestions = [];
let currentQuestion = null;
const gamePanel = document.querySelector('#game-panel');
const resultPanel = document.querySelector('#result-panel');
const questionText = document.querySelector('#question-text');
const questionNumber = document.querySelector('#question-number');
const candidateCount = document.querySelector('#candidate-count');
const progressBar = document.querySelector('#progress-bar');

function chooseQuestion() {
  const available = questions.filter((question) => !askedQuestions.includes(question));
  const usefulQuestion = available
    .sort((first, second) => scoreQuestion(second) - scoreQuestion(first))
    .find((question) => scoreQuestion(question) > 0);
  if (usefulQuestion) return usefulQuestion;
  const nextCandidate = candidates.find((brawler) => !askedQuestions.some((question) => question.key === 'name' && question.value === brawler.name));
  return nextCandidate
    ? { text: `Est-ce ${nextCandidate.name} ?`, key: 'name', value: nextCandidate.name }
    : null;
}

function scoreQuestion(question) {
  if (question.values) {
    const counts = question.values.map((value) => candidates.filter((brawler) => brawler[question.key] === value).length);
    return candidates.length - Math.max(...counts);
  }
  const matches = candidates.filter((brawler) => brawler[question.key] === question.value).length;
  return Math.min(matches, candidates.length - matches);
}

function updateQuestion() {
  if (candidates.length <= 1) return showResult();
  currentQuestion = chooseQuestion();
  if (!currentQuestion) return showResult();
  askedQuestions.push(currentQuestion);
  configureAnswerButtons();
  questionText.textContent = currentQuestion.text;
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
  resultPanel.classList.add('is-hidden');
  gamePanel.classList.remove('is-hidden');
  updateQuestion();
}

function answer(answerType) {
  if (!currentQuestion) return;
  if (answerType !== 'unknown') {
    candidates = candidates.filter((brawler) => {
      if (currentQuestion.values) {
        return !brawler[currentQuestion.key] || brawler[currentQuestion.key] === answerType;
      }
      const matches = brawler[currentQuestion.key] === currentQuestion.value;
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
