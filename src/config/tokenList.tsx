export type TokenListConfigProps = {
  key: string;
  tokenName: string;
  symbol: string;
  description: string;
  contractAddress: string;
  createdByAddress: string;
  marketCap: number;
  percentage: number;
  imageUrl: string;
  twitterUrl?: string;
  websiteUrl?: string;
  telegramUrl?: string;
};

export const tokenListConfig: TokenListConfigProps[] = [
  {
    key: "SUNDOG",
    tokenName: "Sundog",
    symbol: "SUNDOG",
    description: "SUNDOG: The Dog on TRON taking us to the Sun",
    contractAddress: "TXL6rJbvmjD46zeN1JssfgxvSo99qC8MRT",
    createdByAddress: "TXr7ifGXHzAerNz2go11eJQ5R2QwcRJkAf",
    marketCap: 175240000,
    percentage: 0,
    imageUrl:
      "https://cdn.sunpump.meme/public/logo/SUNDOG_TXr7if_EzxfYukzq9ZU.png",
    twitterUrl: "https://x.com/SUNDOG_TRX",
    websiteUrl: "https://www.sundog.meme/",
    telegramUrl: "https://t.me/SUNDOG_TRX",
  },
  {
    key: "JMASCOT",
    tokenName: "Justin Mascot",
    symbol: "JMASCOT",
    description: "Justin Sun Mascot",
    contractAddress: "TQSyyxow5QC5xgzeenKdWd236jcg4GddY3",
    createdByAddress: "TCADeYzWSynadP8TZP2BXSQUsjd7H1Mv66",
    marketCap: 18840,
    percentage: 23.98,
    imageUrl:
      "https://cdn.sunpump.meme/public/logo/JMASCOT_TCADeY_QkWYsPcw0Lvl.png",
  },
  {
    key: "SUGAR",
    tokenName: "Sugar Boy",
    symbol: "SUGAR",
    description: "Sugar Boy - is a pure $ugar",
    contractAddress: "TRfWigSp8963USn5K8RgP5QVNvf1tQwUhF",
    createdByAddress: "TVo8bcMTQD9Kh27n6EtqurFp2ZSRFQvkF7",
    marketCap: 143660,
    percentage: 0,
    imageUrl:
      "https://cdn.sunpump.meme/public/logo/SUGAR_TVo8bc_h2D7sPazj3k3.png",
  },
  {
    key: "FRED",
    tokenName: "FRED",
    symbol: "FRED",
    description:
      "I’m Fred - 弗雷德, Justin’s best red friend, we grew up in Xining, and now we live together on Tron.",
    contractAddress: "TFenNvccFr9zvkh9xhQspcAxY4xxttNkWg",
    createdByAddress: "TN3TUP3motGSQwjAFFi6cj2qk2mD6JzaVE",
    marketCap: 108470,
    percentage: 0,
    imageUrl:
      "https://cdn.sunpump.meme/public/logo/FRED_TN3TUP_UQR8ZWT9KzOY.png",
    twitterUrl: "https://x.com/fredtrx",
    websiteUrl: "https://www.fredtrx.com/en",
    telegramUrl: "https://www.t.me/fredtron",
  },
  {
    key: "PXAI",
    tokenName: "PXAI",
    symbol: "PXAI",
    description:
      "First MEME AI token that Elon Musk likes and comments on 𝕏 😎 https://x.com/elonmusk/status/1844534905428115537?s=46&t=5roq7bXiLvKi2t1dcEXNVA",
    contractAddress: "TCxDsTm4nHDwNmY5MUQ4GFmSsbUqHnee2W",
    createdByAddress: "TSJi77T7tyumTSVBVMmVPHcui8je4nQfxu",
    marketCap: 11970,
    percentage: 0,
    imageUrl:
      "https://cdn.sunpump.meme/public/logo/PXAI_TSJi77_BOFSAx5r6M8V.jpg",
    twitterUrl: "https://x.com/PrimeXAI",
    websiteUrl: "https://primecrypto.news/",
    telegramUrl: "https://t.me/pxai_tron",
  },
  {
    key: "SUNFE",
    tokenName: "FemaleElephant",
    symbol: "SUNFE",
    description:
      "SUNFE是tron网络唯一探索如何超越冰冷的一对一用户/助手模式，而以平等网络的形式与人工智能互动的项目",
    contractAddress: "TASC4sgG9nPdWQymTZK93Qr7vPsV1nTK4C",
    createdByAddress: "TRnerK8HVzB9Z578n21Ea5ktUbLxWATRck",
    marketCap: 162500,
    percentage: 0,
    imageUrl:
      "https://cdn.sunpump.meme/public/logo/SUNFE_TRnerK_5nLUbet7YIJk.png",
  },
];
