async function shortenUrl() {
    const url = document.getElementById('url').value;
    const encodedUrl = encodeURIComponent(url);
  
    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodedUrl}`);
      if (response.ok) {
        const data = await response.text();
        document.getElementById('results').innerHTML = `Shortened URL: <a href="${data}" target="_blank">${data}</a>`;
      } else {
        throw new Error('Error shortening URL');
      }
    } catch (error) {
      console.error(error);
      document.getElementById('results').innerHTML = 'Error shortening URL';
    }
  }

//Rough Code
  
  // let btn = document.getElementById("shorten");

// btn.addEventListener('click', short);


// async function short(){
//     let longURL = document.getElementById("longurl").value;
//     let shortURL = document.getElementById("shorturl");

//     const result = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`);
//     const data = await result.json();

//     shortURL.value = data.result.short_link2;
// }
// async function shortUrl(){
//     const url=document.getElementById("url").value;
//     const response=await fetch('https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}');
//     if (response.ok) {
//         const data=await response.text();
//         document.getElementById('results').innerHTML = 'shortend Url= <a href="${data}" target="_blank">${data}<a/>';
        
//     }
//     else{
//         document.getElementById('results').innerHTML="Error Shortening"
//     }
// }