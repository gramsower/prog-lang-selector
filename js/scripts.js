// UI Logic

function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class","hidden");
  document.getElementById("Java").setAttribute("class", "hidden");
  document.getElementById("HTML").setAttribute("class", "hidden");
  document.getElementById("PHP").setAttribute("class", "hidden");
  document.getElementById("React").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const userName = document.querySelector("input#userName").value;
    const firstCompAge = document.querySelector("input#age");
    const userExp = parseInt(document.querySelector("input#experience").value);
    const looks = parseInt(document.querySelector("input#looks").value);

    if (userName && age && looks) {
      if (userExp <= 1) {
        if (looks === 1) {
          document.getElementById("C#").removeAttribute("class");
        } else if (looks === 2) {
          document.getElementById("Java").removeAttribute("class");
        } else {
          document.getElementById("HTML").removeAttribute("class");
        };
      } else {
        if (looks === 1) {
          document.getElementById("PHP").removeAttribute("class");
        } else if (looks === 2) {
          document.getElementById("React").removeAttribute("class");
        } else {
          document.getElementById("JavaScript").removeAttribute("class");
        };
      };
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};