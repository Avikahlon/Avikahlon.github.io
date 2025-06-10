document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactBtn');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('contactForm');
    const resumeBtn = document.getElementById('b1');
    const linkedinBtn = document.getElementById('b2');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    resumeBtn.onclick = function() {
        window.open('path/to/your/resume.pdf', '_blank');
    }

    linkedinBtn.onclick = function() {
        window.open('https://www.linkedin.com/in/abhijeet-singh-a14827236/', '_blank');
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        try {
            await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
            modal.style.display = "none";
        } catch (error) {
            alert('Oops! There was a problem submitting your form');
        }
    });
});