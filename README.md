# Abi Ackel Advogados – Portal de Indicadores Jurídicos

Este repositório contém a implementação de um **protótipo técnico** desenvolvido como parte de um teste prático para avaliação técnica.

O objetivo do projeto é demonstrar a construção de um **Portal de Indicadores**, com frontend em React, backend simples em API REST e a concepção de automações e uso de IA aplicados ao contexto jurídico.

---

## 🏗️ Arquitetura Geral

O projeto está dividido em duas partes principais:

- **Backend**: API REST simples responsável por fornecer indicadores jurídicos (dados mockados)
- **Frontend**: Portal web com dashboard de indicadores numéricos e gráficos

```
root
├── backend
│   └── AbiAckel.Api
├── frontend
│   └── abiackel-dashboard
```

---

## 🔧 Tecnologias Utilizadas

### Backend
- .NET 8
- ASP.NET Core Web API
- Swagger (OpenAPI)
- CORS configurado para consumo pelo frontend

### Frontend
- ReactJS
- Vite
- TypeScript
- Axios
- Recharts

---

## 🚀 Backend – API de Indicadores

A API disponibiliza um endpoint simples para fornecimento de indicadores jurídicos, com dados mockados.

### Endpoint

```
GET /api/Indicadores
```

### Exemplo de resposta

```json
{
  "processosAtivos": 120,
  "processosGanhos": 45,
  "processosPerdidos": 12,
  "prazoMedioDias": 28,
  "audienciasSemana": 6
}
```

A documentação da API pode ser acessada via **Swagger** após subir o backend.

---

## 📊 Frontend – Portal de Indicadores

O frontend consiste em um dashboard simples que consome a API e exibe:

- Indicadores numéricos (KPIs)
- Gráfico comparativo de processos ganhos x perdidos

### Funcionalidades
- Consumo de API via Axios
- Tipagem forte com TypeScript
- Organização por camadas (services, pages, types)

---

## 🔄 Automação (n8n – Conceitual)

Foi definida uma automação conceitual utilizando **n8n**, com o objetivo de monitorar os indicadores jurídicos e acionar alertas automaticamente.

### Fluxo proposto

1. **Cron Trigger**
   - Executa periodicamente (ex: a cada 1 hora)

2. **HTTP Request**
   - Consulta o endpoint `GET /api/Indicadores`

3. **Regra de Negócio (IF)**
   - Exemplo: `processosAtivos > 100`

4. **Ação de Alerta**
   - Envio de notificação por **e-mail** ou **WhatsApp** para a equipe jurídica

---

## 📏 Regra de Negócio Avaliada

Exemplo de regra simples utilizada na automação:

- Caso o número de processos ativos ultrapasse um limite pré-definido, um alerta é disparado para acompanhamento.

Essa regra pode ser facilmente ajustada para outros indicadores, como prazo médio ou volume de audiências.

---

## 📢 Alertas

Os alertas podem ser enviados por:

- **E-mail**: via SMTP
- **WhatsApp**: via APIs como WhatsApp Business ou Twilio

O objetivo é notificar gestores ou equipes responsáveis de forma proativa.

---

## 🤖 Agente de IA (Conceitual)

Foi idealizado um **Agente de IA** com foco em apoio à tomada de decisão no contexto jurídico.

### Possíveis atribuições do agente

- Análise automática dos indicadores jurídicos
- Identificação de tendências ou anomalias (ex: crescimento atípico de processos)
- Geração de resumos executivos em linguagem natural
- Sugestão de ações corretivas ou redistribuição de processos

O agente poderia ser integrado via API de IA (ex: OpenAI) e acionado a partir da automação n8n.

---

## ▶️ Como Executar o Projeto

### Backend

```bash
dotnet restore
dotnet run
```

A API ficará disponível conforme configuração do `launchSettings.json`.

### Frontend

```bash
npm install
npm run dev
```

O frontend ficará disponível em:

```
http://localhost:5173
```

---

## ✅ Considerações Finais

Este projeto tem como foco demonstrar:

- Organização de código
- Boas práticas de desenvolvimento
- Clareza arquitetural
- Capacidade de propor soluções técnicas e conceituais

Os dados utilizados são simulados, com o objetivo exclusivo de avaliação técnica.

