import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
     window.alert = mockAlert
    const mockEmail = "ana@dio.me"
    it('Deve exibir um alert com boas vindas caso o email seja válido', ()=> {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) ana@dio.me!')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('emailinvalido@dio.me')
        expect(mockAlert).toHaveBeenCalledWith('Email Inválido')
    })
})