"use client";
import { languageList } from "@/config/languageSwitcher";
import { defaultLocale, Locale } from "@/i18n/config";
import { getUserLocale, setUserLocale } from "@/services/locale";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  SharedSelection,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const lang = useTranslations();
  const [currentLocale, setCurrentLocale] = useState(new Set([defaultLocale]));
  function onChange(value: SharedSelection) {
    try {
      const locale = value.currentKey as Locale;
      setCurrentLocale(value as Set<Locale>);
      //then() is to ensure the locale value is assign into cookies successful before refresh page
      setUserLocale(locale).then(() => {
        window.location.reload(); // Reload the page after changing the language
      });
    } catch (error) {
      console.log("error: " + error);
    }
  }

  const fetchCurrentLocale = async () => {
    try {
      const getCurrentLocale = await getUserLocale();
      setCurrentLocale(new Set([getCurrentLocale as Locale]));
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    fetchCurrentLocale();
  }, []);

  const languageSwitcherList = languageList.map((item) => {
    return (
      <DropdownItem
        key={item.key}
        color="secondary"
        title={item.label}
        style={{ color: "black" }}
      ></DropdownItem>
    );
  });

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize" size="sm">
            {/* sizing problem when reload page */}
          {/* <FontAwesomeIcon icon={faGlobe} size="1x"/> */}
          {lang("language_text")}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={currentLocale}
        onSelectionChange={(keys) => onChange(keys)}
      >
        {languageSwitcherList}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
