const cal = document.getElementById("cal");

cal.addEventListener("click", () => {
  const CSP101 = document.getElementById("CSP101").value;
  const CSP111 = document.getElementById("CSP111").value;
  const ECT103 = document.getElementById("ECT103").value;
  const ECT101 = document.getElementById("ECT101").value;
  const ENG = document.getElementById("ENG").value;
  const MATH = document.getElementById("MATH").value;
  const CP = document.getElementById("CP").value;
  const result =
    (CSP101 * 2 +
      CSP111 * 2 +
      ECT101 * 4 +
      ECT103 * 4 +
      ENG * 2 +
      MATH * 4 +
      CP * 3) /
    21;

  console.log(result);

  document.querySelector(
    ".result"
  ).innerHTML = `<h1>Your CGPA is ${result}</h1>`;
});
