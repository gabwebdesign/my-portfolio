"use client";
import { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import { ChartType } from "chart.js";

type PieChartProps = {
  type: ChartType;
  labels: string[];
  data: number[];
  backgroundColors: string[];
}

const PieChart = ({ type,labels,data,backgroundColors }:PieChartProps) => {
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
      type,
      data: {
      labels,
      datasets: [
        {
        data,
        backgroundColor:backgroundColors,
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
