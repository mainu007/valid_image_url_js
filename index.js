function isValidImageUrl(url) {
  // Regular expression to match a URL
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;

  // Regular expression to match image extensions
  const imageExtensionsRegex = /\.(jpeg|jpg|gif|png)$/i;

  // Test if the URL matches the URL regex and ends with a valid image extension
  return urlRegex.test(url) && imageExtensionsRegex.test(url);
}

// Example usage
const imageUrl = 'https://example.com/image.jpg';
if (isValidImageUrl(imageUrl)) {
  console.log('Valid image URL');
} else {
  console.log('Invalid image URL');
}
