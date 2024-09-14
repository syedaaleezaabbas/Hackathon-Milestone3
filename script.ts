// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();



    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;


    // Type Assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;


        // picture elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



        // Create resume output
        const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
    <p><strong>Full Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>
    <p><strong>Address:</strong> ${address} </p>

    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;



        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        } else {
            console.error('the resume output elements are missing')
        }
    } else {
        console.error('one or more output elements are missing')
    }
})