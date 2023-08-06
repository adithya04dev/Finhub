// // const data = null;

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://yh-finance.p.rapidapi.com/stock/v2/get-financials?symbol=AMRN&region=US");
// xhr.setRequestHeader("X-RapidAPI-Key", "1089c2cfb5mshb7bfc71eda2bf6dp14723ejsnae9e668f5be1");
// xhr.setRequestHeader("X-RapidAPI-Host", "yh-finance.p.rapidapi.com");
// xhr.onload = function() {
//     if (xhr.status === 200) {
//     //   console.log(xhr.responseText);
//       let json = JSON.parse(xhr.responseText)
//       console.log(json)
//     //         let articles = json.articles;
//     //         console.log(articles);
//     }
//   };
//   xhr.send();
// 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
// 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

const API_KEY = "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";
const prompt = "Hello, how are you doing today?";

const data = JSON.stringify({
  prompt,
  max_tokens: 50,
  temperature: 0.5,
  engine: "text-davinci-003",
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(JSON.parse(this.responseText).choices[0].text);
  }
});

xhr.open("POST", "https://api.openai.com/v1/engines/text-davinci-003/completions");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", `Bearer ${API_KEY}`);

xhr.send(data);

