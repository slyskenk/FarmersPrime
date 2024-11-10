<script>
    // Function to show the modal with animal details
    function showDetails(name, vaccinated, age, breed) {
        // Set the content of the modal based on the animal details passed as arguments
        document.getElementById("animal-name").innerText = name;
        document.getElementById("vaccination-status").innerText = vaccinated;
        document.getElementById("animal-age").innerText = age;
        document.getElementById("animal-breed").innerText = breed;

        // Display the modal by changing its style to "block"
        document.getElementById("modal").style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        // Hide the modal by setting its display style to "none"
        document.getElementById("modal").style.display = "none";
    }
</script>
