function generateImage() {
    // retrives text from input field
    const text = document.getElementById('textInput').value;
    //Retrieves the image container element
    const imageContainer = document.getElementById('imageContainer');
    
    //Generates a placeholder image URL based on the entered text 
    const placeholderImageUrl = 'https://source.unsplash.com/featured/?' + text;
    
    //Creates an image element 
    const imageElement = document.createElement('img');

    //Sets the source and class attribute of the image element 
    imageElement.setAttribute('src', placeholderImageUrl);
    imageElement.setAttribute('class', 'img-fluid');

    imageElement.style.maxWidth = '80%'; // Set maximum width
    imageElement.style.height = 'auto'; // Maintain aspect ratio
    
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);
}