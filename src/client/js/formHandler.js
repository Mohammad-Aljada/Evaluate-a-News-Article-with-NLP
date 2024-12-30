import { CheckUrl } from './CheckUrl.js';
export const handleSubmit = async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const errorMessage = document.getElementById('error-message');
  
    // Check if the input is empty
    if (!url) {
      errorMessage.textContent = 'URL cannot be empty.';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Validate the URL using CheckUrl function
    if (!CheckUrl(url)) {
      errorMessage.textContent = 'Please enter a valid URL.';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Hide error message if URL is valid
    errorMessage.style.display = 'none';
    try {
        const response = await fetch(
            'http://localhost:3000/sentiment',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url })
            }

        );
        const data = await response.json();
        console.log(data) // This Debug Line;

        document.getElementById('polarity').innerText = `Polarity: ${data.score_tag}`;
        document.getElementById('agreement').innerText = `Agreement: ${data.agreement}`;
        document.getElementById('confidence').innerText = `Confidence: ${data.confidence}`;
        document.getElementById('subjectivity').innerText = `Subjectivity: ${data.subjectivity}`;
        document.getElementById('irony').innerText = `Irony: ${data.irony}`;
    } catch (error) {
        // Handle and log errors properly
        if (error.response) {
            // If error response exists, log server-side error details
            console.error('Error analyzing article:', error.response.data);
        } else if (error.request) {
            // If no response was received, log the request error
            console.error('No response from server:', error.request);
        } else {
            // General error (e.g., misconfiguration)
            console.error('Error:', error.message);
        }
        return { error: 'Failed to analyze the article. Please try again later.' };
    }


};
