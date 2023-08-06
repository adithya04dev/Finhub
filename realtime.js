
const xhr = new XMLHttpRequest();
let arr=["GOOGL","AAPL","MSFT","AMZN","TSLA","META","ADBE","NVDA","PEP"]
let name=[]
let price=[]
let perc=[]
let chan=[]
let code=arr[0]
let quo=document.getElementById('quoai')
for(i=1;i<9;i++){
  code+="%2C"
  code+=arr[i]
}
console.log(code)
xhr.open("GET", `https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${code}`);
xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");

xhr.onload = function() {
  if (xhr.status === 200) {
  //   console.log(xhr.responseText);
    let json = JSON.parse(xhr.responseText)
    for(i=0;i<9;i++){
      name.push(json.quoteResponse.result[i].longName)
      price.push(json.quoteResponse.result[i].regularMarketPrice)
      chan.push(json.quoteResponse.result[i].regularMarketChange)
      perc.push(json.quoteResponse.result[i].regularMarketChangePercent)
      
    }

    let priHtml = "";
      for(i=0;i<9;i++){
        let na=name[i]
        pri=` <div class="card m-2">
        <div class="card-body">
            <img src="https://source.unsplash.com/random/300x300/?${na},tech,mobiles,laptops,cars" alt=".">
            <br><br>
          <h5 class="card-title">${name[i]}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${arr[i]}</h6>
          <p class="card-text">Current Price: ${price[i]}</p>
          <p class="card-text">Price Change: ${chan[i]}</p>
          <a href="https://example.com" class="btn btn-primary">Go to Page</a>
        </div>
      </div>`;
        priHtml+=pri;
      }
      
      quo.innerHTML=priHtml;
    

  }
}

xhr.send();