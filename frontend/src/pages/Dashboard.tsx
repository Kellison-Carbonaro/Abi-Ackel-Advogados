import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Indicadores } from "../types/Indicadores";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface GraficoItem {
  name: string;
  value: number;
}

export default function Dashboard() {
  const [indicadores, setIndicadores] = useState<Indicadores | null>(null);

  useEffect(() => {
    api.get<Indicadores>("/Indicadores")
      .then(response => setIndicadores(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!indicadores) {
    return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <p style={{ fontSize: 18, color: "#666" }}>
        Carregando indicadores...
      </p>
    </div>
    )
  }

  const graficoData: GraficoItem[] = [
    { name: "Ganhos", value: indicadores.processosGanhos },
    { name: "Perdidos", value: indicadores.processosPerdidos }
  ];

  return (
    <div 
      style={{ 
        padding: 24,
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "#666"
      }}
    >
      <h1>Portal de Indicadores Jurídicos</h1>

      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <div>Processos Ativos: {indicadores.processosAtivos}</div>
        <div>Prazo Médio (dias): {indicadores.prazoMedioDias}</div>
        <div>Audiências da Semana: {indicadores.audienciasSemana}</div>
      </div>

      <h2>Resultados</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={graficoData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
