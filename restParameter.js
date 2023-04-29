function calculation(...numbers) {
    let sum = 0;
    //let i;
    for (let i of numbers){
        sum = sum+i;
    }
    console.log(sum)
}

calculation(2,3,4,5,6,7,7,8,8,9,10,1);