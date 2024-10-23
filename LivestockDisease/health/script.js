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