
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

   
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

       
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }


        console.log("Form submitted:", { name, email, message });

        
        form.reset();

       
        alert("Thank you for your message, " + name + "! I will get back to you soon.");
    });
});