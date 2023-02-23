function val(result) {
    form.disp.value = form.disp.value + result;
}

function calculate() {
    if (form.disp.value == "") {
        alert("Plase enter numbers");
        // Đoạn này thông báo user nếu họ k nhập số
        // Mà nhập dấu = thì sẽ xuất hiện thông báo
    }
    else {
        form.disp.value = eval(form.disp.value);
    }
}
var btn = form.veql;
btn.addEventListener('dblclick', function () {
    form.disp.value = "";
})