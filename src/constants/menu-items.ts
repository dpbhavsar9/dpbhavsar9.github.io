import { ROUTER_UTILS } from './router.utils';

export const MENU_ITEMS = [
  {
    label: 'Dashboard',
    icon: 'fas fa-chart-line',
    route: ROUTER_UTILS.config.navigation.dashboard,
    description: 'Military expenditure dashboard',
  },
  {
    label: 'World Military Expenditure',
    icon: 'fas fa-globe-americas',
    route: ROUTER_UTILS.config.navigation.constantUsd,
    description: 'Military expenditure by country, in constant (2020) US$ m.',
  },
  {
    label: 'Share of GDP',
    icon: 'fas fa-dollar-sign',
    route: ROUTER_UTILS.config.navigation.shareOfGdp,
    description: 'Military expenditure by country as percentage of gross domestic product',
  },
  {
    label: 'Per Capita',
    icon: 'fas fa-hand-holding-usd',
    route: ROUTER_UTILS.config.navigation.perCapita,
    description: 'Military expenditure per capita  by country',
  },
  {
    label: 'Share of Govt. Spending',
    icon: 'fas fa-flag-usa',
    route: ROUTER_UTILS.config.navigation.govtSpending,
    description: 'Military expenditure by country as percentage of government spending',
  },
  {
    label: 'Other',
    icon: 'fas fa-chart',
    route: ROUTER_UTILS.config.navigation.other,
    description: 'Military expenditure by country as percentage of government spending',
  },
  {
    label: 'ReadMe',
    icon: 'fas fa-book-open',
    route: ROUTER_UTILS.config.navigation.readme,
    description: 'Footnotes and special notes',
  },
  // {
  //   label: '*Regionwise Summary',
  //   icon: 'fas fa-globe',
  //   route: ROUTER_UTILS.config.navigation.region,
  //   description: 'Military expenditure by region in constant US dollars',
  // },
];
