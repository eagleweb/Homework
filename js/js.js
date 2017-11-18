function RemoveLastElementFromShop() {
    var elem = document.getElementById('shop').lastElementChild;
    elem.remove();
}

function AddElementToShop() {
    var parentElem = document.getElementById('shop');
    var item = document.getElementById('item-input-form').cloneNode(true);
    var fragment = document.createDocumentFragment();
    fragment.appendChild(item);

    var div = document.createElement('div');
    div.className = "order_form";
    div.appendChild(fragment);

    parentElem.appendChild(div);
}