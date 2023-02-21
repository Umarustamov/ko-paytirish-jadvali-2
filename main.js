let name = prompt('Ismingizni kiriting');
let trueAnswers = 0;
let count = +prompt(name + ' nechta savol beray?');
if (isNaN(count)){
    alert('Siz bu joyga son kiritmadingiz')
} else{
    for (let i = 1; i <=count; i++) {
        let num1 = Math.floor(1+Math.random()*10);
        let num2 = Math.floor(1+Math.random()*10);
        let answer = +prompt(`${num1} * ${num2} = ?`);
    
        if(answer == num1*num2){
            document.write(`<strong class ='bir'>${num1} * ${num2} = ${answer} To'g'ri</strong> <br>`);
            trueAnswers++;
        } else {
            document.write(`<strong class ='ikki'>${num1} * ${num2} = ${answer}  Xato! <strong class ='true'>(To'g'ri javob: ${num1 * num2}) </strong> </strong>  <br>`)
        }
    }
    
    if(trueAnswers == count && count >0){
        document.write(`<p class ='true'>Barcha javoblar to'g'ri</p>`);
    } else if(count>0){ document.write(`<p class ='true'>To'g'ri javoblar soni: ${trueAnswers} ta </p>`);
            document.write(`<p class ='false'>Noto'g'ri javoblar soni: ${count - trueAnswers} ta </p> <br>`);
    } else{
        location.reload();
    }
}
