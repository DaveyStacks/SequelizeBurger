// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data('id');
        var isDevoured = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax('/devoured/' + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function () {
                console.log("changed devoured status to ", isDevoured.devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
}); 