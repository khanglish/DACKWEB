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

// test area below
