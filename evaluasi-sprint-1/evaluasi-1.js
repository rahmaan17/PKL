var n = 9;

for(i=1; i<=n; i++){
    for(j=1; j<=n;j++){
        if(0+i == j || i==5 || j==5||10-i==j){
            document.write("+ ");
        }else{
            document.write("- ");
        }
    }
    document.write("<br>");
}

