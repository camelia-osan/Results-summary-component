import data from './data.json' assert {type: 'json'};

let skillParent = document.querySelector(".skillsParent");
console.log(skillParent);
console.log(data);

function populateSkillsContainers() {
    data.map((element, index) => {
        const skillsContainer = document.createElement("div");

        if (index === 0) {
            skillsContainer.id = "reaction";
        } else if (index === 1) {
            skillsContainer.id = "memory";
        } else if (index === 2) {
            skillsContainer.id = "verbal";
        } else if (index === 3) {
            skillsContainer.id = "visual";
        }

        skillsContainer.classList.add("skillsChild");

        const skillIcon = document.createElement("img");

        skillIcon.src = element.icon;
        skillIcon.classList.add("skillsIcon");
        skillIcon.alt = "Skill Image";

        const skillName = document.createElement("p");

        skillName.innerText = element.category;
        skillName.classList.add("skillsName");

        if (index === 0) {
            skillName.id = "reactionText";
        } else if (index === 1) {
            skillName.id = "memoryText";
        } else if (index === 2) {
            skillName.id = "verbalText";
        } else if (index === 3) {
            skillName.id = "visualText";
        }

        const scoreTotal = document.createElement("p");

        scoreTotal.classList.add("testsTotal");

        const score = document.createElement("span");

        score.classList.add("testsScore");
        score.innerText = element.score;

        scoreTotal.appendChild(score);
        scoreTotal.innerHTML += " / 100";

        skillsContainer.appendChild(skillIcon);
        skillsContainer.appendChild(skillName);
        skillsContainer.appendChild(scoreTotal);

        skillParent.appendChild(skillsContainer);
    });
};

populateSkillsContainers();