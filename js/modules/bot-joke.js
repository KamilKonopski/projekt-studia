const jokes = [
  "Dlaczego CSS nie dogaduje się z HTML? Bo HTML mówi za dużo, a CSS tylko go stylizuje.",
  "Dlaczego frontendowiec płakał? Bo jego div-y nie miały sensu.",
  "Programista HTML wchodzi do baru... <bar>Nie serwujemy tutaj HTML</bar>.",
  "Dlaczego JavaScript developer nie może znaleźć żony? Bo ciągle zmienia typy.",
  "Czemu programista nienawidzi zimy? Bo zamarzają mu zmienne globalne.",
  "Jak nazywa się samotny element HTML? Self-closing.",
  "Największy wróg web developera? Internet Explorer. Nawet po śmierci straszy.",
  "Dlaczego web developer nie chodzi do lasu? Bo boi się zagnieżdżonych liści.",
  "Czemu React developer nie może się obudzić? Bo jego stan jest niezmienny.",
  "Czym różni się div od span-a? Span przynajmniej wie, gdzie jest.",
  "Dlaczego silnik gry zwolnił? Bo nie ogarniał fizyki życia.",
  "Game developer idzie na randkę... i wraca z bugiem w sercu.",
  "Gracz: 'To nie błąd, to feature!' - Game Dev: 'Dokładnie tak!'",
  "Dlaczego AI w grach nigdy nie zdaje testów? Bo zawsze idzie tą samą ścieżką.",
  "Jak poznać, że dev crunchuje? Kiedy jego NPC są bardziej żywi niż on.",
  "Co robi game dev, gdy kod nie działa? Restartuje silnik i siebie.",
  "Game developer na imprezie: 'Muszę wracać, mam jeszcze do wyrenderowania życie prywatne.'",
  "Dlaczego w grze są tylko dwa levele? Bo deadline był wczoraj.",
  "Silnik Unity wchodzi do baru... i od razu się crashuje.",
  "Dlaczego dev nie lubi graczy? Bo zawsze znajdą bugi, których on nie widzi.",
];

const botContainer = document.getElementById("bot-container");
const botJoke = document.getElementById("bot-joke");
const botCloseBtn = document.getElementById("bot-close");

export function showBotJoke() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  botJoke.textContent = joke;
  botContainer.classList.add("show");

  setTimeout(() => {
    botContainer.classList.remove("show");
  }, 20000);
}

botCloseBtn.addEventListener("click", () => {
  botContainer.classList.remove("show");
});

export function scheduleNextJoke(min = 120000, max = 180000) {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(() => {
    showBotJoke();
    scheduleNextJoke();
  }, delay);
}
