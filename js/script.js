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

