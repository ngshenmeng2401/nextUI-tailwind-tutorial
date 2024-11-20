import { homeSortingList } from "@/config/homeSortingButton";
import {
  faArrowDownShortWide,
  faArrowUpWideShort,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function HomeSearchBar({}) {
  const lang = useTranslations();

  const [listedOnSunSwap, setListedOnSunSwap] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  const onRefreshButtonPressed = () => {
    //do reload api or reload whole page
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-3 md:gap-5 pb-5 mx-5">
        <div className="hidden xl:flex col-span-1"></div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
          <input
            className="searchBar"
            color="primary"
            type="search"
            placeholder={lang("search_token_hint_text")}
          />
          {/* <Input variant="bordered" size="sm" type="text" placeholder={lang("search_token_hint_text")} /> */}
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <select
            className="search_bar_drop_down"
            // onChange={(e) => setSortColumn(e.target.value)}
          >
            {homeSortingList.map((item) => (
              <option key={item.key} value={item.value}>
                {lang(item.label)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
          <button
            type="button"
            className="list-sun-swap-btn"
            onClick={() => setListedOnSunSwap(!listedOnSunSwap)}
          >
            <Checkbox
              size="sm"
              isSelected={listedOnSunSwap}
              onValueChange={() => setListedOnSunSwap(!listedOnSunSwap)}
            >
              {lang("listed_on_sunswap_text")}
            </Checkbox>
          </button>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-1">
          <Button
            className="refresh-button justify-items-center place-self-center"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            <FontAwesomeIcon
              className="w-4 h-4 text-white"
              icon={
                sortOrder === "asc" ? faArrowDownShortWide : faArrowUpWideShort
              }
            />
          </Button>
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-1">
          <Button className="refresh-button justify-items-center">
            <FontAwesomeIcon
              className="w-4 h-4 text-white"
              icon={faRefresh}
              onClick={() => onRefreshButtonPressed()}
            />
          </Button>
        </div>
        <div className="hidden xl:flex col-span-1"></div>
      </div>
    </div>
  );
}
