const tombol = document.getElementById("tombol");
console.log(tombol);

const data = [
    {
        id: 1,
        name : 'cecep',
        age:20
    },
    {
        id: 2,
        name : 'maman',
        age:21
    },
    {
        id: 3,
        name : 'neneng',
        age:22
    }
]

tombol.addEventListener("click",()=>{
    console.log('clicked');
    const hello=document.getElementById("hello");
    hello.style.backgroundColor="black";
    hello.style.color="white";
})