// Array of ideologies with their details
const ideologies = [
    {
        title: "Capitalism",
        shortDesc: "Focuses on private ownership and profit-making.",
        details: "Meaning: Economic system based on free markets and private ownership.<br>"
               + "Example: The United States follows a capitalist economy.<br>"
               + "Simple Explanation: People own businesses and compete to make money."
    },
    {
        title: "Socialism",
        shortDesc: "Advocates for collective ownership and equal wealth distribution.",
        details: "Meaning: Resources and production are owned by the community or government.<br>"
               + "Example: Countries like Sweden and Norway have strong socialist policies.<br>"
               + "Simple Explanation: The government provides basic needs for free."
    },
    {
        title: "Communism",
        shortDesc: "A radical form of socialism with no private property.",
        details: "Meaning: A system where all property is publicly owned, and everyone is equal.<br>"
               + "Example: The former Soviet Union practiced communism.<br>"
               + "Simple Explanation: Everyone gets the same resources, and no one owns anything personally."
    },
    {
        title: "Egalitarianism",
        shortDesc: "Promotes equality regardless of class, race, or gender.",
        details: "Meaning: Belief that all people should be treated equally.<br>"
               + "Example: The civil rights movement fought for egalitarian principles.<br>"
               + "Simple Explanation: Everyone should have equal rights and opportunities."
    },
    {
        title: "Neo-liberalism",
        shortDesc: "Encourages free markets, privatization, and globalization.",
        details: "Meaning: A modern form of liberalism focusing on free trade and economic growth.<br>"
               + "Example: The World Bank promotes neoliberal policies.<br>"
               + "Simple Explanation: The government should not interfere in businesses too much."
    },
    {
        title: "Feminism",
        shortDesc: "Advocates for women's rights and gender equality.",
        details: "Meaning: A movement that seeks equal rights for women.<br>"
               + "Example: Women's suffrage movements fought for voting rights.<br>"
               + "Simple Explanation: Women should have equal rights as men."
    },
    {
        title: "Anarchism",
        shortDesc: "Opposes all forms of government and authority.",
        details: "Meaning: A political philosophy that advocates self-governed societies.<br>"
               + "Example: The Spanish Revolution had anarchist influences.<br>"
               + "Simple Explanation: No government, people govern themselves."
    },
    {
        title: "Conservatism",
        shortDesc: "Prefers tradition and gradual change over radical reform.",
        details: "Meaning: A political ideology that values tradition and stability.<br>"
               + "Example: Many conservative parties oppose sudden social change.<br>"
               + "Simple Explanation: Change should be slow and respect traditions."
    },
    {
        title: "Liberalism",
        shortDesc: "Supports individual freedoms and limited government intervention.",
        details: "Meaning: A belief in personal freedoms, democracy, and free markets.<br>"
               + "Example: Classical liberalism influenced American democracy.<br>"
               + "Simple Explanation: People should have freedom, and the government should not control too much."
    },
];

// Function to create and display ideology cards
function displayIdeologies() {
    const container = document.getElementById("ideologies-container");

    ideologies.forEach(ideology => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${ideology.title}</h3>
            <p>${ideology.shortDesc}</p>
            <div class="card-details">${ideology.details}</div>
        `;
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
        container.appendChild(card);
    });
}

// Load ideologies on page load
document.addEventListener("DOMContentLoaded", displayIdeologies);
