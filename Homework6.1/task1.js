function area (width, height) {
    console.log (`The area of the rectangle is ${width * height}`);
    return width * height;
}
area (5, 10);


const area2 = function (width, height) {
    console.log (`The area of the rectangle is ${width * height}`); 
    return width * height;           
}               

area2 (5, 10);          

const area3 = (width, height) => {
    console.log (`The area of the rectangle is ${width * height}`); 
    return width * height;           
}   
area3 (5, 10);      