const conta = {
  email: "ana@dio.me",
  password: "12345",
  name: 'Ana',
  balance: 2000.00,
  id: 1
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 1000);
});
