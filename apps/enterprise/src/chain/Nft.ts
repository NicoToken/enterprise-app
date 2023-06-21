export interface Nft {
  collection: string;
  id: string;
}

export interface NftPrice {
  usd?: number;
}

export interface NftInfo {
  name?: string;
  image?: string;
}

export type NftInfoWithPrice = Nft & NftInfo & NftPrice;
