let z1 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
 let z2 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[2]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4)); 
let z3 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[3]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z4 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[4]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z5 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[5]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z6 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[6]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z7 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[7]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z8 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[8]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z9 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[9]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let z10 = Number(getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/div/div[3]/div[1]/h6").innerHTML.slice(1, 4));
let i = 33;

//кликаем на элемент если сумма норм
function check() {
//	let z = Number(getElementByXpath("/html/body/div[1]/div[1]/div[4]/div[2]/div/div/div/div[2]/div[1]/a/div/div/div/div[4]/h6").innerHTML.slice(1, 3));
  if (z1 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z2 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[2]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[2]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[2]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z3 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[3]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[3]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[3]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z4 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[4]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[4]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[4]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z5 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[5]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[5]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[5]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z6 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[6]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[6]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[6]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z7 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[7]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[7]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[7]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z8 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[8]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[8]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[8]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z9 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[9]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[9]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[9]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  } else if (z10 < i) {
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[10]/a/div").click();
      //клик после задержки
      setTimeout(x, 1000);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[10]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
      getElementByXpath("/html/body/div[1]/div[1]/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[10]/a/div").click();
      //клик после задержки
      setTimeout(x, 500);
  }
}

//функция xpath для работы доступа по пути
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
//функция клик покупки
function x() {
  return getElementByXpath("/html/body/div[1]/div[4]/div/div[2]/div[1]/div/div[3]/div/button").click();
}
document.onload=check()
