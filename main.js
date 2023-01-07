var itemcount = document.querySelector('#itemcount');
var minusbtn = document.querySelector('#minus-btn');
var plusbtn = document.querySelector('#plus-btn');

let a=0;

plusbtn.addEventListener('click',()=>{
    a++;
    itemcount.innerText =a;
    console.log(a);
});
minusbtn.addEventListener('click',()=>{
    if(a>1){
        a--;
        itemcount.innerText=a;
    }
});

var size = document.querySelector('.color-size');
var sizeXs = document.querySelector('#sizeXs');
var sizeS = document.querySelector('#sizeS');
var sizeM = document.querySelector('#sizeM');
var sizeL = document.querySelector('#sizeL');
var sizeXl = document.querySelector('#sizeXl');

// console.log(size.innerText);

sizeXs.addEventListener('click',()=>{
    size.innerText = 'SIZE: XS';
});
sizeS.addEventListener('click',()=>{
    size.innerText = 'SIZE: S';
});
sizeM.addEventListener('click',()=>{
    size.innerText = 'SIZE: M';
});
sizeL.addEventListener('click',()=>{
    size.innerText = 'SIZE: L';
});
sizeXl.addEventListener('click',()=>{
    size.innerText = 'SIZE: XL';
});

var color = document.querySelector('.color-text');
var brownColor = document.querySelector('#brown-color');
var greenColor = document.querySelector('#green-color');
var purpleColor = document.querySelector('#purple-color');
var blueColor = document.querySelector('#blue-color');

// console.log(color.innerText);

brownColor.addEventListener('click',()=>{
    color.innerText = 'COLOR: Brown';
})
greenColor.addEventListener('click',()=>{
    color.innerText = 'COLOR: Green';
})
purpleColor.addEventListener('click',()=>{
    color.innerText = 'COLOR: Purple';
})
blueColor.addEventListener('click',()=>{
    color.innerText = 'COLOR: Blue';
})

var addtocart = document.querySelector('.addtocart');

addtocart.addEventListener('click',()=>{

    window.alert(`Item has been added to cart successfully with ${color.innerText} and ${size.innerText}.`);
})
