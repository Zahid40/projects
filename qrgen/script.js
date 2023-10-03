let gen_qr = () => {
    let text_c = document.getElementById('text_cont_input');
    let value_text = text_c.value;
    let raw_url = 'https://quickchart.io/qr?ecLevel=M&dark=3730a3&text=';

    let apiUrl = raw_url + encodeURIComponent(value_text); // Append user input to the URL
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Convert the response to a blob
        return response.blob();
      })
      .then(blob => {
        // Create an object URL from the blob
        const imageUrl = URL.createObjectURL(blob);
        
        // Display the image using an <img> tag
        const qr_div = document.getElementById('qr_div');
        const img = document.createElement('img');
        img.classList = 'w-full h-full';
        img.src = imageUrl;
        qr_div.innerHTML = ''; // Clear any previous content in the div
        qr_div.appendChild(img); // Append the image to the document

        // Show and set the download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = imageUrl;
        downloadLink.download = 'qr_code.png';
        downloadLink.classList = 'flex items-center justify-center mb-2 select-none rounded-lg bg-indigo-500 py-3 px-6 w-8 h-8 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}
