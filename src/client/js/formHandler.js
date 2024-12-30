import { CheckUrl } from './CheckUrl.js';
export const handleSubmit = async (event) => {
    event.preventDefault();

    const url = document.getElementById('url').value;
    if (!CheckUrl(url)) {
        console.error('Invalid URL');
        alert('Please provide a valid URL.');
        return;
    }
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
