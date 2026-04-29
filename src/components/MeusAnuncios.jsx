export default function MeusAnuncios() {
  const team = [
    {
      photo: "https://m.media-amazon.com/images/I/518EG-3UJQL._AC_SX679_.jpg",
      title: "Notebook Acer gamer i5",
      price: 3000.0,
      description:
        "Vendo notebook em excelentes condições de uso. Muito novo!!! Pra vender hoje!",
      local: "Fortaleza, CE",
      createdAt: "28/08/2026",
    },
    {
      photo: "https://m.media-amazon.com/images/I/61YULkQowXL._AC_SX679_.jpg",
      title: "Mouse logitech m5",
      price: 200.0,
      description: "Mouse logitech para venda, melhor não existe.",
      local: "Fortaleza, CE",
      createdAt: "20/04/2026",
    },
    {
      photo:
        "https://m.media-amazon.com/images/I/51QQAhxiXDL._AC_SY300_SX300_QL70_ML2_.jpg",
      title: "Monitor LG GAMER 24 polegadas",
      price: 1800.0,
      description: "Vendo monitor 120hz gamer, marca LG",
      local: "Fortaleza, CE",
      createdAt: "22/04/2026",
    },
    {
      photo: "https://m.media-amazon.com/images/I/51nhfUHjZJL._AC_SX679_.jpg",
      title: "Cadeira de escritório presidente",
      price: 3000.0,
      description:
        "Vendo cadeira de presidente para escritório, muito confortável",
      local: "Fortaleza, CE",
      createdAt: "26/04/2026",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meus Anuncios
          </h3>
          <p className="text-gray-600 mt-3">
            Aqui você encontra os anúncios publicados por você.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li key={idx} className="gap-8 sm:flex">
                <div className="w-full h-60">
                  <img
                    src={item.photo}
                    className="w-full h-full object-contain object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-indigo-600">
                    {" "}
                    {item.createdAt} - {item.local}
                  </p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <p className="text-2xl font-bold text-violet-600">
                      R$ {item.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// QUAL A DIFERENÇA ENTRE HTTPS:// , DOMÍNIO, PARAMS, ROTA, QUERY PARAMS?

// HTTPS:// - PROTOCOLO DE COMUNICAÇÃO
// DOMÍNIO - NOME DO SITE
// PARAMS - PARÂMETROS DE ROTA, USADOS PARA IDENTIFICAR RECURSOS ESPECÍFICOS
// ROTA - CAMINHO QUE LEVA A UMA PÁGINA OU RECURSO ESPECÍFICO
// QUERY PARAMS - PARÂMETROS DE CONSULTA, USADOS PARA FILTRAR OU ORDENAR DADOS EM UMA PÁGINA

//EXEMPLO DE URL: https://www.exemplo.com/produtos/123?categoria=eletronicos&ordenar=preco

// HTTPS:// - PROTOCOLO DE COMUNICAÇÃO
// www.exemplo.com - DOMÍNIO
// /produtos/123 - ROTA (com PARAMS "123")
// ?categoria=eletronicos&ordenar=preco - QUERY PARAMS (categoria e ordenar)
