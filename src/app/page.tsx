"use client";
import HomeSearchBar from "@/components/HomeSearchBar";
import NavBarComponent from "@/components/Navbar";
import { tokenListConfig } from "@/config/tokenList";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { formatToKOrM } from "@/helpers/utils";

// import { Input } from "@nextui-org/react";

export default function Home() {
  const lang = useTranslations();

  const tokenList = tokenListConfig.map((item) => {
    const openNewTab = (address: string) => {
      const url = address;
      window.open(url, "_blank");
    };

    return (
      <div
        key={item.key}
        className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
      >
        <Link href={`/token/${item.contractAddress}`} className="block">
          <Card
            radius="sm"
            className="bg-transparent border-1 border-indigo-700"
          >
            <CardBody className="p-0">
              <Image
                radius="sm"
                width="100%"
                alt={item.tokenName}
                className="w-full rounded-b-none"
                style={{
                  objectFit: "cover",
                  minHeight: "300px",
                  maxHeight: "300px",
                }} // Fixed image height for consistency
                src={item.imageUrl}
              />
            </CardBody>
            <CardFooter className="p-3 w-100 block">
              <div
                className="grid grid-cols-12"
                style={{ minHeight: "20px", maxHeight: "20px" }}
              >
                <div
                  className="col-span-6"
                  style={{
                    fontSize: "10px",
                    color: "white",
                    whiteSpace: "nowrap",
                  }}
                >
                  {lang("created_by_text")}:{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      color: "purple",
                      textDecoration: "underline",
                    }}
                  >
                    {item.contractAddress.slice(0, 4)}....
                    {item.contractAddress.slice(-4)}
                  </span>
                </div>
                {/* url icon */}
                <div className="col-span-6 text-end">
                  {item.twitterUrl !== undefined &&
                    item.twitterUrl.length !== 0 && (
                      <FontAwesomeIcon
                        className="w-3 h-3 inline-block me-3"
                        icon={faTwitter}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default navigation behavior
                          e.stopPropagation(); // Prevent the Link component's click event
                          openNewTab(item.twitterUrl!);
                        }}
                      />
                    )}
                  {item.telegramUrl !== undefined &&
                    item.telegramUrl.length !== 0 && (
                      <FontAwesomeIcon
                        className="w-3 h-3 inline-block me-3"
                        icon={faTelegram}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default navigation behavior
                          e.stopPropagation(); // Prevent the Link component's click event
                          openNewTab(item.telegramUrl!);
                        }}
                      />
                    )}
                  {item.websiteUrl !== undefined &&
                    item.websiteUrl.length !== 0 && (
                      <FontAwesomeIcon
                        className="w-3 h-3 inline-block"
                        icon={faGlobe}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default navigation behavior
                          e.stopPropagation(); // Prevent the Link component's click event
                          openNewTab(item.websiteUrl!);
                        }}
                      />
                    )}
                </div>
              </div>
              <span>{item.tokenName}</span>
              <p
                className="text-gray-500"
                style={{
                  fontSize: "10px",
                  height: "67px", // This limits it to 4 lines if the font size is around 14px with line-height of 1.2
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}
              </p>
              <div style={{ fontSize: "10px" }}>
                <span className="text-slate-400">
                  {lang("market_cap_text")}:{" "}
                </span>
                <span>{formatToKOrM(item.marketCap) + " "}</span>
                {item.percentage !== 0 && <span>({item.percentage}%)</span>}
              </div>
              <div>
                <div className={"progress_bar_container mt-3 mb-2"}>
                  <div
                    className={"progress_bar"}
                    style={{
                      width: "60%",
                    }}
                  />
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <div className="container mx-auto" style={{ maxWidth: "1320px" }}>
      <NavBarComponent />
      <HomeSearchBar />
      <div className="container ">
        <div className="grid grid-cols-12 gap-3 md:gap-5 mx-5">
          <div className="hidden xl:flex col-span-1"></div>
          <div className="col-span-12 xl:col-span-10">
            <div className="grid grid-cols-12 gap-4 md:gap-5">{tokenList}</div>
          </div>
          <div className="hidden xl:flex col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
