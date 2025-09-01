const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarinformacao(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);

    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const mediaDeTempo = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - mediaDeTempo) * 100)
    const pessoasConectadasNoMundo = (dados.total_pessoas_conectadas / 1e9)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> de pessoas e aproximadamente <span>${pessoasConectadasNoMundo}</span> estão conectadas em alguma rede social e passam em média <span>${mediaDeTempo}</span></span>:<span>${minutos}</span>`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarinformacao();
