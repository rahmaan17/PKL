var n = 9;

for(i=1;i<=n; i++){
    for(j=1; j<=n; j++){
        if(i==j || i ==1||i == 9|| j==1|| j==9 ){
            document.write(" + ");
        }else if(j-1 ==i||j-2 == i || j-3 == i|| j-4 ==i || j-5==i || j-6==i){
            document.write(" 0 ");
        }else{
            document.write(" 1 ");
        }
    }
    document.write("<br>");
}