function repeatString (string, n){
    let count = ' '
    for (let i = 0; i < n; i++){
        count += string;
    }
    console.log(count);
}
repeatString("abc", 3 );
repeatString("String", 2);