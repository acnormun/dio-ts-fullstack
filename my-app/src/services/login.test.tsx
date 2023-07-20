import { login } from "./login";

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn()

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    isLoggedIn: true,
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe("login", () => {
  const mockEmail = "ana@dio.me";
  it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
   const response =  await login(mockEmail);
    expect(response).toBeTruthy()
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("emailinvalido@dio.me");
    expect(response).toBeFalsy()
  });
});
