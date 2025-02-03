"use client"; // Para asegurarnos de que se renderiza en el cliente
import { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destruir instancia previa si existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: "doughnut",
      data: {
      labels: ["JavaScript", "TypeScript", "Python", "Angular", "React"],
      datasets: [
        {
        data: [30, 20, 25, 15, 10],
        backgroundColor: ["#1B225D", "#FB8569", "#EEEEEE", "#1B225D", "#FB8569"],
        },
      ],
      },
      options: {
      plugins: {
        legend: {
        display: false, // 🔹 Oculta la leyenda
        },
        tooltip: {
        enabled: true, // 🔹 Oculta el tooltip al pasar el mouse
        },
      },
      },
    };

    chartInstance.current = new Chart(ctx, config);

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
