function buildSymptomList() {
    var symptoms = ["Cough", "Headache", "Sore Throat"];
    var symptomList = "<ul class='list-unstyled' style='height: 35.5em'>";
    for (var i = 0; i < symptoms.length; i++) {
        symptomList = symptomList.concat("<li><button class='border--gray list-button' style='height: 7em;' onclick=\"openNav('"+ symptoms[i] + "')\">", symptoms[i], "</button></li>");
    }
    symptomList = symptomList.concat("</ul>");
    console.log(symptomList);
    return symptomList
}

$(document).ready(function () {
    $('#add-new').click(function () {
        // delete button
        $('#add-new').after(buildSymptomList());
        addNew = $('#add-new').detach();
        // replace with list of symptoms
        // on click of things in the list of symptoms, bring up overlay
        // on add, replace list of symptoms with button
    });
});


// var my_field = document.getElementById('searchbar');
//
//       my_field.addEventListener("keyup", function (event) {
//           if (event.keyCode == 13) {
//               event.preventDefault();
//
//               if (my_field.value.length != 0) {
//                   console.log(my_field.value);
//                   openNav(my_field.value);
//                   // Run my specific process with my_field.value
//                   my_field.value = '';
//               }
//           }
//       }, false);
