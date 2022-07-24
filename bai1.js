let array=[];
let doDai=+prompt("nhap do dai");
for(let i=0;i<doDai;i++){
    let arr=+prompt("nhap gia tri");
    array.push(arr);
}
let check =false;
for(let j=0;j<array.length;j++) {
    if (array[j] % 2 == 0) {
        check = true;
        document.write("cac so la:"+array[j] +"<br>");
    }
}

