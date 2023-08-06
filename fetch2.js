
const searchFrom = document.querySelector('#stock-form');
const input = document.querySelector('#symb');
searchFrom.addEventListener('submit', retrieve);


function retrieve(e){
//       

    e.preventDefault(); // prevent default form submission behavior
      console.log("hidkle")
      // get the values from the form inputs (replace with your own code)
      var companyName =  document.getElementById("symb").value;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${companyName}&region=US`);
      xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
      xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
      
      xhr.onload = function() {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText)
          console.log(json)
          
          let sector=json.summaryProfile.sector
          let name=json.quoteType.longName;
          let  currentPrice=json.financialData.currentPrice
      
          let totalDebt=json.financialData.fmt
          let totalRevenue=json.financialData.totalRevenue.fmt
          let recommendationKey=json.financialData.recommendationKey
          let ebitda=json.financialData.ebitda.fmt
          let grossProfits=json.financialData.grossProfits.fmt
          let freeCashflow=json.financialData.freeCashflow.fmt

          let marketcap=json.price.marketCap.fmt
          let fiftyTwoWeekHigh=json.summaryDetail.fiftyTwoWeekHigh
          let fiftyTwoWeekLow= json.summaryDetail.fiftyTwoWeekLow

          let summary=json.summaryProfile.longBusinessSummary;
          
        
        }
      }
      xhr.send()    

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
          <h5 class="card-title">Apple Inc.</h5>
          <p class="card-text">${companyName}</p>
          <p class="card-text">Last Price: $120.00</p>
          <p class="card-text">Change: -0.50 (-0.42%)</p>
        </div>
      </div>
      <div class="card mt-4">
        <div class="card-header bg-secondary text-white">
          Key Details
        </div>
        <div class="card-body">
          <ul>
            <li>Market Cap: $2.0 trillion</li>
            <li>P/E Ratio: 36.8</li>
            <li>Dividend Yield: 0.67%</li>
            <li>52-Week High: $150.00</li>
            <li>52-Week Low: $80.00</li>
          </ul>
        </div>
      </div>
      <div class="card mt-4">
          <div class="card-header bg-info text-white">
            About Apple Inc.
          </div>
          <div class="card-body">
            <p class="card-text">${summary}</p>
            <p class="card-text">Founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple is headquartered in Cupertino, California and has operations in over 40 countries. The company is one of the largest technology companies in the world and has a market capitalization of over $2 trillion as of 2021.</p>
          </div>
        </div>
    </div>
  </div>
</div>`;
    //   var stockCardHtml = 
    //     "<p> hello</p>"
    const oldDiv = document.getElementById("coni");
    oldDiv.parentNode.replaceChild(newDiv, oldDiv);
    // var myDiVElem=document.getElementById("coni").innerHTML
    //   myDiVElem.innerHtml= stockCardHtml;
      
 






}