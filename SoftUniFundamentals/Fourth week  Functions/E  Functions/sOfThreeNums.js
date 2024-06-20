function sOfThreeNums(n1, n2, n3){
    let sNum = 0;

    if (n1 < n2 && n1 < n3){
        sNum = n1;
    }
    else if (n2 < n1 && n2 < n3){
        sNum = n2;
    }
    else{
        sNum = n3;
    }
    console.log(`${sNum}`);
}
sOfThreeNums(2,
    5,
    3
    );
sOfThreeNums(600,
    342,
    123
    );
sOfThreeNums(25,
    21,
    4
    );
sOfThreeNums(2,
    2,
    2
    );