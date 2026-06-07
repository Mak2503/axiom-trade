"use client";
import { RiEqualizer3Line, RiFlashlightFill } from "react-icons/ri";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import TableContents from "./TableContents";
import { TokenCard } from "./TokenCard";

const tokenData = [
  {
    address: '0x378a2a981e28023bd356cb1f740bd0131e374444',
    name: '关门打狗',
    fullName: '关门打台狗 正义使命2025',
    tagline: 'Close the door',
    translation: 'Close the door',
    imageUrl: 'https://axiomtrading-bnb.sfo3.cdn.digitaloceanspaces.com/0x378a2a981e28023bd356cb1f740bd0131e374444.webp',
    marketCap: 5460,
    volume: 985,
    transactions: { total: 11, buyPercentage: 54.5455, sellPercentage: 45.4545 },
    age: '2m',
    holders: 0,
    topHolders: 0,
    maxHolders: 51,
    protocol: {
      name: 'Fourmeme V2',
      icon: 'https://axiom.trade/images/evm/protocols/fourmeme.svg',
      color: 'rgb(124, 230, 96)'
    },
    metrics: { creatorShare: 5, devsShare: 0, sniper: 1 },
    social: {
      tweetUrl: 'https://x.com/i/status/2005464774243693019',
      protocolUrl: 'https://four.meme/token/0x378a2a981e28023bd356cb1f740bd0131e374444'
    },
    quickBuyAmount: '0 BNB'
  },
  // ... more tokens
];


interface TableColumnProps {
  label: string;
}

const TableColumn = ({ label }: TableColumnProps) => {
  const [tokenType, setTokenType] = useState("P1");
  return (
    <div className="flex flex-1 h-full bg-backgroundSecondary rounded-[8px] sm:rounded-[4px] overflow-hidden">
      <div className="border-r border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
        <div className="sticky top-0 z-30 w-full">
          <div className=" hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-3 min-h-12 justify-end items-center pr-3 pl-1 lg:pl-3 xl:pl-3 border-b border-primaryStroke">
            <div className="flex flex-row items-center gap-4 flex-1">
              <span className="text-textPrimary text-[16px] font-medium flex-1">
                {label}
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="hidden lg:block">
                <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border flex flex-row h-7 pl-1 gap-1.5 justify-start items-center rounded-full  hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
                  <span className="flex text-[14px] text-textTertiary font-medium">
                    <RiFlashlightFill />
                  </span>
                  <div className="flex flex-1 sm:max-w-8 min-w-0">
                    <Input
                      id={`${label}-token-input`}
                      value={0}
                      onChange={() => {}}
                      placeholder="0.0"
                      className="text-[12px] h-max rounded-none w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent! text-left border-0 focus:ring-0! p-0 m-0"
                    />
                  </div>
                  <Image
                    // src={token === "Solana" ? "/solana.svg" : "/bnb.svg"}
                    src="/solana.svg"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    alt="SOL"
                    width={14}
                    height={14}
                  />
                  <div className="border-primaryStroke border-l flex h-full pr-0.5 pl-0.5 gap-0.75 justify-center items-center cursor-pointer">
                    {["P1", "P2", "P3"].map((token) => (
                      <span className="contents" key={token}>
                        <Button
                          variant="ghost"
                          type="button"
                          onClick={() => setTokenType(token)}
                          className={cn(
                            "group w-5.5 h-5.5 flex flex-row gap-1 rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125",
                            token === tokenType
                              ? "hover:bg-primaryBlue/20"
                              : "hover:bg-primaryStroke/60"
                          )}
                        >
                          <span
                            className={cn(
                              "text-[12px] gap-1 flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125",
                              token === tokenType
                                ? "text-primaryBlue hover:text-primaryBlueHover"
                                : "text-textSecondary"
                            )}
                          >
                            {token}
                          </span>
                        </Button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    type="button"
                    className="flex flex-row p-1 w-6 h-6 justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] sm:rounded-[4px] relative hover:bg-primaryStroke/30"
                  >
                    <RiEqualizer3Line className="text-[16px] text-textSecondary" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Filters</p>
                </TooltipContent>
              </Tooltip>
            </span>
          </div>
        </div>

        {tokenData.map((token) => (
          <TokenCard
            key={token.address}
            token={token}
            onQuickBuy={() => {}}
            onHide={(addr) => console.log("Hide:", addr)}
          />
        ))}

        {/* <TableContents /> */}
      </div>
    </div>
  );
};

export default TableColumn;
