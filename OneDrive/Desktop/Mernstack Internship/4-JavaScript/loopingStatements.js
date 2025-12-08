obj = {
    "name": "Selvapriya",
    "age": 18,
    "city": "Coimbatore"
}

for(i = 0;i<Object.keys(obj).length;i++){
     console.log(i,obj[i]);
     console.log(i,Object.keys(obj)[i]);
}

for(i of Object.entries(obj)){ //keys
   // console.log(i," is", obj[i]) 
   console.log(i);
}