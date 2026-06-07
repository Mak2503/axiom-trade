import Image from "next/image";
import { Button } from "../ui/button";
import { RiFlashlightFill, RiUserStarLine } from "react-icons/ri";
import { ReactNode } from "react";
import { ChefHat } from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ name, size, className = "", style }) => (
  <i className={`${name} ${className}`} style={{ fontSize: size, ...style }} />
);

interface BadgeProps {
  icon: string | React.ComponentType;
  value: string;
  color: string;
  iconSize?: number;
}

const Badge: React.FC<BadgeProps> = ({ icon, value, color, iconSize = 12 }) => (
  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
    {icon === ChefHat ? (
      <div className="w-[16px] h-[16px] flex items-center justify-center">
        <ChefHat size={iconSize} className={color} />
      </div>
    ) : (
      <Icon name={icon as string} size={14} className={color} />
    )}
    <span className={`${color} text-[12px] font-medium`}>{value}</span>
  </div>
);

interface TextProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "bold";
  className?: string;
  truncate?: boolean;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "primary",
  size = "md",
  weight = "normal",
  className = "",
  truncate = false,
  style,
}) => {
  const variantClasses = {
    primary: "text-textPrimary",
    secondary: "text-textSecondary",
    tertiary: "text-textTertiary",
  };

  const sizeClasses = {
    xs: "text-[11px]",
    sm: "text-[12px]",
    md: "text-[14px]",
    lg: "text-[16px]",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  return (
    <span
      style={style}
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${weightClasses[weight]}
        ${truncate ? "whitespace-nowrap overflow-hidden truncate" : ""}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

// ActionButtons.tsx
const ActionButtons: React.FC<{
  onHide: () => void;
  onToggleChef: () => void;
  onToggleMention: () => void;
}> = ({ onHide, onToggleChef, onToggleMention }) => (
  <>
    <Button
      variant="ghost"
      type="button"
      onClick={onHide}
      className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50"
      style={{ top: 6, left: 6 }}
    >
      <i className="ri-eye-off-line text-[14px]" />
    </Button>
    <Button
      variant="ghost"
      type="button"
      onClick={onToggleChef}
      className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50"
      style={{ top: 32, left: 6 }}
    >
      <i className="icon-chefhat-off" style={{ fontSize: 12 }} />
    </Button>
    <Button
      variant="ghost"
      type="button"
      onClick={onToggleMention}
      className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50"
      style={{ top: 58, left: 6 }}
    >
      <i className="icon-at-off-line" style={{ fontSize: 12 }} />
    </Button>
  </>
);

// MarketMetrics.tsx
const MarketMetrics: React.FC<{
  marketCap: number;
  volume: number;
  transactions: {
    total: number;
    buyPercentage: number;
    sellPercentage: number;
  };
}> = ({ marketCap, volume, transactions }) => {
  const formatValue = (value: number) =>
    value >= 1000 ? `$${(value / 1000).toFixed(2)}K` : `$${value}`;

  return (
    <div className="absolute right-[16px] top-[16px] z-10 block">
      <div className="flex flex-col items-end gap-[1px]">
        <div className="flex flex-col gap-[4px] items-end relative">
          <MetricRow
            label="MC"
            value={formatValue(marketCap)}
            color="rgb(82, 197, 255)"
          />
          <MetricRow
            label="V"
            value={formatValue(volume)}
            color="rgb(255, 255, 255)"
          />
        </div>
        <TransactionBar transactions={transactions} />
      </div>
    </div>
  );
};

interface QuickBuyButtonProps {
  amount: string;
  onClick: () => void;
  responsive?: "mobile" | "desktop";
}

const QuickBuyButton: React.FC<QuickBuyButtonProps> = ({
  amount,
  onClick,
  responsive = "mobile",
}) => {
  const positionClasses =
    responsive === "mobile"
      ? "block sm:hidden right-3 bottom-2.5 sm:right-4 sm:bottom-3"
      : "hidden sm:block right-3 bottom-4 sm:right-4 sm:bottom-4 lg:opacity-0 lg:group-hover:opacity-100 xl:opacity-100 2xl:opacity-100!";

  return (
    <div className={`absolute z-30 ${positionClasses}`}>
      <div className="opacity-0 group-hover:opacity-100 2xl:opacity-100!">
        <Button
          variant="ghost"
          type="button"
          onClick={onClick}
          className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-1 justify-center items-center rounded-[999px] h-6 whitespace-nowrap transition-all duration-0 relative overflow-hidden group/quickBuyButton"
          style={{ paddingLeft: 6, paddingRight: 6 }}
        >
          <RiFlashlightFill className="text-[16px] flex items-center relative z-10" />
          <Text
            size="sm"
            weight="bold"
            className="relative z-10 text-[#090909]"
          >
            {amount}
          </Text>
        </Button>
      </div>
    </div>
  );
};

// TokenInfo.tsx
const TokenInfo: React.FC<{
  name: string;
  fullName: string;
  tagline: string;
  translation: string;
  age: string;
  social: { tweetUrl?: string; protocolUrl?: string };
  holders: number;
  topHolders: number;
  maxHolders: number;
}> = ({
  name,
  fullName,
  tagline,
  translation,
  age,
  social,
  holders,
  topHolders,
  maxHolders,
}) => (
  <div className="flex flex-col w-full gap-0.5 justify-start items-start min-w-0">
    <div className="flex flex-row min-h-4.5 w-full gap-1 justify-between items-end min-w-0">
      <TokenNameSection
        name={name}
        fullName={fullName}
        tagline={tagline}
        translation={translation}
      />
    </div>
    <div className="flex flex-row w-full h-4.5 gap-3 lg:gap-2 xl:gap-3 justify-start items-center">
      <span className="text-primaryGreen text-[14px] font-medium">{age}</span>
      <SocialLinks social={social} />
      <StatsRow
        holders={holders}
        topHolders={topHolders}
        maxHolders={maxHolders}
      />
    </div>
  </div>
);

// MetricsBadges.tsx
const MetricsBadges: React.FC<{
  metrics: { creatorShare: number; devsShare: number; sniper: number };
}> = ({ metrics }) => (
  <div className="flex flex-row w-full h-[24px] gap-[4px] justify-start items-end">
    <Badge
      // icon="ri-user-star-line"
      icon={RiUserStarLine}
      value={`${metrics.creatorShare}%`}
      color="text-primaryGreen"
    />
    <Badge icon="icon-chef-hat" value="DS" color="text-primaryBlue" />
    <Badge
      icon="ri-crosshair-2-line"
      value={`${metrics.sniper}%`}
      color="text-primaryGreen"
    />
  </div>
);

interface MetricRowProps {
  label: string;
  value: string;
  color: string;
}

const MetricRow: React.FC<MetricRowProps> = ({ label, value, color }) => (
  <div className="relative flex justify-end items-end z-20">
    <div className="flex flex-row h-[18px] gap-[4px] justify-end items-end">
      <Text size="sm" variant="tertiary" className="pb-[1.6px]">
        {label}
      </Text>
      <Text size="lg" weight="medium" style={{ color }}>
        {value}
      </Text>
    </div>
  </div>
);

interface TransactionBarProps {
  transactions: {
    total: number;
    buyPercentage: number;
    sellPercentage: number;
  };
}

const TransactionBar: React.FC<TransactionBarProps> = ({ transactions }) => (
  <div className="relative flex flex-row gap-[8px] justify-end items-end z-20">
    <div className="absolute z-0" style={{ inset: "-2px -8px -4px -4px" }}>
      <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10" />
      <div className="bg-backgroundSecondary absolute inset-0 z-0" />
    </div>
    <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 z-20">
      <Text size="xs" variant="tertiary">
        TX{" "}
        <Text size="xs" variant="primary" weight="medium">
          {transactions.total}
        </Text>
      </Text>
      <div className="flex flex-row flex-1 min-w-[52px] max-w-[52px] h-[2px] bg-secondaryStroke rounded-full overflow-hidden">
        <div
          className="h-[3px] bg-increase"
          style={{ width: `${transactions.buyPercentage}%` }}
        />
        <div
          className="h-[3px] bg-decrease"
          style={{ width: `${transactions.sellPercentage}%` }}
        />
      </div>
    </div>
  </div>
);

// StatItem.tsx
interface StatItemProps {
  icon: string;
  value: string | number;
  variant?: "primary" | "secondary" | "tertiary";
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  variant = "primary",
}) => (
  <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
    <Icon name={icon} size={16} className="text-textTertiary" />
    <Text size="sm" weight="medium" variant={variant}>
      {value}
    </Text>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: string;
  iconSize?: number;
  iconClass?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  iconSize = 16,
  iconClass = "",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <Icon
      name={icon}
      size={iconSize}
      className={`text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms] ${iconClass}`}
    />
  </a>
);

// CopyButton.tsx
interface CopyButtonProps {
  text: string;
  displayText: string;
  onCopy?: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  displayText,
  onCopy,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    onCopy?.();
  };

  return (
    <button
      onClick={handleCopy}
      className="text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] text-[12px] font-medium text-center max-w-[74px] flex items-center gap-[4px] group/copy"
    >
      <Text size="sm" variant="tertiary">
        {displayText}
      </Text>
    </button>
  );
};

interface SocialLinksProps {
  social: {
    tweetUrl?: string;
    protocolUrl?: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ social }) => (
  <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center [&_i]:text-[16px]">
    {social.tweetUrl && (
      <div>
        <SocialLink
          href={social.tweetUrl}
          icon="ri-quill-pen-line"
          iconClass="text-[rgb(16,185,129)]"
        />
      </div>
    )}
    {social.protocolUrl && (
      <SocialLink href={social.protocolUrl} icon="icon-fourmeme" />
    )}
    <SocialLink
      href={`https://x.com/search?q=${social.protocolUrl?.split("/").pop()}`}
      icon="ri-search-line"
    />
  </div>
);

const TokenImageBorder: React.FC<{ color: string; progress: number }> = ({
  color,
  progress,
}) => {
  const strokeDasharray = 296;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;

  return (
    <div className="absolute top-0 left-0 w-[74px] h-[74px] rounded-[4px] z-10 flex items-center justify-center">
      <div className="inline-flex items-center justify-center">
        <svg width="78" height="78" viewBox="0 0 78 78">
          <path
            className="opacity-40"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="1"
            d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"
            style={{ color }}
          />
          <path
            className="transition-all duration-300 ease-in-out"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"
            style={{ color }}
          />
        </svg>
      </div>
    </div>
  );
};

interface TokenImageWrapperProps {
  imageUrl: string;
  name: string;
  size?: number;
  onClick?: () => void;
}

const TokenImageWrapper: React.FC<TokenImageWrapperProps> = ({
  imageUrl,
  name,
  size = 68,
  onClick,
}) => (
  <div className={`w-[${size}px] h-[${size}px] flex-shrink-0 relative`}>
    <div className="w-full h-full relative group/image">
      <div
        className={`pointer-events-none border-textPrimary/10 border-[1px] absolute w-[${size}px] h-[${size}px] z-10 rounded-[1px]`}
      />
      <Image
        alt={name}
        loading="eager"
        width={size}
        height={size}
        decoding="async"
        className={`rounded-[1px] w-[${size}px] h-[${size}px] object-cover`}
        src={imageUrl}
      />
      <button
        type="button"
        onClick={onClick}
        className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-[1px]"
      >
        <Icon name="ri-camera-line" size={24} className="text-white" />
      </button>
    </div>
  </div>
);

// ProtocolBadge.tsx
interface ProtocolBadgeProps {
  name: string;
  icon: string;
  color: string;
}

const ProtocolBadge: React.FC<ProtocolBadgeProps> = ({ name, icon, color }) => (
  <div
    className="flex absolute bottom-[-4px] right-[-4px] p-[1px] w-[16px] h-[16px] justify-center items-center rounded-full z-30"
    style={{ background: color }}
  >
    <div className="flex justify-center items-center bg-background absolute w-[14px] h-[14px] rounded-full z-30">
      <Image
        alt={name}
        loading="eager"
        width={10}
        height={10}
        decoding="async"
        src={icon}
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
);

interface TokenImageProps {
  address: string;
  name: string;
  imageUrl: string;
  protocol: { name: string; icon: string; color: string };
  onClick?: () => void;
}

const TokenImage: React.FC<TokenImageProps> = ({
  address,
  name,
  imageUrl,
  protocol,
  onClick,
}) => {
  const formatAddress = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <div className="flex flex-col items-center gap-[4px]">
      <div className="relative w-[74px] h-[74px] justify-center items-center">
        <ProtocolBadge
          name={protocol.name}
          icon={protocol.icon}
          color={protocol.color}
        />
        <div
          className="absolute flex p-[1px] justify-start items-center rounded-[4px] z-20"
          style={{ background: "rgba(124, 230, 96, 0.2)" }}
        >
          <div className="bg-backgroundSecondary flex p-[2px] justify-start items-center rounded-[3px]">
            <TokenImageWrapper
              imageUrl={imageUrl}
              name={name}
              onClick={onClick}
            />
          </div>
        </div>
        <TokenImageBorder color={protocol.color} progress={6.08} />
      </div>
      <CopyButton text={address} displayText={formatAddress(address)} />
    </div>
  );
};

interface TokenNameSectionProps {
  name: string;
  fullName: string;
  tagline: string;
  translation: string;
}

const TokenNameSection: React.FC<TokenNameSectionProps> = ({
  name,
  fullName,
  tagline,
  translation,
}) => (
  <div className="overflow-hidden">
    <div
      className="flex flex-col gap-[4px] justify-start items-start"
      style={{ minWidth: 348 }}
    >
      <div className="flex flex-row gap-[4px] justify-start items-center">
        <div
          className="min-w-0 whitespace-nowrap overflow-hidden truncate text-textPrimary text-[16px] font-medium tracking-[-0.02em]"
          style={{ maxWidth: 120 }}
        >
          {name}
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <button
            type="button"
            className="flex flex-row gap-[4px] justify-start items-center text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] min-w-0 overflow-hidden"
          >
            <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] sm:text-[16px] lg:text-[14px] xl:text-[16px] font-medium tracking-[-0.02em] xl:truncate xl:max-w-full text-left max-w-full block">
              {fullName}
            </div>
            <Icon name="ri-file-copy-fill" size={14} className="text-inherit" />
          </button>
        </div>
      </div>
      <div
        className="-mt-[4px] flex flex-row gap-[6px] justify-start items-center text-[12px] leading-[14px]"
        style={{ color: "rgb(242, 195, 102)" }}
      >
        <span className="whitespace-nowrap overflow-hidden truncate opacity-85">
          {tagline}
        </span>
        <span className="whitespace-nowrap overflow-hidden truncate opacity-60">
          {translation} ...
        </span>
      </div>
    </div>
  </div>
);

interface StatsRowProps {
  holders: number;
  topHolders: number;
  maxHolders: number;
  responsive?: 'default' | 'alternate';
}

const StatsRow: React.FC<StatsRowProps> = ({ 
  holders, 
  topHolders, 
  maxHolders,
  responsive = 'default'
}) => {
  const containerClass = responsive === 'default'
    ? 'flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex lg:hidden 2xl:flex'
    : 'flex sm:hidden lg:flex xl:flex 2xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]';

  return (
    <div className={containerClass}>
      <StatItem icon="ri-group-line" value={holders} />
      <StatItem icon="ri-trophy-line" value={topHolders} />
      <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
        <Icon name="ri-vip-crown-2-line" size={16} className="text-textTertiary pb-[1.2px]" />
        <Text size="sm" weight="medium" variant="primary">
          {topHolders}/{maxHolders}
        </Text>
      </div>
    </div>
  );
};

export {
  ActionButtons,
  MarketMetrics,
  TokenInfo,
  MetricsBadges,
  QuickBuyButton,
  StatItem,
  TokenImage,
  TokenImageWrapper,
  TokenNameSection,
};
