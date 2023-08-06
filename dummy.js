let quo=document.getElementById('quoai')
const xhr = new XMLHttpRequest();
let index=[]
xhr.open("GET", "https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json");
xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
xhr.setRequestHeader("X-RapidAPI-Host", "twelve-data1.p.rapidapi.com");
xhr.onload = function() {
    if (xhr.status === 200) {
    //   console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText)
      console.log(json)
      let symbol=[]
      let i=0;
      for(i=0;i<5080;i++){
                symbol.push(json.data[i].symbol)}
      console.log(symbol)

      let name=[]
      
      for(i=0;i<5080;i++){
                name.push(json.data[i].name)}
      
      let inde=[]

      inde.push(symbol.indexOf("GOOGL"))
      inde.push(symbol.indexOf("AAPL"))
      inde.push(symbol.indexOf("MSFT"))
      inde.push(symbol.indexOf("AMZN"))
      inde.push(symbol.indexOf("TSLA"))
      inde.push(symbol.indexOf("META"))
      inde.push(symbol.indexOf("ADBE"))
      inde.push(symbol.indexOf("NVDA"))
      inde.push(symbol.indexOf("PEP"))
      let impsy=[]
      for(i=0;i<9;i++){
        impsy.push(symbol[inde[i]])
      }
      console.log(impsy)

      let priHtml = "";
      for(i=0;i<9;i++){
        pri=` <div class="card m-2">
        <div class="card-body">
            <img src="https://dummyimage.com/300x150/aaa/fff" alt="Google LLC stock price graph">
            <br><br>
          <h5 class="card-title">${name[inde[i]]}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${symbol[inde[i]]}</h6>
          <p class="card-text">Current Price: $2,794.99</p>
          <p class="card-text">Price Change: +6.78 (+0.24%)</p>
          <a href="https://example.com" class="btn btn-primary">Go to Page</a>
        </div>
      </div>`;
        priHtml+=pri;
      }
      
      quo.innerHTML=priHtml;
const xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL");
xhr2.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
xhr2.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
xhr2.onload = function() {
    if (xhr2.status === 200) {
      console.log("2nds")
      let json = JSON.parse(xhr2.responseText)
      console.log(json)
    }
    xhr2.send();
  }
      
      
    }
    else{
      console.log("symbolas load failed ")
    }
    
  };
xhr.send();

