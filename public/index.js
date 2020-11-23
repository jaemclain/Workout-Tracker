// Inputs information from User
$("#make-new").on("click", function (event) {
    event.preventDefault()
    var newWorkout = {
        excercisetype: $("#excercisetype").val(),
        name: $("#name").val(),
        sets: $("#sets").val(),
        reps: $("#reps").val(),
        duration: $("#duration").val(),
    }
    console.log(newWorkout);
    // Workout Info saved
    $.post("/api/newWorkout", newWorkout)
        .then(function (response) {
            console.log(response)
            var id = response._id
            $.ajax("/api/updateworkout/" + id,
                {
                    method: "PUT",
                    data: newWorkout
                })
                .then(function (response) {
                    console.log(response)
                    location.reload()
                })
        });
});

