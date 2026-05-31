function checkOrder (available, ordered) {
    if (ordered == 0) 
        return "You forgot to order something!";
    else if (ordered > available)
        return "Your order is too large, not enough items in stock!";   
    else
        return "Your order is accepted, thank you!";
}


  


console.log(checkOrder(5, 10));       
console.log(checkOrder(5, 0));
console.log(checkOrder(5, 3));    