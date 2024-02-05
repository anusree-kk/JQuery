$(document).ready(function (){



//     let count = 0
//     $('<button id="button1" type="button">Click here</button>').appendTo("body")
// $("button1").click(function (){
//     count++
//     if (count==1){
//     $('<p class="paragraph1">this is paragraph1></p>').appendTo("body")
//     $("p").show()
// }
// if(count==2){
//     $('<button id="nxtbtn" type="button">Next button</button>').appendTo("body");
    
//     $('<div id="maindiv" ></div>').appendTo("body")
//     $('<div id ="div1" class="imagediv"></div>').appendTo(".maindiv")
//     $('<img src="images/image1.jpg>').appendTo("div1")
// }
// let currentslide = 0
// function showslide(index){
//     $("imagediv").hide()
//     $("imagediv").eq(index).show()

// }
// $("body").on ("click","nxtbtn",function (){
//     currentslide++
//     if(currentslide>=3){
//         currentslide = 0
//     }
//     showslide(currentslide)
// })
// showslide(currentslide)


// })




// const arr=[23, 13, 34 ,11 ,16]
// let filteredarray = arr.filter(checkdata)

//  filteredarray.forEach(printdata)

//  function printdata(element){
//     console.log(element)
//  }

// function checkdata(element){
//     return element >= 18
// }
// $("div1").style.display="hide"
// $(".colorchange").css("color","green")
// $("div1").onclick(function(){
//     $("div2").fadeToggle("slow")
// })
// // $.ajax({
//     url:'https://dummyjson.com/products',
//     type:'get',
//     dataType:'json',
//     success: function(result){
//         data=result.products
//         displayProducts(data)

//     }
// })

const arr=[ [ 1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(arr[1][1])
})

const obj={"sathya":27,"amanika":23,"b":[1,2,3,4,5,6,7,8]}
console.log(obj.b[4])
console.log(obj[1])
