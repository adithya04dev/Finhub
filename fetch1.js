function makeRequest(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
    xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = function() {
      reject(Error('Network Error'));
    };
    xhr.send();
  });
}
const searchButton = document.querySelector('#stock-form');
searchButton.addEventListener('submit',yourFunction)
function yourFunction(e) {
  
    e.preventDefault(); // Add this line to prevent the default behavior
    console.log("hickle")
    const searchTerm = document.getElementById("symb").value;
    const url = `https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${searchTerm}&region=US`;
    makeRequest(url)
      .then(function(response) {
        const json = JSON.parse(response);
        console.log(json)
          
          let sector=json.summaryProfile.sector
          let name=json.quoteType.longName;
          let  currentprice=json.financialData.currentPrice.fmt;
      
          let totalDebt=json.financialData.totalDebt.fmt
          let totalRevenue=json.financialData.totalRevenue.fmt
          let recommendationKey=json.financialData.recommendationKey
          let ebitda=json.financialData.ebitda.fmt
          let grossProfits=json.financialData.grossProfits.fmt
          let freeCashflow=json.financialData.freeCashflow.fmt

          let marketcap=json.price.marketCap.fmt
          let fiftyTwoWeekHigh=json.summaryDetail.fiftyTwoWeekHigh.fmt
          let fiftyTwoWeekLow= json.summaryDetail.fiftyTwoWeekLow.fmt

          let summary=json.summaryProfile.longBusinessSummary;
          
        
        
      

// generate the stock card HTML
const newDiv = document.createElement("div");
newDiv.innerHTML = `<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-primary text-white">
          Stock Summary
        </div>
        <div class="card-body">
          <h5 class="card-title"> ${name}</h5>
          <p class="card-text">Symbol:${searchTerm}</p>
          <p class="card-text">Current Price: ${currentprice}</p>
          <p class="card-text">Sector: ${sector}</p>
          
        </div>
      </div>
      <div class="card mt-4">
        <div class="card-header bg-secondary text-white">
          Key Details
        </div>
        <div class="card-body">
          <ul>
            <li>Market Cap:${marketcap}</li>
            <li>Ebitda: ${ebitda}</li>
            <li>Profit: ${grossProfits}</li>
            <li>Revenue:  ${totalRevenue}</li>
            <li>TotalDebt:  ${totalDebt}</li>
            <li>FreeCashFlow: ${freeCashflow}</li>
            <li>52-Week High: ${fiftyTwoWeekHigh}</li>
            <li>52-Week Low: ${fiftyTwoWeekLow}</li>

            <p class="card-text">Recommendation: ${recommendationKey}</p>
          </ul>
        </div>
      </div>
      <div class="card mt-4">
          <div class="card-header bg-info text-white">
            About ${searchTerm}
          </div>
          <div class="card-body">
            <p class="card-text">${summary}</p>
          </div>
        </div>
    </div>
  </div>
</div>`;
    //   var stockCardHtml = 
    //     "<p> hello</p>"
    // <p class="card-text">Founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple is headquartered in Cupertino, California and has operations in over 40 countries. The company is one of the largest technology companies in the world and has a market capitalization of over $2 trillion as of 2021.</p>

    const oldDiv = document.getElementById("coni");
    oldDiv.parentNode.replaceChild(newDiv, oldDiv);
        // Your code that uses the summary variable goes here
      })
      .catch(function(error) {
        console.log('Request failed', error);
      
  });
}
