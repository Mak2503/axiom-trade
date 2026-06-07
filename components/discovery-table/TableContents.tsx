"use client";

import { RiCameraLine, RiEyeOffLine, RiFlashlightFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { TbAtOff, TbChefHatOff } from "react-icons/tb";
import Image from "next/image";

const TableContents = () => {
  return (
    <div className="flex flex-1 w-full relative">
      <div className="absolute inset-0 overflow-y-auto">
        <div style={{ height: "4260px", width: "100%", position: "relative" }}>
          {/* Each Token */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "142px",
            }}
          >
            <div>
              <span className="contents">
                <div className="border-primaryStroke/50 border-b flex flex-col w-full justify-start items-center cursor-pointer overflow-hidden h-35.5 min-h-35.5 sm:h-29 sm:min-h-29 md:h-29 md:min-h-29 lg:h-35.5 lg:min-h-35.5 xl:h-35.5 xl:min-h-35.5 2xl:h-29 2xl:min-h-29 hover:bg-primaryStroke/50 group lg:group xl:hover:bg-primaryStroke/50 group relative">
                  <div className="w-full h-full flex flex-col">
                    <span className="contents">
                      <Button
                        variant="ghost"
                        type="button"
                        style={{ top: "6px", left: "6px" }}
                        className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-6 h-6 flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50"
                      >
                        <RiEyeOffLine className="text-[14px]" />
                      </Button>
                    </span>
                    <span className="contents">
                      <Button
                        variant="ghost"
                        type="button"
                        style={{ top: "32px", left: "6px" }}
                        className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-6 h-6 flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50"
                      >
                        <TbChefHatOff className="text-[12px]" />
                      </Button>
                    </span>
                    <span className="contents">
                      <Button
                        variant="ghost"
                        type="button"
                        style={{ top: "58px", left: "6px" }}
                        className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-6 h-6 flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50"
                      >
                        <TbAtOff className="text-[12px]" />
                      </Button>
                    </span>

                    <div className="absolute right-3 bottom-2.5 sm:right-4 sm:bottom-3 z-20 block sm:hidden">
                      <div>
                        <div>
                          <Button
                            type="button"
                            variant="ghost"
                            className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-1 justify-center items-center rounded-[999px] h-6 whitespace-nowrap transition-all duration-0 relative overflow-hidden group/quickBuyButton"
                          >
                            <RiFlashlightFill className="text-[16px] flex items-center relative z-50" />
                            <span className="text-[12px] font-bold relative z-10">
                              0 SOL
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Hover 0 SOL - Blue */}
                    <div className="absolute right-3 bottom-4 sm:right-4 sm:bottom-4 z-20 hidden sm:block lg:opacity-0 lg:group-hover:opacity-100 xl:opacity-100 2xl:opacity-100!">
                      <div className="opacity-0 group-hover:opacity-100 2xl:opacity-100!">
                        <div>
                          <Button
                            type="button"
                            variant="ghost"
                            className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-1 justify-center items-center rounded-[999px] h-6 whitespace-nowrap transition-all duration-0 relative overflow-hidden group/quickBuyButton"
                          >
                            <RiFlashlightFill className="text-[16px] flex items-center relative z-50" />
                            <span className="text-[12px] font-bold relative z-10">
                              0 SOL
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-4 top-4 z-10 block">
                      <div className="flex flex-col gap-0.5 items-end">
                        {/* Market Cap */}
                        <div className="relative">
                          <div
                            className="absolute z-0"
                            style={{ inset: "-12px -8px 1px -4px" }}
                          >
                            <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
                            <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
                          </div>
                          <div className="relative flex flex-row gap-2 justify-end items-end z-20">
                            <span className="contents">
                              <div className="flex flex-row h-4.5 gap-1 justify-end items-end">
                                <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
                                  MC
                                </span>
                                <span
                                  className="text-[16px] font-medium"
                                  style={{ color: "rgb(82, 197, 255)" }}
                                >
                                  $4.11K
                                </span>
                              </div>
                            </span>
                          </div>
                        </div>

                        {/* Volume */}
                        <div className="relative">
                          <div
                            className="absolute z-0"
                            style={{ inset: "-12px -8px 1px -4px" }}
                          >
                            <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
                            <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
                          </div>
                          <div className="relative flex flex-row gap-2 justify-end items-end z-20">
                            <span className="contents">
                              <div className="flex flex-row h-4.5 gap-1 justify-end items-end">
                                <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
                                  V
                                </span>
                                <span
                                  className="text-[16px] font-medium"
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  $4.11K
                                </span>
                              </div>
                            </span>
                          </div>
                        </div>

                        {/* Transactions */}
                        <div className="relative flex flex-row gap-2 justify-start items-start -mt-0.5">
                          <div
                            className="absolute z-0"
                            style={{ inset: "-2px -8px -4px -4px" }}
                          >
                            <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
                            <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
                          </div>
                          <span className="contents">
                            <div className="relative flex flex-row justify-end items-center h-3 gap-1 shrink-0 group/image text-nowrap z-20">
                              <span className="text-textTertiary text-[11px] font-medium">
                                F
                              </span>
                              <div className="flex flex-row gap-0.5 items-center">
                                <Image
                                  src="/solana.svg"
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="1"
                                  style={{ color: "transparent" }}
                                  alt="SOL"
                                  width={14}
                                  height={14}
                                />
                                <span className="text-textPrimary text-[12px] font-medium">
                                  0.0 <sub>2</sub> 2
                                </span>
                              </div>
                            </div>
                          </span>
                          <span className="contents">
                            <div className="relative flex flex-row justify-end items-end h-4.5 gap-1 shrink-0 group/image text-nowrap z-20">
                              <span className="text-textTertiary text-[11px] font-medium">
                                TX
                              </span>
                              <div className="flex flex-row flex-1 min-w-6 max-w-6 h-0.5 bg-secondaryStroke rounded-full overflow-hidden">
                                <div
                                  className="h-0.75 bg-increase"
                                  style={{ width: "50%" }}
                                ></div>
                                <div
                                  className="h-0.75 bg-decrease"
                                  style={{ width: "50%" }}
                                ></div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Main */}
                    <div className="flex flex-row w-full gap-3 pl-3 pr-3 sm:pr-4 pt-3 pb-0.5 justify-start items-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="relative w-18.5 h-18.5 justify-center items-center">
                          <span className="contents">
                            <div className="flex bg-mayhem absolute -bottom-1 -right-1 p-px w-4 h-4 justify-center items-center rounded-full z-30">
                              <div className="flex justify-center items-center bg-background absolute w-3.5 h-3.5 rounded-full z-30">
                                <Image
                                  src="https://axiom.trade/images/mayhem.svg"
                                  loading="eager"
                                  decoding="async"
                                  data-nimg="1"
                                  style={{
                                    color: "transparent",
                                    objectFit: "cover",
                                  }}
                                  alt="Pump V1"
                                  width={10}
                                  height={10}
                                />
                              </div>
                            </div>
                          </span>
                          <div className="bg-mayhem/20 absolute flex p-px justify-start items-center rounded-[4px] z-20">
                            <div className="bg-backgroundSecondary flex p-0.5 justify-start items-center rounded-[3px]">
                              <div className="w-17 h-17 shrink-0 group/image relative">
                                <div className="w-full h-full relative">
                                  <div className="pointer-events-none border-textPrimary/10 border-px absolute w-17 h-17 z-10 rounded-[1px]"></div>
                                  <Image
                                    src="/tokens/token-img-1.webp"
                                    loading="eager"
                                    decoding="async"
                                    data-nimg="1"
                                    style={{
                                      color: "transparent",
                                      objectFit: "cover",
                                    }}
                                    alt="Mister Splashy Pants"
                                    width={68}
                                    height={68}
                                  />
                                  <Button
                                    variant="ghost"
                                    className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                                  >
                                    <RiCameraLine className="text-white text-[24px]" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContents;
