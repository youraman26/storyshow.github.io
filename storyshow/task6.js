var arr = [
    {img:"https://images.unsplash.com/photo-1639143065985-3ae940078a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},
    {img:"https://images.unsplash.com/photo-1639140730904-b9d7d7d40fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {img:"https://images.unsplash.com/photo-1639074916237-5d24bc87e0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"},
    {img:"https://images.unsplash.com/photo-1591641484177-aa0a6428d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80"},
    {img:"https://images.unsplash.com/photo-1605648941506-5b58eb6494c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80"}
]


function showstory(){
    var clutter = "";
    arr.forEach(function(elem,index){
    clutter += ` <div class="stories">
    <img id="${index}" src="${elem.img}" alt="">
</div>`
    })
    document.querySelector("#story").innerHTML = clutter
}
showstory()

document.querySelector("#story").addEventListener("click", function(dets){
    storyview(Number(dets.target.id))
})

function storyview(index){
    document.querySelector(".storyshow img").setAttribute("src", arr[index].img)
    document.querySelector("#container").style.display = "initial"

    var prg = 0
    var currentshowing = index

   var s = setInterval(function(){
    if(prg < 100){
        document.querySelector("#prg").style.width = ++prg + "%"
        document.querySelector("#container").style.display = "initial"
    }
    else{
        prg = 0
        clearInterval(s)
        if(currentshowing+1 <= arr.length-1){
            storyview(currentshowing + 1)
        }
        else{
            document.querySelector("#container").style.display = "none"
        }

    }
   }, 50)
}
 