import { ToolbarPosition, VizCreateOptions } from "ngx-tableau";

export const LINKS = {
  worldMilitaryExpenditureTop15_1: {
    title: 'Military Expenditure Top 15',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/MilitaryExpenditureTop15?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/MilitaryExpenditureTop15/MilitaryExpenditureTop15?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  worldMilitaryExpenditureTop15_2: {
    title: 'Military Expenditure Top 15',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/MilitaryExpenditureTop15B?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/MilitaryExpenditureTop15B/MilitaryExpenditureTop15B?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  worldMilitaryExpenditureTop5: {
    title: '2011-2022',
    cloudLink: '',
    publicLink: 'https://public.tableau.com/views/2011-2021_16633612104890/2011-2021?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  comparisonOfExpenditureTop10: {
    title: 'Comparison of Expenditure - Top 10 Countries',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/ComparisonofExpenditure-Top10?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/ComparisonofExpenditure-Top10/ComparisonofExpenditure-Top10?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  perCapitaTop10: {
    title: 'Per Capita - Top 10',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/PerCapita-Top10?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/PerCapita-Top10/PerCapita-Top10?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  shareOfGdpTop10: {
    title: 'Share of GDP - Top 10 by Military Expenditure',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/ShareofGDP-Top10byMilitaryExpenditure?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/ShareofGDP-Top10byMilitaryExpenditure/ShareofGDP-Top10byMilitaryExpenditure?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  govtSpendingTop10ByMilitaryExpenditure: {
    title: 'Govt. Spending - Top 10 by Military Expenditure',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Govt_Spending-Top10byMilitaryExpenditure?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/Govt_Spending-Top10byMilitaryExpenditure/Govt_Spending-Top10byMilitaryExpenditure?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  comparisonTop10_1: {
    title: 'Comparison A',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Comparison1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/ComparisonI/ComparisonA?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  comparisonTop10_2: {
    title: 'Comparison B',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Comparison2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/ComparisonII/ComparisonII?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  geoMap_1: {
    title: 'GeoMap 2021',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/GeoMap2021?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/Global2021_16633598576080/Global2021?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  geoMap_2: {
    title: 'GeoMap 2021',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/GeoMapII2021?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/MilitaryExpenditureTop15B/MilitaryExpenditureTop15B?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  timelineTop4_1: {
    title: 'Timeline of Military Expenditure for the Top 4 Countries',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Top4Timeline?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/TimelineTop4/TimelineTop4?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  timelineTop5: {
    title: 'Timeline of Military Expenditure for the Top 4 Countries',
    cloudLink: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Top4Timeline2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
    publicLink: 'https://public.tableau.com/views/MilitaryExpenditureTop15B/MilitaryExpenditureTop15B?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
  minimumExpense: {
    title: 'Military Expenditure for the Bottom 4 Countries',
    cloudLink: '',
    publicLink: 'https://public.tableau.com/views/MinimumExpense2021/MinimumExpense2021?:language=en-US&:display_count=n&:origin=viz_share_link'
  },
}

export const OPTIONS: VizCreateOptions = {
  hideTabs: true,
  hideToolbar: true,
  disableUrlActionsPopups: false,
  toolbarPosition: ToolbarPosition.TOP,
  onFirstInteractive: (event) => {
    // console.log('On first interactive event!', event);
  }
};
