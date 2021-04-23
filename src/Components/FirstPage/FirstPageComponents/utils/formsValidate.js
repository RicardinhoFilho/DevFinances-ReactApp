function validTitle(title){
    if (title.length >=3){
        return({valid:true})
    }else{
        return({valid:false, errorMessage:"Título deve possuir pelo menos 3 caractéres!"})
    }
}

function validValue(value){
   value =  value.replace(",", ".")
    if (value != 0 && !isNaN(value) ){
        return({valid:true})
    }else if(value == 0){
        return({valid:false, errorMessage:"Não é possível fazer uma transação de R$0"})
    }else{
        return({valid:false, errorMessage:"Este campo espera receber um número!"})
    }
}


export {validTitle, validValue};