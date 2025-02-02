const darkModeToggle = document.getElementById('darkModeToggle');
let darkMode = true; 

document.body.classList.add('dark-mode');
document.body.classList.remove('light-mode');
darkModeToggle.addEventListener('click', () => {
    if (darkMode) {
        if (confirm("Willst du zum light mode?")) {
            if (confirm("Bist du dir sicher?")) {
                let countdown = 10;
                const countdownDiv = document.createElement('div');
                countdownDiv.classList.add('countdown');
                countdownDiv.innerText = countdown;
                document.body.appendChild(countdownDiv);

                const countdownInterval = setInterval(() => {
                    countdown -= 1;
                    countdownDiv.innerText = countdown;

                    if (countdown === 0) {
                        countdownDiv.innerText = "Brace yourself!";
                        setTimeout(() => {
                            countdownDiv.classList.add('flash');
                            document.body.classList.remove('dark-mode');
                            document.body.classList.add('light-mode');
                            darkMode = false;
                            setTimeout(() => countdownDiv.remove(), 500); 

                            setTimeout(() => {
                                const userResponse = confirm("Zu Light mode switchen?");
                                if (userResponse) {
                                    alert("Okay.");
                                } else {
                                    alert("Geändert.");
                                    document.body.classList.remove('light-mode');
                                    document.body.classList.add('dark-mode');
                                    darkMode = true;
                                }
                            }, 5000);
                        }, 500);
                        clearInterval(countdownInterval);
                    }
                }, 1000);
            }
        }
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        darkMode = true;
    }
});

