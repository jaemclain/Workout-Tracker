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


// UPDATE a previous workout
$.get("/api/getWorkout")
    .then(function (response) {
        console.log(response)
        if (response.length != 0) {
            var previousworkout = response[response.length - 1]
            $("#updateexcercise").attr("workoutid", previousworkout._id)
            for (let i = 0; i < previousworkout.excercises.length; i++) {
                $("#previousworkout").append(`
            <tr>
            <td>${previousworkout.excercises[i].excerciseType}</td>
            <td>${previousworkout.excercises[i].name}</td>
            <td>${previousworkout.excercises[i].sets}</td>
            <td>${previousworkout.excercises[i].reps}</td>
            <td>${previousworkout.excercises[i].duration}</td>
            `)
            }
        } else {
            $("#updateexcercise").hide()
        }
    });


$("#updateexcercise").on("click", function (event) {
    event.preventDefault()
    var newWorkout = {
        excercisetype: $("#excercisetype").val(),
        name: $("#name").val(),
        sets: $("#sets").val(),
        reps: $("#reps").val(),
        duration: $("#duration").val(),
    }
    let id = $("#updateexcercise").attr("workoutid")
    console.log(newWorkout, id);
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