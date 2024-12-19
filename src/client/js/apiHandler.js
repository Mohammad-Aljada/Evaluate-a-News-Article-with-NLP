import axios from 'axios';

export const analyzeArticle = async (url) => {
    try {
        const response = await axios.post('http://localhost:3000/analyze', { url });
        return response.data;
    } catch (error) {
        console.error('Error analyzing article:', error);
        return null;
    }
};
