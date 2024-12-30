export function CheckUrl(url) {
    // Basic check to make sure the URL is not empty
    if (!url || url.trim() === "") {
        return false;
    }

    // Regular expression to validate the URL
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + 
        '(www\\.)?' + 
        '[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}(/.*)?$', 'i' 
    );

    // Return true if the URL matches the pattern, else false
    return pattern.test(url);
}
