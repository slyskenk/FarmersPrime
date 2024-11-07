const maintenanceData = {
    cattle: {
        description: "Cattle require regular feeding, clean water, and shelter. Ensure vaccinations are up-to-date and monitor for any signs of illness.",
        tips: [
            "Provide high-quality hay or pasture.",
            "Ensure access to fresh water at all times.",
            "Implement a regular vaccination schedule.",
            "Keep their living area clean to prevent disease."
        ]
    },
    sheep: {
        description: "Sheep need proper nutrition, shelter from harsh weather, and regular health checks. Watch for parasites and maintain hoof health.",
        tips: [
            "Feed a balanced diet of hay, grains, and minerals.",
            "Provide shade and shelter from extreme weather.",
            "Check for wool and hoof overgrowth regularly.",
            "Implement parasite control measures."
        ]
    },
    goats: {
        description: "Goats are hardy animals but need good nutrition, a clean environment, and regular hoof trimming. Monitor for signs of illness.",
        tips: [
            "Provide a balanced diet including hay, grains, and fresh browse.",
            "Ensure clean and dry housing.",
            "Trim hooves every few months to prevent overgrowth.",
            "Vaccinate against common diseases."
        ]
    },
    pigs: {
        description: "Pigs require a balanced diet, clean living conditions, and social interaction. Monitor for signs of stress or illness.",
        tips: [
            "Feed a complete diet formulated for pigs.",
            "Provide plenty of fresh water.",
            "Keep their living area dry and clean.",
            "Ensure they have space to socialize and exercise."
        ]
    }
};

function showMaintenance(livestock) {
    const infoDiv = document.getElementById("maintenanceInfo");
    const data = maintenanceData[livestock];

    if (data) {
        let htmlContent = `<h3>${livestock.charAt(0).toUpperCase() + livestock.slice(1)} Maintenance</h3>`;
        htmlContent += `<p>${data.description}</p>`;
        htmlContent += `<ul>`;
        data.tips.forEach(tip => {
            htmlContent += `<li>${tip}</li>`;
        });
        htmlContent += `</ul>`;
        infoDiv.innerHTML = htmlContent;
        infoDiv.style.display = "block";
    }
}


let animals = JSON.parse(localStorage.getItem('animals')) || [];

// Sample initial data if no animals exist
if (animals.length === 0) {
    animals = [
        {
            id: "COW001",
            type: "Cattle",
            breed: "Holstein",
            birthDate: "2022-05-15",
            healthStatus: "healthy",
            healthNotes: "Regular vaccination completed. Good appetite.",
        },
        {
            id: "SHEEP002",
            type: "Sheep",
            breed: "Merino",
            birthDate: "2023-02-20",
            healthStatus: "attention",
            healthNotes: "Slight limping, under observation.",
        }
    ];
    localStorage.setItem('animals', JSON.stringify(animals));
}

function displayAnimals() {
    const grid = document.getElementById('animalGrid');
    grid.innerHTML = '';

    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="animal-type">${animal.type} - ${animal.id}</div>
            <div class="health-status ${animal.healthStatus}">${animal.healthStatus.toUpperCase()}</div>
            <p><strong>Breed:</strong> ${animal.breed}</p>
            <p><strong>Birth Date:</strong> ${animal.birthDate}</p>
            <p><strong>Health Notes:</strong></p>
            <p>${animal.healthNotes}</p>
        `;
        grid.appendChild(card);
    });
}

function openModal() {
    document.getElementById('animalModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('animalModal').style.display = 'none';
    document.getElementById('animalForm').reset();
}

function addAnimal(event) {
    event.preventDefault();
    const form = event.target;
    const newAnimal = {
        id: form.id.value,
        type: form.type.value,
        breed: form.breed.value,
        birthDate: form.birthDate.value,
        healthStatus: form.healthStatus.value,
        healthNotes: form.healthNotes.value
    };

    animals.push(newAnimal);
    localStorage.setItem('animals', JSON.stringify(animals));
    displayAnimals();
    closeModal();
}

// Initial display
displayAnimals();


 // DOM Elements
 const modal = document.getElementById('recordModal');
 const addRecordBtn = document.getElementById('addRecord');
 const closeModalBtn = document.getElementById('closeModal');
 const recordForm = document.getElementById('recordForm');
 const recordsContainer = document.getElementById('recordsContainer');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');

 // Store records
 let records = [];
 let currentIndex = 0;

 // Event Listeners
 addRecordBtn.addEventListener('click', () => modal.style.display = 'block');
 closeModalBtn.addEventListener('click', () => modal.style.display = 'none');

 recordForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     const newRecord = {
         id: Date.now(),
         animalType: document.getElementById('animalType').value,
         date: document.getElementById('dateOfRecord').value,
         notes: document.getElementById('notes').value
     };

     records.push(newRecord);
     updateCarousel();
     recordForm.reset();
     modal.style.display = 'none';
 });

 prevBtn.addEventListener('click', () => {
     if (currentIndex > 0) {
         currentIndex--;
         updateCarousel();
     }
 });

 nextBtn.addEventListener('click', () => {
     if (currentIndex < records.length - 1) {
         currentIndex++;
         updateCarousel();
     }
 });

 function updateCarousel() {
     recordsContainer.innerHTML = '';
     
     if (records.length === 0) {
         recordsContainer.innerHTML = '<div class="record-card">No records yet</div>';
         return;
     }

     records.forEach((record, index) => {
         const card = document.createElement('div');
         card.className = 'record-card';
         card.innerHTML = `
             <h3>${record.animalType}</h3>
             <p>Date: ${record.date}</p>
             <p>Notes: ${record.notes}</p>
             <button onclick="deleteRecord(${record.id})">Delete</button>
         `;
         recordsContainer.appendChild(card);
     });

     recordsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
     
     // Update button states
     prevBtn.disabled = currentIndex === 0;
     nextBtn.disabled = currentIndex === records.length - 1;
 }

 function deleteRecord(id) {
     records = records.filter(record => record.id !== id);
     if (currentIndex >= records.length) {
         currentIndex = Math.max(0, records.length - 1);
     }
     updateCarousel();
 }

 // Initialize
 updateCarousel();

 // Close modal when clicking outside
 window.addEventListener('click', (e) => {
     if (e.target === modal) {
         modal.style.display = 'none';
     }
 });