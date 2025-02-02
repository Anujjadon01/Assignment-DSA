window.onload = function() {
    sidebar.classList.add('collapsed');
    menuToggle.textContent = '☰';
    menuToggle.style.marginTop = '10px';

    const greetingElement = document.querySelector('greeting');
    const currentHour = new Date().getHours();
    let greetingMessage = '';

    if (currentHour < 10) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;

    // Load tasks from local storage when the page loads
    loadTasks();
};