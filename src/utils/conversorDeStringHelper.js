module.exports = (objetoParams) =>{
    for(let propriedade in objetoParams) {
        if (/Id|id/.test(propriedade)) {
            objetoParams[propriedade] = Number(objetoParams[propriedade]);
        }
    }
    return objetoParams;
}

//transforma id no formato string para id no formato numerico