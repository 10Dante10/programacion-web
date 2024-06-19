export function Prueba({ Nombre, Apellido }) {
  const products = [
    { title: "Col", id: 1, description: "repollo saludable y bien" },
    { title: "Ajo", id: 2, description: "especie rica" },
    { title: "Manzana", id: 3, description: "fruta muy rica y saludable" },
  ];
  return (
    <>
      <h1>{`${Nombre} ${Apellido}`}</h1>
      {products.map((producto, i) => {
        return (
          <div key={producto.id}>
            <h2>title: {producto.title}</h2>
            <p>{producto.description}</p>
          </div>
        );
      })}
    </>
  );
}
