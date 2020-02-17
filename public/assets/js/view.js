$(function () {
    console.log('this is working!');

    $('#new-burger-submit').on('click', e => {
        // Make sure to preventDefault on a submit event.
        e.preventDefault();

        const newBurger = {
            burger_name: $("#new-burger-input").val().trim(),
            devoured: false
        };

        console.log("newBurger:", newBurger);

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete").on("click", function (e) {
        const id = $(this).data("id");
        console.log(this);
        console.log("id:", id)

        // Send the DELETE request.
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            () => {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-devoured").on("click", function (e) {
        const id = $(this).data("id");
        const devoured = $(this).data("devoured");
        console.log(devoured);
        const newDevouredState = {
            devoured: true
        }

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                console.log("updated burger:", id);
                console.log("new sleep state:", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})