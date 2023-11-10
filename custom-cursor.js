const customCursor = document.getElementById('customCursor');

// Listen for mousemove events on the document
document.addEventListener('mousemove', (e) => {
    // Update the cursor position to follow the mouse pointer
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});
