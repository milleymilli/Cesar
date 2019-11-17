// var readMe = document.getElementById("button1");
// var readMe1 = document.getElementById("button2");
// var readMe2 = document.getElementById("button3");

// readMe.addEventListener("click", () => {
//   var display = document.getElementById("para1");
//   var paragraph1 = display.textContent;
//   console.log(paragraph1);
//   rot13(paragraph1, display);
// });
// readMe1.addEventListener("click", () => {
//   var display = document.getElementById("para2");
//   var paragraph2 = display.textContent;
//   console.log(paragraph2);
//   rot13(paragraph2, display);
// });
// readMe2.addEventListener("click", () => {
//   var display = document.getElementById("para3");
//   var paragraph3 = display.textContent;
//   console.log(paragraph3);
//   rot13(paragraph3, display);
//   //pass 2 arrgument where u want to display with what u want to display
// });
// function rot13(para, paraDisplay) {
//   var splitedStr = para.split(" ");
//   for (var i = 0; i < splitedStr.length; i++) {
//     splitedStr[i] = splitedStr[i]
//       .split("")
//       .map(alp => alp.charCodeAt())
//       .map(alp =>
//         alp < 65 || alp > 90
//           ? String.fromCharCode(alp)
//           : alp < 78
//           ? String.fromCharCode(alp + 13)
//           : String.fromCharCode(alp - 13)
//       );
//   }
//   paraDisplay.textContent = splitedStr
//     .join(" ")
//     .toString()
//     .replace(/,/g, "");
// }
// // console.log(rot13("SERR PBQR PNZC"));
// // console.log(rot13("SERR CVMMN!"));
// // console.log(rot13("SERR YBIR?"));
// // console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// // console.log(rot13("LBH QVQ VG!"));

// /*
// function rot13(str) {
//   return str.replace(/[A-Z]/g, letters =>
//     String.fromCharCode((letters.charCodeAt(0) % 26) + 65)
//   );
// }

// var letterObj = {
//   A: "N",
//   B: "O",
//   C: "P",
//   D: "Q",
//   E: "R",
//   F: "S",
//   G: "T",
//   H: "U",
//   I: "V",
//   J: "W",
//   K: "X",
//   L: "Y",
//   M: "Z",
//   N: "A",
//   O: "B",
//   P: "C",
//   Q: "D",
//   R: "E",
//   S: "F",
//   T: "G",
//   U: "H",
//   V: "I",
//   W: "J",
//   X: "K",
//   Y: "L",
//   Z: "M"
// };
// function rot13(){
// var splitedStr = str.split(" ");
//   for (var i = 0; i < splitedStr.length; i++) {
//     splitedStr[i] = splitedStr[i]
//       .split("")
//       .map(alph =>
//         letterObj.hasOwnProperty(alph) ? (alph = letterObj[alph]) : alph
//       )
//       .toString()
//       .replace(/,/g, "");
//   }
//   return splitedStr.toString().replace(/,/g, " ");
// }
// */

// // Change the inputs below to test
// //
// var myInput = document.getElementById("input-code");
// var myOutput = document.getElementById("output-code");
// var editorName = document.getElementById("name");
// editorName.addEventListener("click", () => {
//   var checkMe = editorName.innerHTML;
//   console.log(checkMe);
//   editorName.innerHTML = rot13(checkMe);
// });
var myInput = document.getElementById("input-code");
var myOutput = document.getElementById("output-code");
var editorName = document.getElementById("name");
editorName.addEventListener("mouseover", () => {
  var checkMe = editorName.innerHTML;
  //console.log(checkMe);

  editorName.innerHTML = rot13(checkMe);
});

myInput.addEventListener("keyup", function(event) {
  const text = event.target.value;
  //console.log(text);
  myOutput.innerHTML = titleCase(text);
});
function titleCase(jjj) {
  console.log(jjj);
  var str = rot13(jjj);
  var newArr = str
    .toLowerCase()
    .split(" ")
    .map(ele => ele.split(""));
  for (var i = 0; i < newArr.length; i++) {
    newArr[i][0] = newArr[i][0].toUpperCase();
    //toString();
  }
  return newArr.join(" ").replace(/,/g, "");
}
function rot13(str) {
  var splitedStr = str.toUpperCase().split(" ");
  //console.log(splitedStr);
  for (var i = 0; i < splitedStr.length; i++) {
    splitedStr[i] = splitedStr[i]
      .split("")
      .map(alp => alp.charCodeAt(0))
      .map(alp =>
        alp < 65 || alp > 90
          ? String.fromCharCode(alp)
          : alp < 78
          ? String.fromCharCode(alp + 13)
          : String.fromCharCode(alp - 13)
      );
  }
  return splitedStr
    .join(" ")
    .toString()
    .replace(/,/g, "");
}

function titleCase(jjj) {
  var str = rot13(jjj);
  var newArr = str
    .toLowerCase()
    .split(" ")
    .map(ele => ele.split(""));
  for (var i = 0; i < newArr.length; i++) {
    newArr[i][0] = newArr[i][0].toString().toUpperCase();
    //toString();
    console.log(newArr[i][0].toUpperCase());
  }
  return newArr.join(" ").replace(/,/g, "");
}
function milley() {
  editorName.style.color = "#00ffff";
}
function milley1() {
  editorName.innerHTML = "Zvyyrl!!";
  editorName.style.color = "#000";
}
