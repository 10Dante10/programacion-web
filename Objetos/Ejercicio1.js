function createObject(name, subs) {
  const chanel = {
    name: "kk",
    suscribers: 100,
    hash: name.lenght * suscribers,
    getStatus: () => {
      return `El canal de ${name} tiene ${suscriptores}`;
    },
  };
  return chanel;
}
const chanel = createObject("kk", 100);
console.log(chanel.getStatus());
