function signCheck (n1, n2, n3){
    let isPositive = true;
    if (n1 * n2 * n3 > 0){
        isPositive = true;
        console.log("Positive");
    }
    else{
        isPositive = false;
        console.log("Negative");
    }
}
signCheck( 5,
    12,
   -15
   );
signCheck(-6,
    -12,
     14
    );
signCheck(-1,
    -2,
    -3
    );