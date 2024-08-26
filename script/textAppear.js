const typingSpeed = 50; // Speed of typing in milliseconds

function typeText(element, text, index = 0) {
    if (index === 0) {
        element.innerHTML = ''; // Clear the existing content when starting
    }

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeText(element, text, index), typingSpeed);
    } else {
        // Add a blinking cursor at the end of the text
        element.innerHTML += '<span class="cursor"></span>';
    }
}

function startTypingAnimation() {
    const titleElement = document.getElementById('animated-title');
    const descrElement = document.getElementById('animated-descr');

    const titleText = "Hey there! (i'm) Valeriya Nechyporuk";
    const descrText = "Front End Developer & UI/UX Designer";

    // Flags to check if typing has already started
    let titleTyped = false;
    let descrTyped = false;

    // Use IntersectionObserver to detect when the elements are in the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (target.id === 'animated-title' && !titleTyped) {
                    typeText(titleElement, titleText);
                    titleTyped = true; // Mark as typed
                } else if (target.id === 'animated-descr' && !descrTyped) {
                    typeText(descrElement, descrText);
                    descrTyped = true; // Mark as typed
                }

                // Optionally unobserve after typing starts to prevent further triggers
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(titleElement);
    observer.observe(descrElement);
}

document.addEventListener('DOMContentLoaded', startTypingAnimation);