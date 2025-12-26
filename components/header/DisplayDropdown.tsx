import { RiArrowDownSLine, RiListCheck } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DisplayDropdown = () => {
  return (
    <div className="relative flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="bg-primaryStroke flex flex-row h-8 px-3 gap-2 justify-center items-center rounded-full hover:bg-secondaryStroke/80 transition-colors duration-150 ease-in-out cursor-pointer">
            <div className="relative">
              <RiListCheck className="w-4.5! h-4.5! text-textPrimary" />
            </div>
            <div className="whitespace-nowrap flex flex-row gap-2 justify-start items-center">
              <span className="text-[14px] font-bold text-textPrimary">
                Display
              </span>
            </div>
            <RiArrowDownSLine className="w-4.5! h-4.5! text-textPrimary" />
          </div>
        </DropdownMenuTrigger>
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

export default DisplayDropdown;
