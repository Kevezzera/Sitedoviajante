
    function clickar () {
        var tn1 = window.document.getElementById('txtkm')
        var tn2 = window.document.getElementById('txtval')
        var tn3 = window.document.getElementById('txtlit')
        
        var r1 = document.getElementById('res1')
        var r2 = document.getElementById('res2')
        var r3 = document.getElementById('res3')
        
        
        var di = Number(tn1.value)
        var va = Number(tn2.value)
        var li = Number(tn3.value)
        
        var vm = 80;
        
        var hs = (di / vm)
        var lt = (di / li)
        var gast = (va * lt )

        var g = gast.toFixed(2)
        var l = lt.toFixed(2)
        var h = hs.toFixed(2)
        
        r1.innerText = `Tempo de viajem: ${h} Horas.`
        r2.innerText = `Gasto com combustivel: ${g} R$. `
        r3.innerText = `Consumo com combustivel: ${l} Lt.`
    }
    
  