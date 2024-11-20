export type HomeSortingConfigProps = {
    key: string,
    label: string,
    value: string,
  };
  
  export const homeSortingList: HomeSortingConfigProps[] = [
    {
      key: "tokenName",
      label: "token_name_text",
      value:"name",
    },
    {
      key: "launchedTime",
      label: "launched_time_text",
      value:"createdInstant",
    },
    {
      key: "marketCap",
      label: "market_cap_text",
      value:"marketcap",
    },
  ];