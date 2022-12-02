let elImg = document.querySelector('.loading')



fetch('https://jsonplaceholder.typicode.com/photos')
.then((res)=> res.json())
.then((data)=>{
    console.log(data);
    elImg.style.display = 'none'
})