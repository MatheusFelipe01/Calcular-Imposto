window.alert("What's happening right here ?")
function calcular(){
    var INSS = 0;
    var Liquido = 0; // printar o liquido apenas no final >> Liquido = Sal - INSS - IR ; //
    var baseIR = 0;
    var IR = 0;
    // PEGANDO POR ID ELEMENTOS DO HTML  PARA INTERAGIR //
    var printINSS = document.getElementById('inss')
    var printIR = document.getElementById('ir')
    var printLiquido = document.getElementById('liquido')
    var Sal = parseFloat(document.getElementById('pegarSal').value)
    // FAIXAS DO INSS 
    var faixa1 = 90.9;
    var faixa2 = 109.3806;
    var faixa3 = 145.6404;
    var faixa4 = 482.4652;
    // FAXAS DO IR  
    var faixa01 = 69.1995;
    var faixa02 = 138.66;
    var faixa03 = 205.57;
    // FASE 1 : CALCULAR INSS E DESCOBRIR A BASE DE CÁLCULO DO IR //
    if(Sal <= 1212){
        INSS = (Sal * 0.075);
        printINSS.innerHTML = ` INSS : R$ ${INSS.toLocaleString()}`
        printINSS.style.backgroundColor = '#ff6961'
    }else if(Sal <= 2427.35){
        INSS = Sal - 1212;
        INSS = (INSS * 0.09) + faixa1;
        printINSS.innerHTML = ` INSS : R$ ${INSS.toLocaleString()}` 
        printINSS.style.backgroundColor = '#ff6961'
    }else if(Sal <= 3641.03){ // problem with this part
        INSS = Sal - 2427.35;
        INSS = (INSS * 0.12) + faixa1 + faxa2
        printINSS.innerHTML = ` INSS : R$ ${INSS.toLocaleString()}`
        printINSS.style.backgroundColor = '#ff6961'
    }else if(Sal <= 7087.22){
        INSS = Sal - 3641.03;
        INSS = (INSS * 0.14) + faixa1 + faixa2 + faixa3;
        printINSS.innerHTML = ` INSS : R$ ${INSS.toLocaleString()}`
        printINSS.style.backgroundColor = '#ff6961'
    }else{
        INSS = 828.38;
        printINSS.innerHTML = ` INSS : R$ ${INSS.toLocaleString()}`
        printINSS.style.backgroundColor = '#ff6961'
    }
    // FASE 2 : USAR baseIR e calcular o IR //
    baseIR = Sal - INSS;
    if(baseIR <= 1903.98){
        IR = 0;
        printIR.innerHTML = ` IR : R$ ${IR.toLocaleString()} (Faixa sem desconto de IR)`
        printIR.style.backgroundColor = '#ff6961'
    }else if(baseIR <= 2826.65){
        IR = baseIR - 1903.98;
        IR = (IR * 0.075);
        printIR.innerHTML = ` IR : R$ ${IR.toLocaleString()}`
        printIR.style.backgroundColor = '#ff6961'
    }else if(baseIR <= 3751.05){
        IR = baseIR - 2826.65;
        IR = (IR * 0.15) + faixa01  
        printIR.innerHTML = ` IR : R$ ${IR.toLocaleString()}`
        printIR.style.backgroundColor = '#ff6961'
    }else if(baseIR <= 4664.68){
        IR = baseIR - 3751.05;
        IR = (IR * 0.225) + faixa01 + faixa02;
        printIR.innerHTML = ` IR : R$ ${IR.toLocaleString()}`
        printIR.style.backgroundColor = '#ff6961'
    }else{
        IR = baseIR - 4664.68;
        IR = (IR * 0.275) + faixa01 + faixa02 + faixa03;
        printIR.innerHTML = ` IR : R$ ${IR.toLocaleString()}`
        printIR.style.backgroundColor = '#ff6961'
    }
    Liquido = Sal - INSS - IR;
    printLiquido.innerHTML = ` Liquido R$ ${Liquido.toLocaleString()}`
    printLiquido.style.backgroundColor = '#90ee90'
    

}