// let days = parseInt(prompt("Nhap so bạn muốn"))


function clickDays(){
    let numbers = +document.getElementById("numbers").value;

    let str = "";
    switch (numbers) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            // document.write('Tháng này có 31 ngày')
            str = "Tháng này có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            // document.write('Tháng này có 30 ngày')    
            str = "Tháng này có 30 ngày";
                break;
        case 2:     
            str = "Tháng này có 28 hoặc 29 ngày";
            break;   
        default:
            
            // document.write('Tháng này có 28 hoặc 29 ngày')
            str = "1 Năm chỉ có 12 tháng yêu cầu bạn nhập đúng";
            break;
    }
    document.getElementById('result').innerText = str;
}
