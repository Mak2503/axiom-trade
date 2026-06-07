// TokenCard.tsx
import React from 'react';
import { ActionButtons, MarketMetrics, MetricsBadges, QuickBuyButton, TokenImage, TokenInfo } from './SubComponents';

interface TokenData {
  address: string;
  name: string;
  fullName: string;
  tagline: string;
  translation: string;
  imageUrl: string;
  marketCap: number;
  volume: number;
  transactions: {
    total: number;
    buyPercentage: number;
    sellPercentage: number;
  };
  age: string;
  holders: number;
  topHolders: number;
  maxHolders: number;
  protocol: {
    name: string;
    icon: string;
    color: string;
  };
  metrics: {
    creatorShare: number;
    devsShare: number;
    sniper: number;
  };
  social: {
    tweetUrl?: string;
    protocolUrl?: string;
  };
  quickBuyAmount: string;
}

interface TokenCardProps {
  token: TokenData;
  onHide?: (address: string) => void;
  onToggleChef?: (address: string) => void;
  onToggleMention?: (address: string) => void;
  onQuickBuy?: (address: string, amount: string) => void;
  onImageClick?: (address: string) => void;
  className?: string;
}

export const TokenCard: React.FC<TokenCardProps> = ({
  token,
  onHide,
  onToggleChef,
  onToggleMention,
  onQuickBuy,
  onImageClick,
  className = ''
}) => {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(2)}K`;
    }
    return `$${value}`;
  };

  return (
    <div 
      className={`border-primaryStroke/50 border-b-[1px] flex flex-col w-full justify-start items-center cursor-pointer relative overflow-hidden h-[142px] min-h-[142px] sm:h-[116px] sm:min-h-[116px] md:h-[116px] md:min-h-[116px] lg:h-[142px] lg:min-h-[142px] xl:h-[142px] xl:min-h-[142px] 2xl:h-[116px] 2xl:min-h-[116px] hover:bg-primaryStroke/50 group ${className}`}
    >
      <div className="w-full h-full flex flex-col">
        {/* Action Buttons */}
        <ActionButtons
          onHide={() => onHide?.(token.address)}
          onToggleChef={() => onToggleChef?.(token.address)}
          onToggleMention={() => onToggleMention?.(token.address)}
        />

        {/* Quick Buy Buttons */}
        <QuickBuyButton
          amount={token.quickBuyAmount}
          onClick={() => onQuickBuy?.(token.address, token.quickBuyAmount)}
        />

        {/* Market Metrics */}
        <MarketMetrics
          marketCap={token.marketCap}
          volume={token.volume}
          transactions={token.transactions}
        />

        {/* Main Content */}
        <div className="flex flex-row w-full gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] justify-start items-center" style={{ paddingTop: 14 }}>
          {/* Token Image */}
          <TokenImage
            address={token.address}
            name={token.name}
            imageUrl={token.imageUrl}
            protocol={token.protocol}
            onClick={() => onImageClick?.(token.address)}
          />

          {/* Token Info */}
          <div className="flex flex-col flex-1 h-full justify-between items-start pb-[10px] overflow-hidden">
            <TokenInfo
              name={token.name}
              fullName={token.fullName}
              tagline={token.tagline}
              translation={token.translation}
              age={token.age}
              social={token.social}
              holders={token.holders}
              topHolders={token.topHolders}
              maxHolders={token.maxHolders}
            />

            {/* Metrics Badges */}
            <MetricsBadges metrics={token.metrics} />
          </div>
        </div>
      </div>
    </div>
  );
};
