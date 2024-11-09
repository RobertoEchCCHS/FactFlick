// Array of random facts
const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to complete one rotation, but only 225 Earth days to orbit the Sun.",
    "Bananas are berries, but strawberries aren't!",
    "Octopuses have three hearts, two pump blood to the gills, while the third pumps it to the rest of the body.",
    "A blue whale's heart is so large that a human could swim through its arteries.",
    "A bolt of lightning is five times hotter than the surface of the sun.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Sharks existed before trees. They have been around for over 400 million years!",
    "Wombat poop is cube-shaped to prevent it from rolling away.",
    "The Eiffel Tower can grow by up to 6 inches during the summer due to thermal expansion of the metal."
];

// Function to generate a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact-text").textContent = facts[randomIndex];
}

// Adding event listener to the button
document.getElementById("generate-button").addEventListener("click", getRandomFact);

// Toggle Dark Mode
let darkModeEnabled = false;
document.body.addEventListener("dblclick", () => {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
});
