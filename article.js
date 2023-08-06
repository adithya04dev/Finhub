      
      // Create XHR object
      const xhr = new XMLHttpRequest();
      
      // Open XHR request
      xhr.open("GET", "https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news");
xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
xhr.setRequestHeader("X-RapidAPI-Host", "yahoo-finance15.p.rapidapi.com");
      // Set response type
      
      
      // Handle XHR load event
      xhr.onload = function() {
        if (xhr.status === 200) {
         let newsData = JSON.parse(xhr.responseText)
         console.log(newsData)
        const newsList = document.getElementById("news-list");
        
        // Loop through news data and create news items
       
       
       
       
       
       
        newsData.forEach(newsItem => {
          const itemContainer = document.createElement("div");
          itemContainer.classList.add("news-item");
          
          const titleElement = document.createElement("div");
          titleElement.classList.add("news-title");
          titleElement.textContent = newsItem.title;
          
          const descriptionElement = document.createElement("div");
          descriptionElement.classList.add("news-details");
          descriptionElement.innerText =`${newsItem.source}        |         ${new Date(newsItem.pubDate).toLocaleString()}`
          
          const linkElement = document.createElement("a");
          linkElement.classList.add("news-link");
          linkElement.textContent = "Read more";
          linkElement.href = newsItem.link;
          
          itemContainer.appendChild(titleElement);
          itemContainer.appendChild(descriptionElement);
          itemContainer.appendChild(linkElement);
          
          newsList.appendChild(itemContainer);
        });
      // Send XHR request
      
    };
    
      
    }
    xhr.send();
    console.log("outer")
    
