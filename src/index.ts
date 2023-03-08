import * as process from "process";

export function contadorMs(teclado: Array<number>, numero:number): number {
    const zeroPos = teclado.indexOf(0);
    const splitNumbers = String(numero).split('');
    const mapNumber = splitNumbers.map(item => {
        return teclado.indexOf(Number(item));
    });

    const sumRed = mapNumber.reduce((accum, curr, index) => {        
        const itemCompare = index === 0 ? zeroPos : mapNumber[index - 1];
        const msCount =  curr > itemCompare ? curr - itemCompare : (teclado.length - itemCompare) + curr;
        return accum + msCount;
    }, 0);

    return sumRed;
}

console.log(`Resultado: ${contadorMs(JSON.parse(process.argv[2]), Number(process.argv[3]))}ms`);