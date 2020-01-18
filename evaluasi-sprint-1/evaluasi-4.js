var n=9;

for(i=1; i<=n; i++){
    for(j=9; j>=1; j--){
        if(i==j||2+j==i || 4+j==i || 6+j==i|| 8+j==i){
            document.write(" 1 ");
        }else if(1+j==i|| 3+j==i || 5+j==i|| 7+j==i){
            document.write(" 0 ");
        }else{
            document.write(" + ");
        }
    }
    document.write("<br>");
}