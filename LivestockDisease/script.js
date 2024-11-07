function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // Hide all content when sidebar closes
    const contents = document.getElementsByClassName('menu-content');
    for (let content of contents) {
        content.style.display = 'none';
    }
}

function showContent(type) {
    // Hide all content first
    const contents = document.getElementsByClassName('menu-content');
    for (let content of contents) {
        content.style.display = 'none';
    }

    // Show selected content
    const selectedContent = document.getElementById(type + 'Content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

const diseases = [

{
    name: "Pest des Petit Ruminants",
    description: "is an internationally notifiable disease caused by a Morbillivirus",
    symptoms: "Fever, cough, diarrhea, sores",
    category: "Notifiable"
},
{
    name: "Foot-and-Mouth Disease",
    description: " is a severe, fast-spreading viral disease.",
    symptoms: "shivering. sores",
    category: "Viral"
},
{
    name: "Pest des Petit Ruminants",
    description: "is an internationally notifiable disease caused by a Morbillivirus",
    symptoms: "Fever, cough, diarrhea, sores",
    category: "Notifiable"
},
{
    name: "Foot-and-Mouth Disease",
    description: " is a severe, fast-spreading viral disease.",
    symptoms: "shivering. sores",
    category: "Viral"
},
{
    name: "Pest des Petit Ruminants",
    description: "is an internationally notifiable disease caused by a Morbillivirus",
    symptoms: "Fever, cough, diarrhea, sores",
    category: "Notifiable"
},
{
    name: "Foot-and-Mouth Disease",
    description: " is a severe, fast-spreading viral disease.",
    symptoms: "shivering. sores",
    category: "Viral"
},



];

function createDiseaseCard(disease) {
const card = document.createElement('div');
card.className = 'disease-card';
card.innerHTML = `
    <div class="card-header">
        <h3>${disease.name}</h3>
        <div class="card-buttons">
            <button class="btn btn-delete" onclick="deleteDisease('${disease.name}')">Delete</button>
        </div>
    </div>
    <p><strong>Category:</strong> ${disease.category}</p>
    <p><strong>Description:</strong> ${disease.description}</p>
    <p><strong>Symptoms:</strong> ${disease.symptoms}</p>
`;
return card;
}

function renderDiseases(diseasesToShow) {
const container = document.getElementById('diseaseContainer');
container.innerHTML = ''; // Clear existing cards
diseasesToShow.forEach(disease => {
    container.appendChild(createDiseaseCard(disease));
});
}

function scrollCards(direction) {
const container = document.getElementById('diseaseContainer');
const cardWidth = document.querySelector('.disease-card').offsetWidth + 20; // card width + gap

if (direction === 'right') {
    container.scrollLeft += cardWidth;
} else {
    container.scrollLeft -= cardWidth;
}
}
renderDiseases(diseases)