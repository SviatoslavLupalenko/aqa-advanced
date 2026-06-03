



function divide (nominator, denominator) {
 
    if (typeof nominator !== 'number' || typeof denominator !== 'number')
        throw new Error('Must be numbers');
    else if (denominator === 0)
        throw new Error ('Cant divide by zero');

    else
        return nominator / denominator;
}


try {
    const result = divide(10, 5);
    console.log(result);    

} catch (error) {
    if (error.message === 'Cant divide by zero') {
        console.log('Error: Cant divide by zero');
    }   else if (error.message === 'Must be numbers') {     
        console.log('Error: Must be numbers');
    }                   

}

finally {
    console.log('End of division');
}       



