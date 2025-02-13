// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all "Add to Cart" buttons
    const buttons = document.querySelectorAll("button");

    // Add event listeners to each button
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Find the row of the clicked button
            var row = button.closest('tr');
            // Get the book name from the row (assuming it's in the 3rd cell)
            var bookName = row.cells[2].innerText.split("\n")[0].replace("BOOK: ", "").trim();
            // Display the message
            alert(bookName + " added to cart!");
        });
    });
});
