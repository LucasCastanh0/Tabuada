function tabuada() {
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if (num.value.length == 0) {
        alert("Por Favor, digite um número!");
    } else {
        let n = Number(num.value);
        tab.innerHTML = ``
        for (c = 1; c <= 10; c++) {
            let item = document.createElement("option");
            item.text = `${n} X ${c} = ${n * c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
}
