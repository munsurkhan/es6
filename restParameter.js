function restFunction(...x){
    let  sum = 0;
    for (let i of x){
        sum = i+sum;
        console.log(sum)
    }

}

restFunction(1,3,2,2,3,4,2,4,4,2);