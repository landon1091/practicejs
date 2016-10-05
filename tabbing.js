function tab(mas) {
    let addTab = mas + 1;
    console.log(mas + ": " + addTab);
    while (addTab > 4) {
        addTab = addTab - 4;
        console.log(mas + ": " + addTab);        
    }
    return mas + (4 - addTab);
}

console.log(tab(17));