$(document).ready(function() {
    $(".price").text(function(i, origText) {
        return covert(origText);
    });
});
/**
 * covert price to valid VND format.
 * @param  {string} string
 * @return {string} string
 */
function covert(string) {
    string = string.trim();
    let arr = [];
    let i = string.length -1;
    while (i - 3 > -1) {
        arr.push(string.substring(i-3, i));
        i = i -3;
    }
    arr.push(string.substring(0, i+1));
    let result = "";
    while (arr.length > 1) {
        result += arr.pop() + '.';
    }
    return result + arr.pop() + "   VNĐ";
}
   var dem=1;
   var sumprice=0;
   var product=[];
   var fisrt=true;
   if(fisrt)
   {
    product = JSON.parse(localStorage.getItem("product")||"[]");
    loadData();
    fisrt=false;
   }
function addCart(price,name)
{
    sumprice=parseInt(sumprice)+parseInt(price);
   var table = document.getElementById("myTable").insertRow(dem);
    var tdName = table.insertCell(0);
   var tdPrice = table.insertCell(1);
  
   tdName.innerHTML = name;
   tdPrice.innerHTML = price;
   $("#sumprice").text(sumprice);
    dem++;
    var arr={'name':name,'price':price};
    product.push(arr);
    localStorage.setItem("product",JSON.stringify(product));
}
function loadData()
{
     sumprice=0;
    for(var i=0;i<product.length;i++)
    {     
        var table = document.getElementById("myTable").insertRow(i+1);
    var tdName = table.insertCell(0);
   var tdPrice = table.insertCell(1);
    tdName.innerHTML = product[i].name;
   tdPrice.innerHTML = product[i].price;
   sumprice=parseInt(sumprice)+parseInt(product[i].price);
   $("#sumprice").text(sumprice);
    }
}
// test area below
