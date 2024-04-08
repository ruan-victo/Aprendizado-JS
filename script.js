function clickbutton() {

    const min = Math.ceil(document.querySelector('.inputMin').value)
    const max = Math.floor(document.querySelector('.inputMax').value)
  

    if (min < max) {
        let result = Math.floor(Math.random() * (max - min) + min);
        document.querySelector('.resultado').value = result;
        console.log(result);
      
    }
    else {
        alert("O valor minimo tem que ser menor do que o valor máximo")
    }
}


