class Viajem {
    constructor(distancia, preco, consumo) {
        this.distancia = distancia;
        this.preco = preco;
        this.consumo = consumo;
    }

    static calcular(distancia, preco, consumo){
        let res = document.querySelector('#resposta')
        let vm = 80;
        let di = distancia;
        let pr = preco;
        let co = consumo;

        let tempo = (di / vm)
        let consu = (di / co)
        let gasto = (consu * pr)

        let t = tempo.toFixed(2)
        let g = gasto.toFixed(2)
        let c = consu.toFixed(2)

        setTimeout(() => {
            res.innerHTML = `Seu tempo de viajem sera de <strong>${t}</strong> horas, a uma velocidade média de 80 kilometros por hora, consumindo um total de <strong>${c}</strong> Lt. de gasolina, que custara <strong>${g}</strong> R$. `
        },900)
        
    }

    static limparInput(){
        txtkm.value = ""
        txtval.value = ""
        txtlit.value = ""
    }

    static verificarinput(){
        if (txtkm.value === "" || txtval.value === "" || txtlit.value === ""){
            return false
        }
    }

    static resposta(){

        resposta.style.transition = 'height 1s ease-in-out';
        
        resposta.style.height = '215px'
        resposta.style.padding = '10px';
    }


}

document.querySelector('#calcular').addEventListener('click', () => {
    let distancia = document.querySelector('#txtkm').value
    let preco = document.querySelector('#txtval').value
    let consumo = document.querySelector('#txtlit').value

    let viajem = new Viajem(distancia, preco, consumo)

    if(Viajem.verificarinput() === false){ return alert('Preencha todos os campos!!')}
    Viajem.resposta()
    Viajem.calcular(distancia, preco, consumo)
    Viajem.limparInput()
    
})