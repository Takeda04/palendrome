let num = [1, 2, -3, 4, -5, 6, -7, 8, -9]
let newNum = [];
function getNum (num) {
    num.filter(item =>{
        if(item < 0){
            console.log(item);
            newNum.push(item);   
        } 
    })
    
    console.log(newNum) 
}
getNum(num);
