    // Function to set the font size and save it to localStorage
    function selectFontSize(fontSize) {
        document.getElementById('heading').style.fontSize = fontSize + 'px';
        localStorage.setItem('fontSize', fontSize);
    }

    // Function to load the selected font size from localStorage on page load
    window.onload = function () {
        var savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            document.getElementById('heading').style.fontSize = savedFontSize + 'px';
        }
    };