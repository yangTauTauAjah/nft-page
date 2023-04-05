import {
  Bikes,
  Drip,
  EndingSoon,
  PalmTrees,
  Rizzo
} from "@/assets/images/NewAuction";

import {
  Abdiliie,
  Berhans,
  Fukiep,
  Hags,
  Jhiehe,
  Pokko,
  RizKhen,
  WeturArt
} from "@/assets/images/TopSeller";

import {
  Art,
  Collection,
  DomainName,
  Music,
  Photography,
  Sport,
  TradingCard,
  Utility,
} from "@/assets/images/Categories";

function timeToUnix(time: string) {
  const [hour, minute, second] = time.split(':')
  return new Date((60*(Number(hour) * 60 + Number(minute)) + Number(second))* 1000)
}

interface NewAuctionInterface {
  name: string;
  imageUrl: string;
  price: number;
  time: Date;
}

interface TopSellerInterface {
  nickName: string;
  imageUrl: string;
}

interface CategoryInterface {
  thumbnail: string;
  category: string;
}

const newAuction: NewAuctionInterface[] = [
  {
    imageUrl: PalmTrees,
    name: "Somewhere Else: 094 - Palm Trees & Basketball",
    price: 0.5,
    time: timeToUnix("3:23:23")
  },
  {
    imageUrl: Drip,
    name: "DRIP #515",
    price: 0.7,
    time: timeToUnix("00:33:44" )
  },
  {
    imageUrl: Bikes,
    name: "Bikes of Burden #28. Ribs.",
    price: 2.5,
    time: timeToUnix("00:33:44")
  },
  {
    imageUrl: Rizzo,
    name: "Rizzo Collection #36",
    price: 1.2,
    time: timeToUnix("08:17:13")
  }
];

const topSeller: TopSellerInterface[] = [
  {
    imageUrl: RizKhen,
    nickName: "RizKhen"
  },
  {
    imageUrl: Jhiehe,
    nickName: "Jhiehe"
  },
  {
    imageUrl: Fukiep,
    nickName: "Fukiep"
  },
  {
    imageUrl: Hags,
    nickName: "Hags"
  },
  {
    imageUrl: Berhans,
    nickName: "Berhans"
  },
  {
    imageUrl: Abdiliie,
    nickName: "Abdliie"
  },
  {
    imageUrl: WeturArt,
    nickName: "Wetur Art"
  },
  {
    imageUrl: Pokko,
    nickName: "Pokko"
  }
];

const categories: CategoryInterface[] = [
  {
    thumbnail: Art,
    category: "Art"
  },
  {
    thumbnail: Collection,
    category: "Collection"
  },
  {
    thumbnail: DomainName,
    category: "Domain Name"
  },
  {
    thumbnail: Music,
    category: "Music"
  },
  {
    thumbnail: Photography,
    category: "Photography"
  },
  {
    thumbnail: Sport,
    category: "Sport"
  },
  {
    thumbnail: TradingCard,
    category: "Trading Card"
  },
  {
    thumbnail: Utility,
    category: "Utility"
  }
];

const Data = { newAuction, topSeller, categories }

export { newAuction, topSeller, categories }
export default Data