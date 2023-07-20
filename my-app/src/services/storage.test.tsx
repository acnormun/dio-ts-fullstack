import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const diobank = {
  login: false,
};

describe("storage", () => {
  it("Deve retornar o objeto no localStorage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith('diobank');
  });

  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("Deve criar o objeto no localstorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(diobank)
    );
  });

  it('Deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(diobank)
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
  })
});
