async function uploadImage() {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);

    try {
        const response = await fetch('/classify', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        document.getElementById('result').innerText = result.prediction;
    } catch (error) {
        console.error('Error:', error);
    }

    // Prevent default form submission
    return false;
}
