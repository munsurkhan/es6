let billGatesPro = {
    shirt:{
        color: "offWhite",
        quality: "Good",
        price: "200USD"
    },
    swatter:{
        color: "Gray",
        quality: "Good",
        price: "230USD",
        warm: "good"
    },
    face:{
        similing: "Yes",
        chosma: "Yes",
        teeth: "White,Big"
    }
}

let billGates = {
    color: "offWhite",
    quality: "Good",
    price: "200USD",
    similing: "Yes",
    chosma: "Yes",
    teeth: "White,Big"
}

for (let props in billGates){
    console.log(props+"= "+billGates[props]);
}