// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data('id');
        var devoured = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax('/putDevour/' + id, {
            type: "PUT",
            data: devoured
        }).then(() => location.reload());

    });
});

