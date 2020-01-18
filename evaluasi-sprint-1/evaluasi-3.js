var n = 9;

for(i=1;  i<=n; i++){
    for(j=1; j<=n; j++){
        if(i >= j && i-1 <= n - j || i <= j && i-1 >= n - j){
            document.write(" +");
        }else{
           document.write(" - ");
        }
    }
    document.write("<br>");
}