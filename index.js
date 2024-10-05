const translateBtn = document.getElementById('translateBtn');
const translatableElements = document.querySelectorAll('.translatable');

let isTranslated = false;

const translations = {
    "Overview": "Visão Geral",
    "Greece": "Grécia",
    "Trip Options": "Opções de Viagem",
    "Trip Itinerary": "Roteiro da Viagem",
    "About Greece": "Sobre a Grécia",
    "Greece officially the Hellenic Republic is a country in southeast Europe. Greece has the longest coastline on the Mediterranean Basin, featuring thousands of islands. Learn more": "A Grécia, oficialmente a República Helênica, é um país no sudeste da Europa. A Grécia tem a costa mais longa da Bacia do Mediterrâneo, apresentando milhares de ilhas. Saiba mais",
    "Importance of Greece": "Importância da Grécia",
    "Greece is considered the cradle of Western civilization, being the birthplace of democracy, Western philosophy, Western literature, historiography, political science, major scientific and mathematical principles, theatre and the Olympic Games.": "A Grécia é considerada o berço da civilização ocidental, sendo o local de nascimento da democracia, da filosofia ocidental, da literatura ocidental, da historiografia, da ciência política, de princípios científicos e matemáticos importantes, do teatro e dos Jogos Olímpicos.",
    "Athens": "Atenas",
    "Athens, the capital of Greece, is one of the world's oldest cities spanning over 3000 years. It was a centre for the arts, learning and philosophy, and the home of Plato's Academy and Aristotle's Lyceum.": "Atenas, a capital da Grécia, é uma das cidades mais antigas do mundo, com mais de 3000 anos. Foi um centro para as artes, aprendizado e filosofia, e o lar da Academia de Platão e do Liceu de Aristóteles.",
    "Volcanic Islands": "Ilhas Vulcânicas",
    "Greece has over 1000 islands. The famous ones to visit being Santorini, Mykonos, Crete and Milos islands. The volcanic islands of Santorini, Milos are more popular due to - the volcano!!!.": "A Grécia tem mais de 1000 ilhas. As famosas para visitar são as ilhas Santorini, Mykonos, Creta e Milos. As ilhas vulcânicas de Santorini e Milos são mais populares devido ao vulcão!!!.",
    "The final trip itinerary that we chose": "O roteiro final da viagem que escolhemos",
    "Arrive at Athens. Overnight stay. Chill out": "Chegada a Atenas. Estadia durante a noite. Relaxar",
    "Take a ferry from Athens to Milos islands": "Pegar um ferry de Atenas para as ilhas Milos",
    "Kayaking, Sunset at Plaka castle, Boat ride to Kleftiko.": "Caiaque, pôr do sol no castelo de Plaka, passeio de barco para Kleftiko.",
    "Acropolis, Enjoy Greek food on Athens city walks": "Acrópole, aproveite a comida grega em caminhadas pela cidade de Atenas"
};

translateBtn.addEventListener('click', () => {
    translatableElements.forEach(element => {
        const text = element.innerText;
        
        if (isTranslated) {
            element.innerText = Object.keys(translations).find(key => translations[key] === text) || text;
        } else {
            element.innerText = translations[text] || text;
        }
    });

    isTranslated = !isTranslated; 
    translateBtn.innerText = isTranslated ? "Translate to English" : "Translate to Portuguese"; 
});
