
        // Function to add a task to the list
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();
    
            if (taskText === "") {
                return; // Don't add empty tasks
            }
    
            const taskList = document.getElementById("taskList");
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span class="task">${taskText}</span>
                <button onclick="markComplete(this)">Mark Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(taskItem);
    
            taskInput.value = ""; // Clear the input field
        }
    
        //  to mark a task as complete
        function markComplete(button) {
            const task = button.parentElement.querySelector(".task");
            task.style.textDecoration = "line-through";
            button.disabled = true;
        }
    
        // to delete a task
        function deleteTask(button) {
            const taskItem = button.parentElement;
            taskItem.remove();
        }
   // Add a 'submit' event listener to the 'contactForm' element
document.getElementById('contactForm').addEventListener('submit', function (e) {
    // Get values of 'name', 'email', and 'phone' input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let valid = true; // Initialize a validation flag

    // Check if 'name' is empty and display an error message if true
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = ''; // Clear the error message
    }

    // Check if 'email' is empty or not 
    if (email.trim() === '' || !isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = ''; // Clear the error message
    }

    // Check if 'phone' is empty or not a valid 
    if (phone.trim() === '' || !isValidPhone(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone is required';
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = ''; // Clear the error message
    }

    // If there are validation errors, prevent the form from being submitted
    if (!valid) {
        e.preventDefault(); // Prevent form submission if there are errors
    }
});

// Function to check if the provided email is valid
function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    return emailRegex.test(email);
}


const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  let scale = 1;
  const animationDuration = 1000; // Animation duration in milliseconds

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < animationDuration) {
      scale = 1 + (elapsedTime / animationDuration) * 0.1; // Adjust the scale factor
      submitBtn.style.transform = `scale(${scale})`;

      requestAnimationFrame(animate);
    } else {
      // Animation complete
      submitBtn.style.transform = "scale(1)";
    }
  }

  requestAnimationFrame(animate);
});
//Accordion
function toggleAccordion(id) {
    var panel = document.getElementById(id);
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
}

// Initially, hide all panels
var accordions = document.querySelectorAll('.list-group.panel');
accordions.forEach(function (panel) {
    panel.style.display = 'none';
});

const interactiveButton = document.getElementById("interactive-button");

// Add a click event listener to the button
interactiveButton.addEventListener("click", function () {
    // Toggle the background color between red and green
    if (interactiveButton.style.backgroundColor === "red") {
        interactiveButton.style.backgroundColor = "green";
    } else {
        interactiveButton.style.backgroundColor = "red";
    }

    // Change the button text
    interactiveButton.textContent = (interactiveButton.textContent === "Add") ? "Added!" : "Add";
});

