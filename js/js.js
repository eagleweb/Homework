var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    console.log(form.elements);
    event.preventDefault();
});

function RemoveLastElementFromShop() {
    var elem = document.getElementById('shop').lastElementChild;
    elem.remove();
}

function AddElementToShop() {
    var parentElem = document.getElementById('shop');
    var link = document.querySelector('link[rel=import]');
    var template = link.import.querySelector('.order_form').cloneNode(true);
    parentElem.appendChild(template);

    $(function() {
        $('.toggle_template').bootstrapToggle({
            on: 'PARCEL',
            off: 'PALLET'
        });
    })
}

// function AddElementToShop() {
//     var parentElem = document.getElementById('shop');
//     var item = document.getElementById('item-input-form').cloneNode(true);
//     var fragment = document.createDocumentFragment();
//     fragment.appendChild(item);
//
//     var div = document.createElement('div');
//     div.className = "order_form";
//     div.appendChild(fragment);
//
//     parentElem.appendChild(div);
// }
