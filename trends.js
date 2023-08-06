document.getElementById("dropdown").addEventListener("change", function () {
  var selectedOption = this.value;
  if (selectedOption !== "") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/${selectedOption}?start=0`);
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "yahoo-finance15.p.rapidapi.com");
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response)
        // var content =
        //   "<h3>" + response.title + "</h3><p>" + response.content + "</p>";
        // document.getElementById("content").innerHTML = content;
        var content = `<p>${response.description}</p> <br>`;
						for (var i = 0; i < response.quotes.length; i++) {
                            let marketCap = response.quotes[i].marketCap;

if (marketCap > 1e9) {
  marketCap = (marketCap / 1e9).toFixed(2) + 'B';
} else if (marketCap > 1e6) {
  marketCap = (marketCap / 1e6).toFixed(2) + 'M';
} else {
  marketCap = marketCap.toFixed(2);
}
							content += '<div class="stock-card">';
							content += '<div class="stock-symbol">' + response.quotes[i].symbol + '</div>';
							content += '<div class="stock-details">' + response.quotes[i].longName + ' | Rating: ' + response.quotes[i].averageAnalystRating + ' | MarketCap: ' + marketCap + '</div>';
							content += '<div class="stock-change ' + (response.quotes[i].change >= 0 ? 'stock-up' : 'stock-down') + '">' + response.quotes[i].regularMarketChange + ' (' + (response.quotes[i].regularMarketChangePercent + '%)</div>');
                            content += '<div class="stock-range">Range: ' + response.quotes[i].regularMarketDayRange + '</div>';
                            content += '</div>';
                        }
                        document.getElementById('content').innerHTML = content;
      } else {
        document.getElementById("content").innerHTML =
          "Error fetching content.";
      }
    };
    xhr.onerror = function () {
      document.getElementById("content").innerHTML = "Error fetching content.";
    };
    xhr.send();
  } else {
    document.getElementById("content").innerHTML = "";
  }
});
