let a = [1,2,3,4,5,6,7,8,9];

for ( j=0; j<a.length; j++){
   for ( i=1; i<=9; i++){
      let b =a[j]*i;
      document.write(a[j], " * ",i," = ", b,"<br>");
   }
   
}