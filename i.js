let status = "diactive";

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  if (status == "active") {
    searchForm.style.right = "-100%";
    status = "diactive";
  } else {
    searchForm.style.right = "0px";
    status = "active";
  }
};
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  // shoppingCart.classList.toggle("active");
  if (status == "active") {
    shoppingCart.style.right = "-100%";
    status = "diactive";
  } else {
    shoppingCart.style.right = "0px";
    status = "active";
  }
};
let login = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  // shoppingCart.classList.toggle("active");
  if (status == "active") {
    login.style.right = "-100%";
    status = "diactive";
  } else {
    login.style.right = "0px";
    status = "active";
  }
};

// let loginForm = document.querySelector(".login-form");