// Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n\n<h3>Personal Information<h3>\n<p><b>Name: </b>".concat(name, "</p>\n<p><b>Email: </b>").concat(email, "</p>\n<p><b>Phone: </b>").concat(phone, "</p>\n<p><b>Address: </b>").concat(address, "</p>\n\n<h3>Education<h3>\n<p>").concat(education, "</p>\n\n<h3>Experience<h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills<h3>\n<p>").concat(skills, "</p>\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
