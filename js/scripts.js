// UI Logic

function hideResultsAndError() {
  document.getElementById("error-message).setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class","hidden");
  document.getElementById("Java").setAttribute("class", "hidden");
  document.getElementById("HTML").setAttribute("class", "hidden");
  document.getElementById("PHP").setAttribute("class", "hidden");
  document.getElementById("React").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();
  document.getElementById("

  function handleRadio(event) {
    event.preventDefault();
    hideResultsAndError();
    const radioSelection = document.querySelector("input[name='experience']:checked").value;
    const looks = parseInt(document.querySelector("input#looks").value;
  
  if (radioSelection === ') {
    document.getElementById("radio-form")addEventListener("submit", handleRadio




  } else {
    document.getElementById("error-message").remove.Attribute("class");
    }
  };
}
