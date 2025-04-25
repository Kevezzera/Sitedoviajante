let vl1 = document.querySelector('#txtkm')
let vl2 = document.querySelector('#txtval')
let vl3 = document.querySelector('#txtlit')
let res = document.querySelector('#resposta')


function clickar () {
    
    let di = Number(vl1.value)
    let va = Number(vl2.value)
    let li = Number(vl3.value)
        
    let vm = 80;
        
    let hs = (di / vm)
    let lt = (di / li)
    let gast = (va * lt )

    let g = gast.toFixed(2)
    let l = lt.toFixed(2)
    let h = hs.toFixed(2)
    
    res.innerHTML = `Seu tempo de viajem sera de <strong>${h}</strong> horas, a uma velocidade média de 80 kilometros por hora consumindo assim um total de <strong>${l}</strong> Lt. de gasolina, que custara <strong>${g}</strong> R$. `
}
    
  