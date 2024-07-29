function hideButton(x) {
    x.style.display = 'none';
}

document.getElementById('time').value = Date();

function resetIfInvalid(el) {
    //just for beeing sure that nothing is done if no value selected
    if (el.value == "")
        return;
    var options = el.list.options;
    for (var i = 0; i < options.length; i++) {
        if (el.value == options[i].value)
            //option matches: work is done
            return;
    }
    //no match was found: reset the value
    el.value = "";
}


function findTotal() {
    var arr = document.getElementsByClassName('vari');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('indeposit').value = tot;
}

function updateDue() {

    var total = parseInt(document.getElementById("total").value);
    var val1 = parseInt(document.getElementById("dt").value);
    var val2 = parseInt(document.getElementById("indeposit").value);

    // to make sure that they are numbers
    if (!total) { total = 0; }
    if (!val1) { val1 = 0; }
    if (!val2) { val2 = 0; }

    var ansD = document.getElementById("remainingvalh");
    ansD.value = total + val1;
    var ansD = document.getElementById("remainingval");
    start = !parseInt(remainingvalh.value) ? 0 : parseInt(remainingvalh.value);
    ansD.value = start - val2;
}