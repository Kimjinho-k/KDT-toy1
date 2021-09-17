// function readJSON(file, callback) {
//   let rawfile = new XMLHttpRequest();
//   rawfile.overrideMimeType("application/json");
//   rawfile.open("GET", file, true);
//   rawfile.onreadystatechange = function () {
//     if (rawfile.readyState === 4 && rawfile.status == "200") {
//       callback(rawfile.responseText);
//     }
//   };
//   rawfile.send(null);
// }

// readJSON("./test.json", function (bankList) {
//   let Data = JSON.parse(bankList);
//   console.log(Data);
// });

// let data;

// const getJSON = (url) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// data = getJSON("https://syoon0624.github.io/json/test.json");

// console.log(data);

const getJSON = (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .then((res) => res);
  return response;
};

const data = getJSON("https://syoon0624.github.io/json/test.json");
const makeList = (data) => {
  if (!data) return;
  data.then((res) =>
    res.bankList.forEach((eac, idx) => {
      eac.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const ol = document.getElementById("account_book_list");
      const li = document.createElement("li");
      const span = document.createElement("span");
      const strong = document.createElement("strong");
      const history = document.createTextNode(eac.history);
      const newArray = [];
      if (eac.date === "2021-09-01" && eac.income === "out") {
        newArray.push(eac);
      }
      newArray.forEach((eac, idx) => {
        console.log(eac.price);
      });

      if (eac.income === "in") {
        strong.textContent = `+ ${eac.price.toLocaleString()}`;
        strong.classList.add("income");
      } else {
        strong.textContent = eac.price.toLocaleString();
      }

      ol.appendChild(li);
      li.appendChild(span);
      li.appendChild(strong);
      span.appendChild(history);
    })
  );
};

makeList(data);
