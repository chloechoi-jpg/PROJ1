// Story data structure - define your adventure here
const storyData = {
    start: {
        text: "You find yourself standing in front of an old, mysterious wooden door. The paint is peeling, and a dim light glows from the keyhole. You can hear faint whispers coming from inside. What do you do?",
        choices: [
            { text: "Push the door open and step inside", next: "insideRoom" },
            { text: "Knock on the door respectfully", next: "knockDoor" },
            { text: "Leave and find another way", next: "endingNotReady" }
        ],
        breadcrumb: "Start"
    },

    insideRoom: {
        text: "The door creaks open, revealing a dimly lit room filled with strange artifacts and dusty books. A figure in the shadows looks up at you. 'I've been waiting for you,' the figure says mysteriously.",
        choices: [
            { text: "Ask the figure who they are", next: "meetGuide" },
            { text: "Run back out of the room", next: "endingRan" },
            { text: "Search the room for clues", next: "searchRoom" }
        ],
        breadcrumb: "Start > Inside the Room"
    },

    knockDoor: {
        text: "As you knock, the door slowly opens on its own, creaking eerily. Behind it, you see an elegant hallway lit by candlelight. A friendly voice calls out, 'Welcome! Come in, we've prepared everything for your arrival.'",
        choices: [
            { text: "Enter cautiously", next: "meetGuide" },
            { text: "Ask questions from outside", next: "meetGuide" },
            { text: "Turn around and leave", next: "endingNotReady" }
        ],
        breadcrumb: "Start > Knock Door"
    },

    meetGuide: {
        text: "The figure steps into the light. She's an elderly woman with kind eyes and a warm smile. 'My name is Elara,' she says. 'You have been chosen to find the Lost Artifact. It lies in one of three chambers. Which one will you choose?'",
        choices: [
            { text: "Chamber of Fire - for those with courage", next: "fireChallenge" },
            { text: "Chamber of Water - for those with wisdom", next: "waterChallenge" },
            { text: "Chamber of Wind - for those with cunning", next: "windChallenge" }
        ],
        breadcrumb: "Start > Meet Elara"
    },

    searchRoom: {
        text: "While searching, you find an old journal. It contains clues about a secret path to the artifact. You also notice a map on the wall pointing to the Crystal Mountains. But you also see a warning: 'Only the pure of heart may proceed.' Do you feel worthy?",
        choices: [
            { text: "Believe in yourself and continue", next: "meetGuide" },
            { text: "Doubt yourself and turn back", next: "endingNotReady" },
            { text: "Take the journal and leave", next: "endingWithJournal" }
        ],
        breadcrumb: "Start > Search Room"
    },

    fireChallenge: {
        text: "You enter a chamber surrounded by flames. The heat is intense, but the fire doesn't burn you. A voice echoes: 'Prove your courage by facing your deepest fear.' The flames form a path forward.",
        choices: [
            { text: "Walk through the flames with confidence", next: "endingBraveHero" },
            { text: "Try to extinguish the flames first", next: "endingCleverness" },
            { text: "Hesitate and turn back", next: "endingUnfinished" }
        ],
        breadcrumb: "Start > Meet Elara > Chamber of Fire"
    },

    waterChallenge: {
        text: "You stand before a vast underground lake. Its surface is mirror-like, showing reflections that don't quite match reality. As you look deeper, you see the artifact resting at the bottom. A whisper asks: 'Can you understand the truth beneath the surface?'",
        choices: [
            { text: "Dive into the water to retrieve it", next: "endingWiseOne" },
            { text: "Study the reflections to find the secret", next: "endingSage" },
            { text: "Refuse and go back", next: "endingUnfinished" }
        ],
        breadcrumb: "Start > Meet Elara > Chamber of Water"
    },

    windChallenge: {
        text: "A whirlwind surrounds you in a chamber of swirling air. Voices of shadows speak in riddles: 'What is seen by all but noticed by none, always moving yet never alive?' The artifact floats somewhere in the storm.",
        choices: [
            { text: "Answer: The wind (and prove your cunning)", next: "endingCleverMind" },
            { text: "Try to catch the artifact with your hands", next: "endingLucker" },
            { text: "Wait for the storm to pass", next: "endingUnfinished" }
        ],
        breadcrumb: "Start > Meet Elara > Chamber of Wind"
    },

    // Endings
    endingNotReady: {
        text: "",
        isEnding: true,
        title: "The Path Not Taken",
        content: "You turn back and leave, never learning what could have been. The artifact remains hidden, waiting for someone braver."
    },

    endingRan: {
        text: "",
        isEnding: true,
        title: "Fear Overwhelms",
        content: "Your fear takes over and you run away. The mysterious figure watches you go with a knowing smile, as if this too was expected."
    },

    endingWithJournal: {
        text: "",
        isEnding: true,
        title: "Knowledge Seeker",
        content: "You leave with the journal, becoming a scholar of ancient mysteries. While you never found the artifact itself, the knowledge you gained changed your life forever."
    },

    endingBraveHero: {
        text: "",
        isEnding: true,
        title: "The Brave Hero",
        content: "You confidently walk through the flames and grasp the artifact! It glows with warmth and power. You have proven your courage and are now the guardian of an ancient treasure. Congratulations!"
    },

    endingCleverness: {
        text: "",
        isEnding: true,
        title: "The Clever One",
        content: "Your ingenuity allows you to douse the flames and safely retrieve the artifact. The chamber fills with cool mist as magic recognizes your wit. You've chosen the path of intelligence!"
    },

    endingWiseOne: {
        text: "",
        isEnding: true,
        title: "The Wise One",
        content: "You dive into the water without hesitation. As your fingers touch the artifact, it pulls you to safety on the opposite shore. Your wisdom and trust have led you to victory!"
    },

    endingSage: {
        text: "",
        isEnding: true,
        title: "The Sage",
        content: "By studying the reflections, you realize the truth: the artifact was never at the bottom—it was within you all along. You leave as a enlightened sage, having learned life's greatest lesson."
    },

    endingCleverMind: {
        text: "",
        isEnding: true,
        title: "The Clever Mind",
        content: "Your answer is correct! The whirlwind stops, and the artifact descends gently into your hands. Your cunning and wit have served you well. The artifact shines with approval!"
    },

    endingLucker: {
        text: "",
        isEnding: true,
        title: "Lucky Fortune",
        content: "Against all odds, you manage to catch the artifact as the wind swirls around you. Perhaps luck is its own form of cunning. You emerge triumphant!"
    },

    endingUnfinished: {
        text: "",
        isEnding: true,
        title: "The Journey Continues",
        content: "You turn back, but something tells you this isn't the end of your story. One day, you'll return. The adventure awaits whenever you're ready."
    }
};

let currentNode = 'start';
const visitedNodes = ['start'];

function displayStory() {
    const node = storyData[currentNode];
    const storyContent = document.getElementById('storyContent');
    // Clear previous content
    storyContent.innerHTML = '';

    if (node.isEnding) {
        // Display ending
        const endingDiv = document.createElement('div');
        endingDiv.className = 'ending';
        endingDiv.innerHTML = `
            <h2>${node.title}</h2>
            <p>${node.content}</p>
        `;
        storyContent.appendChild(endingDiv);
    } else {
        // Display story text
        const textDiv = document.createElement('p');
        textDiv.className = 'story-text';
        textDiv.textContent = node.text;
        storyContent.appendChild(textDiv);

        // Display choices
        if (node.choices && node.choices.length > 0) {
            const choicesDiv = document.createElement('div');
            choicesDiv.className = 'choices';

            node.choices.forEach(choice => {
                const button = document.createElement('button');
                button.className = 'choice-btn';
                button.textContent = choice.text;
                button.onclick = () => makeChoice(choice.next);
                choicesDiv.appendChild(button);
            });

            storyContent.appendChild(choicesDiv);
        }
    }
}

function makeChoice(nextNode) {
    currentNode = nextNode;
    if (!visitedNodes.includes(nextNode)) {
        visitedNodes.push(nextNode);
    }
    displayStory();
    // Scroll to top of story
    document.querySelector('.story-content').scrollIntoView({ behavior: 'smooth' });
}

function resetStory() {
    currentNode = 'start';
    visitedNodes.length = 0;
    visitedNodes.push('start');
    displayStory();
    document.querySelector('.story-content').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the story on page load
document.addEventListener('DOMContentLoaded', displayStory);