// PUBLIC POST AND PUT FUNCTIONS (FOR FORM SUBMIT AND/OR BUTTON CLICK)

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
        let id = $(this).data("id");
        let newEaten = $(this).data("neweaten");
        let newEatenState = {
            eaten: newEaten
        };
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: newEatenState
        }).then(() => {
            console.log("Changed eaten to", newEaten);
            window.location.reload();
        });
    });

    $("body").on("submit", "#create-form", (event) => {
        event.preventDefault();
        let newBurger = {
            name: $("#burger").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", { 
            method: "POST",
            data: newBurger 
        }).then(() => {
            console.log("Created new burger");
            window.location.reload();
        });
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            method: "DELETE"
        }).then(() => {
            console.log("deleted cat", id);
            location.reload();
        });
    });
});