const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};

learning.topic = "JS";
learning.learningGoals = ["Build JS Programs","Utilize JS Properties in Portfolio Projects",
"Understanding APIs and JSON files","Memorizing JS Common Properties"];
learning.category = "Front End Web Development";
learning.topicImportance = "High";

console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);
console.log(learning);

topicElement.innerText = `I’m learning ${learning.topic}`;
topicElement.classList.remove("hide");