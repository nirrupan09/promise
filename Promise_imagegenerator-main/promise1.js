var api = fetch("https://dog.ceo/api/breeds/image/random");
let div = document.querySelector(".container");

function foo() {
  api
    .then((resp) => {
      return resp.json();
    })
    .then((res) => {
      console.log(res);
      let img = document.createElement("img");
      img.setAttribute("src", `${res.message}`);
      img.setAttribute("alt", "No Image");
      img.setAttribute("class", "dogimg");
      div.append(img);
    })
    .catch((err) => {
      console.log(err);
    });
}

function refresh(button) {
  button.reload();
}
