export const CHARTS_CONFIG = {
  barCharts: {
    vertical: {
      key: 'vertical',
      name: 'Vertical Bar Chart',
      config: {
        showXAxis: true,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: 'xLabel',
        showYAxisLabel: true,
        yAxisLabel: 'yLabel',
        colorScheme: {
          domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
        },
      },
    },
    horizontal: {
      key: 'horizontal',
      name: 'Horizontal Bar Chart',
      config: {
        showXAxis: true,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: 'xLabel',
        showYAxisLabel: true,
        yAxisLabel: 'yLabel',
        colorScheme: {
          domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
        },
      },
    },
    groupedVertical: {
      key: 'groupedVertical',
      name: 'Grouped Vertical Bar Chart',
      config: {
        showXAxis: true,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: 'xLabel',
        showYAxisLabel: true,
        yAxisLabel: 'yLabel',
        colorScheme: {
          domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
        },
        legendTitle: ''
      },
    },
    groupedHorizontal: {
      key: 'groupedHorizontal',
      name: 'Grouped Horizontal Bar Chart',
      config: {
        showXAxis: true,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: 'xLabel',
        showYAxisLabel: true,
        yAxisLabel: 'yLabel',
        colorScheme: {
          domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
        },
        legendTitle: ''
      },
    },
    stackedVertical: {
      key: 'groupedVertical',
      name: 'Stacked Vertical Bar Chart',
    },
    stackedHorizontal: {
      key: 'stackedHorizontal',
      name: 'Stacked Horizontal Bar Chart',
    },
    normalizedVertical: {
      key: 'normalizedVertical',
      name: 'Normalized Vertical Bar Chart',
    },
    normalizedHorizontal: {
      key: 'normalizedHorizontal',
      name: 'Normalized Horizontal Bar Chart',
    },
  },
  pieCharts: {
    pie: {
      key: 'pie',
      name: 'Pie Chart',
    },
    advancedPie: {
      key: 'advancedPie',
      name: 'Advanced Pie Chart',
    },
    pieGrid: {
      key: 'pieGrid',
      name: 'Pie Grid Chart',
    },
  },
  lineAreaCharts: {
    line: {
      key: 'line',
      name: 'Line Chart',
    },
    area: {
      key: 'area',
      name: 'Area Chart',
    },
    stackedArea: {
      key: 'stackedArea',
      name: 'Stacked Area Chart',
    },
    normalizedArea: {
      key: 'normalizedArea',
      name: 'Normalized Area Chart',
    },
  },
  otherCharts: {
    polarRadar: {
      key: 'polarRadar',
      name: 'Polar/Radar Chart',
    },
    heatMap: {
      key: 'heatMap',
      name: 'Heat Map Chart',
    },
    treeMap: {
      key: 'treeMap',
      name: 'Tree Map Chart',
    },
    numberCard: {
      key: 'numberCard',
      name: 'Number Card Chart',
    },
    guage: {
      key: 'guage',
      name: 'Guage Chart',
    },
    linearGuage: {
      key: 'linearGuage',
      name: 'Linear Guage Chart',
    },
    dag: {
      key: 'dag',
      name: 'DAG Chart',
    },
  },
};

export const CHARTS = [
  ...Object.keys(CHARTS_CONFIG.barCharts),
  ...Object.keys(CHARTS_CONFIG.lineAreaCharts),
  ...Object.keys(CHARTS_CONFIG.pieCharts),
  ...Object.keys(CHARTS_CONFIG.otherCharts)
];
