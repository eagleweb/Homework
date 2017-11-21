var form = document.getElementById("myForm");
var parentElem = document.getElementById('shop');
var parcel_tmpl = _.template(document.getElementById('parcel').innerHTML);
var pallet_tmpl = _.template(document.getElementById('pallet').innerHTML);
var row_tmpl = _.template(document.getElementById('row').innerHTML);
var count = 2;

form.addEventListener("submit", function(event) {
    console.log(form.elements);
    event.preventDefault();
});

function RemoveLastElementFromShop() {
    var elem = document.getElementById('shop').lastElementChild;
    elem.remove();
}

function AddElementToShop() {
    var result = row_tmpl({number: count});
    parentElem.insertAdjacentHTML("beforeEnd", result);

    $(function() {
        $('.toggle_template').bootstrapToggle();
    });

    count++;
}

function Pallet(id) {
    $('#item_' + id).empty();
    var elem = document.getElementById('item_' + id);
    var result = pallet_tmpl();
    elem.insertAdjacentHTML("beforeEnd", result);
}

function Parcel(id) {
    $('#item_'+id).empty();
    var elem = document.getElementById('item_'+id);
    var result = parcel_tmpl();
    elem.insertAdjacentHTML("beforeEnd", result);
}

$(function() {
    $('#toggle_1').change(function() {
        $(this).prop('checked') === true ? Parcel(1) : Pallet(1)
    })
});

// function AddElementToShop() {
//     var parentElem = document.getElementById('shop');
//     var link = document.querySelector('link[rel=import]');
//     var template = link.import.querySelector('.order_form').cloneNode(true);
//     parentElem.appendChild(template);
//
//     $(function() {
//         $('.toggle_template').bootstrapToggle();
//     })
// }


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
