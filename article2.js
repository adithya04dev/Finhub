const xhr = new XMLHttpRequest();
xhr.open("GET", `https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news`);
xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");

xhr.onload = function() {
  if (xhr.status === 200) {
    let json = JSON.parse(xhr.responseText)
    console.log(json)
  }
}
xhr.send()