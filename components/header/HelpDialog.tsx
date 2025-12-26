import { RiCheckboxCircleLine, RiCloseLine, RiResetLeftLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

const FilterPreviewMockup = () => (
  <div className="bg-primaryBlueHover relative flex flex-col w-full h-60 gap-3 rounded-[4px] overflow-hidden justify-end items-center">
    <div className="absolute inset-0 w-full h-full border border-white/10 rounded-[4px] pointer-events-none z-50" />
    <div className="bg-backgroundTertiary border border-b-0 border-secondaryStroke relative w-98 h-48 rounded-[4px] rounded-b-none pointer-events-none overflow-hidden select-none">
      <FilterPreviewHeader />
      <FilterPreviewTabs />
      <FilterPreviewContent />
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-backgroundTertiary to-transparent pointer-events-none" />
    </div>
  </div>
);

const FilterPreviewHeader = () => (
  <div className="flex flex-row w-full h-9 pl-3 pr-2.5 justify-between items-center border-b border-secondaryStroke/0">
    <span className="text-textPrimary text-[10px] font-medium">Filters</span>
    <div className="flex flex-row w-5 h-5 justify-center items-center rounded-[3px] bg-transparent">
      <RiCloseLine className="w-3.5! h-3.5! text-textSecondary" />
    </div>
  </div>
);

const PREVIEW_TABS = [
  { label: "New Pairs", count: 2, active: true },
  { label: "Final Stretch", count: 4, active: false },
  { label: "Migrated", count: 4, active: false },
] as const;

const FilterPreviewTabs = () => (
  <div className="flex flex-row w-full h-8 pl-1.5 pr-3.25 gap-1 justify-start items-end border-b border-secondaryStroke">
    {PREVIEW_TABS.map((tab) => (
      <PreviewTab key={tab.label} {...tab} />
    ))}
    <div className="flex flex-row flex-1 h-full justify-end items-center">
      <RiResetLeftLine className="w-3.5! h-3.5! text-textSecondary" />
    </div>
  </div>
);

const PreviewTab = ({ 
  label, 
  count, 
  active 
}: { 
  label: string; 
  count: number; 
  active: boolean;
}) => (
  <div className={`relative flex flex-row h-7 px-1.5 items-center rounded-[3px] ${!active ? 'hover:bg-primaryStroke/40 transition-colors' : ''}`}>
    <div className={`flex flex-row h-full gap-0.75 justify-start items-center ${active ? 'border-b-[1.5px] border-textPrimary pt-[1.5px]' : ''}`}>
      <span className={`text-[10px] font-medium ${active ? 'text-textPrimary' : 'text-textSecondary'}`}>
        {label}
      </span>
      <div className="text-[10px] text-textPrimary font-medium min-w-3.5 h-3.5 px-0.75 bg-primaryBlue rounded-full flex items-center justify-center">
        <span className="text-[9px] text-background font-bold">{count}</span>
      </div>
    </div>
  </div>
);

const FilterPreviewContent = () => (
  <div className="flex flex-col gap-2 p-3">
    <div className="flex flex-row justify-between items-center">
      <span className="text-textSecondary text-[10px]">Protocols</span>
      <div className="flex flex-row h-4.5 px-1.5 items-center rounded-full bg-secondaryStroke/30">
        <span className="text-[9px] text-textPrimary">Select All</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {/* TODO: Add the grids */}
    </div>
  </div>
);

const RECOMMENDED_SETTINGS = [
  "Focus on popular launch platforms (Pump, Bonk, etc.)",
  "Filter out new tokens with a low market cap",
  "Optimized display to show essential info on Pulse",
] as const;

const RecommendedSettingsList = () => (
  <div className="flex flex-col gap-3 bg-transparent border border-secondaryStroke/50 rounded-lg pt-3 px-3.5 pb-4">
    <span className="text-textSecondary text-[14px] leading-5.25 font-medium">
      Recommended Settings
    </span>
    <div className="flex flex-col gap-3">
      {RECOMMENDED_SETTINGS.map((setting) => (
        <SettingItem key={setting} text={setting} />
      ))}
    </div>
  </div>
);

const SettingItem = ({ text }: { text: string }) => (
  <div className="flex flex-row gap-2.5 justify-start items-center">
    <RiCheckboxCircleLine className="w-4! h-4! text-primaryBlueHover shrink-0" />
    <span className="text-textSecondary text-[13px] font-normal">{text}</span>
  </div>
);

const DialogActions = ({ 
  onCancel, 
  onApply 
}: { 
  onCancel: () => void; 
  onApply: () => void;
}) => (
  <div className="flex flex-row w-full h-17 -mt-4 justify-between items-center p-4 pb-5 gap-3 border-t border-transparent">
    <Button 
      type="button" 
      variant="secondary" 
      onClick={onCancel}
      className="flex flex-row h-8 px-3 gap-2 justify-center items-center rounded-full bg-secondaryStroke hover:bg-secondaryStroke/80 transition-all duration-150 cursor-pointer"
    >
      <span className="text-[14px] font-bold text-textPrimary">Cancel</span>
    </Button>
    <Button 
      type="button" 
      variant="secondary"
      onClick={onApply}
      className="flex flex-row h-8 px-3 gap-2 justify-center items-center rounded-full bg-primaryBlue hover:bg-primaryBlue/80 hover:brightness-110 transition-all duration-150 cursor-pointer"
    >
      <span className="text-[14px] font-bold text-background">Apply Settings</span>
    </Button>
  </div>
);

// Main component with cleaner structure
const HelpDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const handleCancel = () => onOpenChange(false);
  const handleApply = () => {
    // Settings logic
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
      <DialogContent
        showCloseButton={false}
        className="fixed top-1/2 left-1/2 sm:max-w-134 w-[90vw] -translate-x-1/2 -translate-y-1/2 bg-backgroundTertiary border-secondaryStroke rounded-[12px] shadow-lg"
      >
        <DialogTitle className="sr-only">
          Help with Pulse Filters, Settings
        </DialogTitle>
        <DialogDescription className="sr-only">To help you get started with Pulse filters and settings</DialogDescription>
        <div className="flex flex-col w-full h-full min-h-0 overflow-y-auto">
          <div className="flex flex-col gap-4 px-4 pt-4 pb-5">
            <FilterPreviewMockup />
            <span className="text-textSecondary text-[14px] leading-5.25 font-normal">
              Apply our recommended Pulse filters and Display Settings to help you get started. These hide risky tokens and show only what you need to get started.
            </span>
            <RecommendedSettingsList />
          </div>
        </div>
        <DialogActions onCancel={handleCancel} onApply={handleApply} />
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
