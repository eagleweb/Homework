function RemoveElementFromShop() {
    var elem = document.getElementById('shop').lastElementChild;
    console.log(elem);
    elem.remove();
}