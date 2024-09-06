var eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        if(res == false) {
            setTimeout(() => {
                reject("Algo deu errado")
            },2000)
            return 
        }
        setTimeout(() => {
            resolve("Bem vindo")
        }, 2000)
    })
}

eventoFuturo(true).then((response) => {
    console.log(response)
}).catch((error) => {
   console.log(error)
})
.finally(() => {
    console.log("Fim do processo")
})