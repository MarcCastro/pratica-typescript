const desenhaRetangulo = function(letra: string, linha: number, coluna: number): void{
    let desenho: string = '';

    for (let i = 1; i <= linha; i++) {
        desenho += letra;
        for (let j = 1; j <= (coluna-2); j++) {
            if (i === 1 || i === linha) {
                desenho += letra;
            } else {
                desenho += '$';
            }
        }
        desenho += letra;
        console.log(`${desenho} \n`)
        desenho = '';
    }

}

desenhaRetangulo('m', 10, 50);


