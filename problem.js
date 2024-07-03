document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('specific-problem');
    const maxCharsPerLine = 98;

    textarea.addEventListener('input', function(event) {
        let lines = textarea.value.split('\n');
        let newText = '';

        lines.forEach((line, index) => {
            // Ensure each line does not exceed maxCharsPerLine characters
            while (line.length > maxCharsPerLine) {
                newText += line.slice(0, maxCharsPerLine) + '\n'; // Add newline after maxCharsPerLine characters
                line = line.slice(maxCharsPerLine);
            }
            newText += line;
            if (index !== lines.length - 1) {
                newText += '\n'; // Add newline if it's not the last line
            }
        });

        textarea.value = newText;
        adjustTextareaHeight(); // Adjust textarea height after updating content
    });

    // Function to adjust textarea height based on content
    function adjustTextareaHeight() {
        textarea.style.height = 'auto'; // Reset height to auto to compute content height
        textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight (content height)
    }

    // Call adjustTextareaHeight initially to set correct height
    adjustTextareaHeight();
});
