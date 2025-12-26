import { RiArrowDownSLine, RiWalletLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const WalletDropdown = ({ token }: { token: "Solana" | "BNB" }) => {
  return (
    <div className="relative flex">
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger>
              <span className="contents">
                <div className="flex border border-primaryStroke group flex-row p-1 pr-3 pl-3 h-8 gap-2 justify-center items-center hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer rounded-full">
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <RiWalletLine className="w-4.5! h-4.5! text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer" />
                    <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">
                      1
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <Image
                      src={token === "Solana" ? "/solana.svg" : "/bnb.svg"}
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      alt={token}
                      width={16}
                      height={16}
                    />
                    <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">
                      0
                    </span>
                  </div>
                  <RiArrowDownSLine className="w-4.5! h-4.5! text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer" />
                </div>
              </span>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="top">
            <div className="flex flex-col justify-center items-center px-3">
              <p>Active</p>
              <p>Wallets</p>
            </div>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-textSecondary text-xs">
            Metrics
          </DropdownMenuLabel>
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WalletDropdown;
