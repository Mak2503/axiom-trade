"use client";

import {
  RiCrosshair2Line,
  RiKeyboardBoxLine,
  RiQuestionLine,
  RiSettings3Line,
  RiVolumeUpLine,
} from "react-icons/ri";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import TokenToggle from "./header/TokenToggle";
import DisplayDropdown from "./header/DisplayDropdown";
import { BookmarkXIcon } from "lucide-react";
import WalletDropdown from "./header/WalletDropdown";
import { useState } from "react";
import HelpDialog from "./header/HelpDialog";

type dialogTypes = "help" | "bookmark" | "hotkeys" | "alerts" | "settings" | null;

const Header = () => {
  const [token, setToken] = useState<"Solana" | "BNB">("Solana");
  const [openDialog, setOpenDialog] = useState<dialogTypes>(null);
  return (
    <div className="flex-none flex flex-row w-full h-8 justify-start items-center">
      <div className="flex-1 flex items-center gap-3">
        <span className="text-textPrimary text-xl font-medium">Pulse</span>
        <TokenToggle toggle={token} setToggle={setToken} />
      </div>
      <div className="pr-2"></div>
      <div className="flex flex-row gap-4 items-center">
        {/* Only visible on Solana */}
        {token === "Solana" && (
          <span className="contents">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setOpenDialog("help")}
                  variant="ghost"
                  type="button"
                  className="flex flex-row w-6 h-6 justify-center items-center text-textTertiary hover:text-textSecondary"
                >
                  <RiQuestionLine className="w-5! h-5!" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Help with Pulse Filters, Settings</p>
              </TooltipContent>
            </Tooltip>
          </span>
        )}

        <DisplayDropdown />

        {/* Additional Items */}
        <span className="contents">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-mr-1.25 group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full"
              >
                <BookmarkXIcon
                  size={16}
                  className="text-textSecondary group-hover:text-textPrimary"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Blacklist dev, handle, keywords</p>
            </TooltipContent>
          </Tooltip>
        </span>

        {/* Only visible on Solana */}
        {token === "Solana" && (
          <>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="-mr-1.25 group flex items-center text-textSecondary hover:text-textPrimary justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full"
                  >
                    <RiKeyboardBoxLine className="w-4! h-4!" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Pulse Hotkeys</p>
                </TooltipContent>
              </Tooltip>
            </span>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="-mr-1.25 group flex items-center text-textSecondary hover:text-textPrimary justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full"
                  >
                    <RiVolumeUpLine className="w-4! h-4!" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Alerts</p>
                </TooltipContent>
              </Tooltip>
            </span>
          </>
        )}

        <span className="contents">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-mr-1.25 group flex items-center text-textSecondary hover:text-textPrimary justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full"
              >
                <RiCrosshair2Line className="w-4! h-4!" />
                <RiSettings3Line className="w-3! h-3! absolute bottom-0.5 right-0" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Alerts</p>
            </TooltipContent>
          </Tooltip>
        </span>

        <WalletDropdown token={token} />
      </div>

      {openDialog === "help" && <HelpDialog open={openDialog === "help"} onOpenChange={(open) => setOpenDialog(open ? "help" : null)} />}
    </div>
  );
};

export default Header;
