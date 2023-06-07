const bike =[{
    name:"pulzar",
    model:"ns200",
    price:150000,
    tax:5000
},
{
    name:"ktm",
    model:"duke",
    price:250000,
    tax:10000  
},
{
    name:"tvs",
    model:"xl100",
    price:60000,
    tax:2000 
}
];
bike.forEach(function(e){
    if(e.name =="tvs"){
        document.write("my bike","<br>");
    }
        else{
            document.write("not bike","<br>")
        }
})
        
bike.forEach(function(e){
    for(let key in e){
        if (e.name=="ktm"){
            document.write("my bike","<br>");
        }
        else{
           document.write("not bike","<br>");
        }
    }
})
