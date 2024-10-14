document.querySelectorAll('a[href^="#"]').forEach(anchor => {  // for smooth scrolling behavioru
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById("project-modal");
const projectCards = document.querySelectorAll(".project-card");
const closeBtn = document.getElementsByClassName("close")[0];

//projects popup description
const projectDetails = {
    1: {
        title: "E-commerce Website",
        image: "/",
        description: "A fully responsive online store built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure checkout process. The backend uses Express.js and PostgressSQL for data storage."
    },
    2: {
        title: "NFTmarketPlace",
        image: "/",
        description: "A sleek NFTmarketplace application using reactjs and solidity, uses IPFS server for deployment of nft images along with its metaData."
    },
    3: {
        title: "Task Manager",
        image: "/",
        description: "A full-stack task management system with user authentication. Built with React for the frontend and Node.js/Express for the backend. Features include task creation, updating, deletion, and categorization. Data is stored in a PostgreSQL database."
    }
};

projectCards.forEach(card => { // adding click listner to each project card.
    card.addEventListener("click", function() {
        const projectId = this.getAttribute("data-project");
        const project = projectDetails[projectId];
        
        document.getElementById("modal-title").textContent = project.title;
        document.getElementById("modal-image").src = project.image;
        document.getElementById("modal-description").textContent = project.description;
        
        modal.style.display = "block";
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// formvalidation 
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }
    
    if (!isValidEmail(email)) {
        alert("Pease enter a valid email address");
        return;
    }
    
    alert("Forms submitted successfully!");
    form.reset();
});

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}