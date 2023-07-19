import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
     window.alert = mockAlert
    it('Deve exibir um alert com boas vindas', ()=> {
        login('acnormun@dio.me')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) acnormun@dio.me!')
    })
})