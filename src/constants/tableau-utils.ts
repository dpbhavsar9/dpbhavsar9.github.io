import { ToolbarPosition, VizCreateOptions } from "ngx-tableau";

export const LINKS = {
  worldMilitaryExpenditureTop15_1: {
    title: 'Military Expenditure Top 15',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/MilitaryExpenditureTop15?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  worldMilitaryExpenditureTop15_2: {
    title: 'Military Expenditure Top 15',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/MilitaryExpenditureTop15B?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  comparisonOfExpenditureTop10: {
    title: 'Comparison of Expenditure - Top 10 Countries',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/ComparisonofExpenditure-Top10?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  perCapitaTop10: {
    title: 'Per Capita - Top 10',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/PerCapita-Top10?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  shareOfGdpTop10: {
    title: 'Share of GDP - Top 10 by Military Expenditure',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/ShareofGDP-Top10byMilitaryExpenditure?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  govtSpendingTop10ByMilitaryExpenditure: {
    title: 'Govt. Spending - Top 10 by Military Expenditure',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Govt_Spending-Top10byMilitaryExpenditure?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  comparisonTop10_1: {
    title: 'Comparison A',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Comparison1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  comparisonTop10_2: {
    title: 'Comparison B',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Comparison2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  geoMap_1: {
    title: 'GeoMap 2021',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/GeoMap2021?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  geoMap_2: {
    title: 'GeoMap 2021',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/GeoMapII2021?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  timelineTop4_1: {
    title: 'Timeline of Military Expenditure for the Top 4 Countries',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Top4Timeline?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  },
  timelineTop4_2: {
    title: 'Timeline of Military Expenditure for the Top 4 Countries ',
    link: 'https://prod-apnortheast-a.online.tableau.com/t/darshanipba/views/IPBABYOPBook1/Top4Timeline2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  }

}

export const OPTIONS: VizCreateOptions = {
  hideTabs: true,
  hideToolbar: true,
  disableUrlActionsPopups: true,
  toolbarPosition: ToolbarPosition.TOP,
  onFirstInteractive: (event) => {
    // console.log('On first interactive event!', event);
  }
};
