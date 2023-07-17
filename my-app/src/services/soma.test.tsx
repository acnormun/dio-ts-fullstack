import { multiplica, soma } from "./soma"

describe('soma', () => {
    it('deve somar 1 ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o número por 2', ()=> {
        const value = multiplica(2)
        expect(value).toBe(4)
    })
})