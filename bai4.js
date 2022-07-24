let sum=0;

for(let i=2;i<500;i++) {
    let check=true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {

            check=false;
            break;
        }
    }

    if(check==true) {
        sum += i;

    }
}document.write(sum);