const conta = {
  email: "ana@dio.me",
  password: "12345",
  name: 'Ana'
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
