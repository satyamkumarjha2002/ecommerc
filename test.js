var data=[];
var count=0;
var nam=["satyam","alok","raju",'shivam',"zhoo","master","satu"];
var num=[7,1,8,0,6,4,3];
var i=0;
var j=0;
for(i=0;i<nam.length;++i){
    var obj={
        name:nam[i],
        num:num[i]
    }
    data.push(obj)
}
for(i=0;i<data.length;++i){
    for(j=i+1;j<data.length;++j){
       if(data[i].num<data[j].num){
           swap(data,i,j)
       }
    }
    //console.log(data)
}
function swap(data,i,j){
    temp=data[i];
    data[i]=data[j]
    data[j]=temp;
}
console.log(data)
