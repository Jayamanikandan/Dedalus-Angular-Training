currentIndex=0;
images = ["one.jpg","two.jpg","three.jpg","four.jpg","five.jpg"];

setInterval(function(){
    currentIndex=Math.round(Math.random()*4);
    image_src = "images/"+images[currentIndex];
    console.log(image_src);
    document.getElementById("img1").src = image_src;
},2000);

function changeImage(arrowType)
{
    if(arrowType=="right")
    {
        //currentIndex = currentIndex==4?0:(currentIndex+1);
        currentIndex = currentIndex==4?0:++currentIndex;
    }
    else if(arrowType=="left")
    {
        //currentIndex = currentIndex==0?4:(currentIndex-1);
        currentIndex = currentIndex==0?4:--currentIndex;
    }
    image_src = "images/"+images[currentIndex];
    console.log(image_src);
    document.getElementById("img1").src = image_src;
}

function toggle_slideshow()
{
    if(event.target.getAttribute("src").indexOf("uparrow")!=-1)
    {
        event.target.setAttribute("src","images/downarrow.png");
        document.getElementById("slide-show").style.display="none";
        document.getElementById("slide-area").style.height="20px";
    }
    else
    {
        event.target.setAttribute("src","images/uparrow.png");
        document.getElementById("slide-show").style.display="block";
        document.getElementById("slide-area").style.height="500px";
    }
}