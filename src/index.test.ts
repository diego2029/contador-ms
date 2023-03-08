import {contadorMs} from "./index";

const testCases = [
    {
        id: 0,
        input: { teclado: [8,9,0,7,6,5,1,2,3,4], numero: 1390 },
        output: 10
    },
    {
        id: 1,
        input: { teclado: [0,1,2,3,4,5,6,7,8,9], numero: 2378 },
        output: 8
    },
    {
        id: 2,
        input: { teclado: [9,8,7,6,5,4,3,2,1,0], numero: 25 },
        output: 15
    },
    {
        id: 3,
        input: { teclado: [7,2,3,5,1,0,4,6,9,8], numero: 459 },
        output: 13
    },
]

describe('Suma de los milisegundos que tarda en computar el procesador', () => {
    it.each(testCases)('Success case $id', (element) => {
        expect(contadorMs(element.input.teclado, element.input.numero)).toBe(element.output);
    })
})