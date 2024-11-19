export type LanguageSwitcherConfigProps = {
  key: string,
  label: string,
};

export const languageList: LanguageSwitcherConfigProps[] = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "zh-Hans",
    label: "简体中文",
  },
  {
    key: "zh-Hant",
    label: "繁體中文",
  },
];