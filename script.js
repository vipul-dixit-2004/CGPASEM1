const cal = document.getElementById("cal");

cal.addEventListener("click", () => {
  const CSP101 = document.getElementById("CSP101").value;
  const CSP111 = document.getElementById("CSP111").value;
  const ECT103 = document.getElementById("ECT103").value;
  const ECT101 = document.getElementById("ECT101").value;
  const ENG = document.getElementById("ENG").value;
  const MATH = document.getElementById("MATH").value;
  const CP = document.getElementById("CP").value;
  const EngLab = document.getElementById("EngLab").value;
  const DDLab = document.getElementById("DDLab").value;
  const OTP101 = document.getElementById("OTP101").value;
  const MatLab = document.getElementById("MatLab").value;
  const result =
    (CSP101 * 2 +
      CSP111 * 2 +
      ECT101 * 4 +
      ECT103 * 4 +
      ENG * 2 +
      MATH * 4 +
      CP * 3 +
      EngLab * 1 +
      DDLab * 1 +
      OTP101 * 2 +
      MatLab * 1) /
    26;

  console.log(result);

  document.querySelector(
    ".result"
  ).innerHTML = `<h1>Your CGPA is ${result}</h1>`;
});
