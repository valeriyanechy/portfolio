// Custom styling function
function logWithStyle(message, styles) {
    console.log('%c' + message, styles.join(';'));
}

// Styled messages
logWithStyle('Oh hey there! You are a curious one, huh...', ['color: #2E68F6', 'font-size: 30px', 'font-weight: bold', 'background-color: #FDF9EF', 'padding: 20px']);
logWithStyle('It is totally fine! Welcome to my portfolio!', ['color: #2E68F6', 'font-size: 16px', 'padding: 20px', 'background-color: #FFF3D9']);
