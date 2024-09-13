console.log("hiiiipppp");
//dark button
const darkBtn = document.querySelectorAll(".darkmode");

console.log(darkBtn);
// slide show
const mainBackground = document.querySelector(".bg-main-slide");
const itemSlide = document.querySelectorAll(".slide-item");

const titleSlideContainer = document.querySelector(".title");

console.log(itemSlide);
const titleSlide = {
    pic1: "ffff1",
    pic2:"rrrr2",
    pic3:"eeee3",
    pic4:"uuuu4"
}
// itemSlide.addEventListener("click",e=>{
//     console.log(e.target.dataset);
    
// })
itemSlide.forEach(item=>{
    item.addEventListener("click", e=>{
        const pic = e.target.dataset.slide;
        console.log(e.target.dataset.slide);
        item.parentElement.classList.add("bg-gray-700");
        item.parentElement.classList.add("p-1");
        item.parentElement.classList.remove("px-2");
        console.log(mainBackground.src);
        // mainBackground.src = "/assets/images/.jpg";
        mainBackground.src = `/assets/images/${pic}.png`
        console.log(titleSlideContainer.innerHTML);

        // titleSlide.map(item =>{
        //     console.log(item);
            
        // })
       
        
        if(pic === 'pic1'){
            titleSlideContainer.innerHTML= titleSlide.pic1;
        }else if(pic === 'pic2'){
            titleSlideContainer.innerHTML= titleSlide.pic2;
        }else if(pic === 'pic3'){
            titleSlideContainer.innerHTML= titleSlide.pic3;
        }else if(pic === 'pic4'){
            titleSlideContainer.innerHTML= titleSlide.pic4;
        }
        console.log(item.dataset.slide);
        itemSlide.forEach(item=>{
            if(item.dataset.slide !== e.target.dataset.slide){
                item.parentElement.classList.remove("bg-gray-700");
                
            }
        })
        
    })
})
mainBackground.addEventListener("click",e=>{
    console.log("bg clicked");
    
})
darkBtn.forEach(item=>{
    item.addEventListener("click",e=>{
        console.log("dark");
        document.documentElement.classList.toggle("dark");
    })
})