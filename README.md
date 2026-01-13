# 🌿 Calculadora de Emissão de CO₂

Uma aplicação web que estima a emissão de dióxido de carbono (CO₂) gerada em viagens, utilizando dados geográficos reais e fatores de emissão por tipo de transporte.  
Ideal para quem deseja entender o impacto ambiental de deslocamentos e promover escolhas mais sustentáveis.

---

## 🚀 Funcionalidades

- Busca automática de coordenadas de cidades via **OpenRouteService API**
- Cálculo real da distância entre origem e destino
- Opção de inserir distância manualmente
- Fatores de emissão para diferentes meios de transporte
- Interface moderna e responsiva em formato de landing page
- Código simples, organizado e fácil de entender

---

## 🖥️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-----------|------------|
| **HTML5** | Estrutura da aplicação |
| **CSS3**  | Estilização e layout responsivo |
| **JavaScript** | Lógica da calculadora e integração com API |
| **OpenRouteService API** | Geocodificação e cálculo de distância |

---


## 📦 Como Executar o Projeto

```bash

# Clone o repositório
git clone https://github.com/mathewsph2/Bootcamp_GitHub_Copilot_Codigo_na_Pratica
# Acesse a pasta
cd Bootcamp_GitHub_Copilot_Codigo_na_Pratica

# Depois, abra o arquivo:

index.html

# Você pode abrir diretamente no navegador ou usar extensões como Live Server no VS Code.

```

## 🔑 Configuração da API

Este projeto utiliza a OpenRouteService API.

Crie uma conta gratuita em:

https://openrouteservice.org/

Gere sua API Key

Substitua no arquivo script.js:

```
js
const API_KEY = "SUA_CHAVE_AQUI";
``` 


## 📁 Estrutura do Projeto

/

├── index.html

├── CSS/

│   └── style.css

├── JS/

│   └── script.js

└── README.md



## 🧮 Como o cálculo funciona

A emissão é calculada pela fórmula:

```
Emissão (kg CO₂) = Distância (km) × Fator de emissão
```

Fatores utilizados:


| Transporte | Emissão (kg CO₂ / km) | 
|------------|-----------------------|
|Biscicleta | 0.000 |
|Carro      | 0.120 |
|Ônibus     | 0.089 |
|Caminhão   | 0.250 |



## 🛠️ Melhorias Futuras

- Exibir resultado diretamente na página (sem alert)

- Gráficos comparativos entre meios de transporte

- Histórico de cálculos




## ⭐ Contribua

Se este projeto te ajudou ou inspirou, deixe uma estrela ⭐ no repositório.
Sugestões e melhorias são sempre bem-vindas.
