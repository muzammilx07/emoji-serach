// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const resultContainer = document.getElementById("result");

    searchBar.addEventListener("input", searchEmoji);
    displayEmojis(emojiList);

    function displayEmojis(emojis) {
        resultContainer.innerHTML = "";
        emojis.forEach((emoji) => {
            const { description, aliases, category, emoji: emojiChar } = emoji;
            const emojiResult = document.createElement("div");

            const emojiCharDiv = document.createElement("div");
            emojiCharDiv.innerHTML = `<strong>${emojiChar}</strong>`;
            emojiResult.appendChild(emojiCharDiv);
            emojiCharDiv.classList.add('emojitxt');

            const descriptionDiv = document.createElement("div");
            descriptionDiv.textContent = description;
            emojiResult.appendChild(descriptionDiv);
            descriptionDiv.classList.add('destxt');

            const aliasesDiv = document.createElement("div");
            aliasesDiv.textContent = `Aliases: ${aliases.join(", ")}`;
            emojiResult.appendChild(aliasesDiv);
            aliasesDiv.classList.add('destxt');

            const categoryDiv = document.createElement("div");
            categoryDiv.textContent = `Category: ${category}`;
            emojiResult.appendChild(categoryDiv);
            categoryDiv.classList.add('destxt');

            resultContainer.appendChild(emojiResult);
        });
    }

    function searchEmoji() {
        const searchTerm = searchBar.value.toLowerCase();
        const uniqueAliases = new Set();

        const filteredEmojis = emojiList.filter((emoji) => {
            const { aliases } = emoji;
            return aliases.some(alias => alias.toLowerCase().includes(searchTerm) && !uniqueAliases.has(alias.toLowerCase()));
        });

        displayEmojis(filteredEmojis);
    }
});
