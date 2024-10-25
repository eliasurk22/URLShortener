async function shortenURL() {
    var urlInput = document.getElementById("urlInput").value;
    
    if (!urlInput) {
        alert("Please enter a URL");
        return;
    }

    try {
        var response = await fetch('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(urlInput));
        var shortenedURL = await response.text();

        document.getElementById("shortenedURL").innerHTML = shortenedURL;
        document.getElementById("shortenedURL").href = shortenedURL;
        document.getElementById("result").style.display = "";
    } catch (error) {
        console.error('Error shortening URL:', error);
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("shortenedURL").href;

    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error('Error copying to clipboard: ', err);
        });
}
