import { analyzeArticle } from './apiHandler';

const getSentimentText = (polarity) => {
  switch (polarity) {
    case "P+":
      return "Positive and Strongly Positive";
    case "P":
      return "Positive";
    case "NEU":
      return "Neutral";
    case "N":
      return "Negative";
    case "N+":
      return "Negative and Strongly Negative";
    case "NONE":
      return "No sentiment";
    default:
      return "Invalid data";
  }
};

export const handleSubmit = async (event) => {
  event.preventDefault();

  const url = document.getElementById('url').value;
  const results = await analyzeArticle(url);

  document.getElementById('polarity').innerText = `Polarity: ${getSentimentText(results.polarity)}`;
  if (results.polarity === "NONE") document.getElementById('polarity').style.color = "red";
  else document.getElementById('polarity').style.color = "green";
  document.getElementById('agreement').innerText = `Agreement: ${results.agreement}`;
  document.getElementById('subjectivity').innerText = `Subjectivity: ${results.subjectivity}`;
  document.getElementById('confidence').innerText = `Confidence: ${results.confidence}`;
  document.getElementById('irony').innerText = `Irony: ${results.irony}`;
  if (results.irony === "NONE") document.getElementById('irony').style.color = "red";
  else document.getElementById('irony').style.color = "green";
};
