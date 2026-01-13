const API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjU1OTI2NTU4OWE5MzRmNDFiYjdlNTA1YTI3ZjhkMWZjIiwiaCI6Im11cm11cjY0In0=";

// Fatores de emissão (kg CO2 por km)
const fatores = {
  bicicleta: 0,
  carro: 0.120,
  onibus: 0.089,
  caminhao: 0.250
};

// Função para buscar coordenadas de uma cidade
async function getCoordenadas(cidade) {
  const url = `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(cidade)}`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  if (!dados.features || dados.features.length === 0) {
    throw new Error("Cidade não encontrada");
  }

  return dados.features[0].geometry.coordinates; // [lng, lat]
}

// Função para calcular distância entre duas coordenadas
async function calcularDistancia(origemCoord, destinoCoord) {
  const url = "https://api.openrouteservice.org/v2/matrix/driving-car";

  const body = {
    locations: [origemCoord, destinoCoord],
    metrics: ["distance"]
  };

  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const dados = await resposta.json();

  // Distância vem em metros → converter para km
  return dados.distances[0][1] / 1000;
}

document.querySelector(".btn").addEventListener("click", async () => {
  const origem = document.getElementById("origem").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const transporte = document.querySelector("input[name='transporte']:checked");

  if (!origem || !destino) {
    alert("Digite origem e destino.");
    return;
  }

  if (!transporte) {
    alert("Selecione um meio de transporte.");
    return;
  }

  try {
    // 1. Buscar coordenadas
    const origemCoord = await getCoordenadas(origem);
    const destinoCoord = await getCoordenadas(destino);

    // 2. Calcular distância real
    const distancia = await calcularDistancia(origemCoord, destinoCoord);

    // 3. Calcular emissão
    const fator = fatores[transporte.value];
    const emissao = distancia * fator;

    alert(
      `Distância estimada: ${distancia.toFixed(2)} km\n` +
      `Emissão aproximada: ${emissao.toFixed(3)} kg de CO₂`
    );

  } catch (erro) {
    alert("Erro ao calcular distância: " + erro.message);
  }
});
