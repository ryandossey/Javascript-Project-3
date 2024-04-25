'use strict'

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieving form data
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var currentYear = document.getElementById('currentYear').value;

    // Retrieving checkbox values
    var springSemester = document.getElementById('flexCheckDefault').checked;
    var fallSemester = document.getElementById('flexCheckChecked').checked;
    
    // Retrieving radio value
    var selectedRadioValue = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    // Validating form data
    if (!fullName || !email) {
        alert('Name and Email are required fields.');
        return;
    }

    // Creating table row
    var tableRow = document.createElement('tr');

    // Creating table cells
    var fullNameCell = document.createElement('td');
    var emailCell = document.createElement('td');
    var currentYearCell = document.createElement('td');
    var springSemesterCell = document.createElement('td');
    var fallSemesterCell = document.createElement('td');
    var selectedRadioCell = document.createElement('td');

    // Populating table cells
    fullNameCell.textContent = fullName;
    emailCell.textContent = email;
    currentYearCell.textContent = currentYear;

    // Creating checkboxes
    var springSemesterCheckbox = document.createElement('input');
    springSemesterCheckbox.type = 'checkbox';
    springSemesterCheckbox.checked = springSemester;
    springSemesterCell.appendChild(springSemesterCheckbox);
    
    var fallSemesterCheckbox = document.createElement('input');
    fallSemesterCheckbox.type = 'checkbox';
    fallSemesterCheckbox.checked = fallSemester;
    fallSemesterCell.appendChild(fallSemesterCheckbox);

    selectedRadioCell.textContent = selectedRadioValue;

    // Append table cells to table row
    tableRow.appendChild(fullNameCell);
    tableRow.appendChild(emailCell);
    tableRow.appendChild(currentYearCell);
    tableRow.appendChild(springSemesterCell);
    tableRow.appendChild(fallSemesterCell);
    tableRow.appendChild(selectedRadioCell);

    // Append table row to table body
    var tableBody = document.getElementById('registrationTableBody');
    tableBody.appendChild(tableRow);

    // Storing form data in local storage
    var formData = {
        fullName: fullName,
        email: email,
        currentYear: currentYear,
        springSemester: springSemester,
        fallSemester: fallSemester,
        selectedRadio: selectedRadio
    };
    var submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    // Reset form
    document.getElementById('registrationForm').reset();
});