var array = Array.from(plate);
var plate1= '';
if (array[2]==='1'){array[2]='I'};
if (array[2]==='8'){array[2]='B'};
if (array[2]==='0'){array[2]='O'};
for(i=0;i<2;i++){
  if (array[i]==='I'){array[2]='1'};
if (array[2]==='B'){array[2]='8'};
if (array[2]==='O'){array[2]='0'};
}
for(i=3;i<plate.length;i++){
  if (array[i]==='I'){array[2]='1'};
if (array[2]==='B'){array[2]='8'};
if (array[2]==='O'){array[2]='0'};
}