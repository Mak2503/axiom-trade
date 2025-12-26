"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

const tokens = [
  { name: "Solana", icon: "/solana.svg" },
  { name: "BNB", icon: "/bnb.svg" },
];

interface TokenToggleProps {
  toggle: "Solana" | "BNB";
  setToggle: React.Dispatch<React.SetStateAction<"Solana" | "BNB">>;
}

const TokenToggle = ({ toggle, setToggle }: TokenToggleProps) => {
  return (
    <div className="flex items-center gap-1">
      {tokens.map((token) => (
        <span key={token.name} className="contents">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label={`Switch to ${token.name}`}
                onClick={() => setToggle(token.name as "Solana" | "BNB")}
                className={cn(
                  `relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150 hover:bg-primaryStroke/30 hover:opacity-100`,
                  {
                    "bg-primaryStroke/60 scale-110 hover:bg-primaryStroke/30":
                      toggle === token.name,
                  },
                  {
                    "opacity-60": toggle !== token.name,
                  }
                )}
              >
                <Image
                  src={token.icon}
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  className="grayscale-[0.3]"
                  alt={token.name}
                  width={20}
                  height={20}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{token.name}</p>
            </TooltipContent>
          </Tooltip>
        </span>
      ))}
    </div>
  );
};

export default TokenToggle;
