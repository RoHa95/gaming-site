console.log("hiiiipppp");
//dark button
const darkBtn = document.querySelectorAll(".darkmode");

console.log(darkBtn);

darkBtn.forEach(item=>{
    item.addEventListener("click",e=>{
        console.log("dark");
        document.documentElement.classList.toggle("dark");
    })
})