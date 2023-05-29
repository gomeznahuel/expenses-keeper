import { Ionicons } from "@expo/vector-icons";

interface ILastPayments {
  id: string;
  title: string;
  ammount: number;
  currency: string;
  date: string;
  iconName: keyof typeof Ionicons.glyphMap
}

const LAST_PAYMENTS: ILastPayments[] = [
  {
    id: "1",
    title: "Netflix",
    ammount: 12.99,
    currency: "USD",
    date: "2021-01-01",
    iconName: 'tv'
  },
  {
    id: "2",
    title: "Spotify",
    ammount: 9.99,
    currency: "USD",
    date: "2021-01-01",
    iconName: 'tv'
  },
  {
    id: "3",
    title: "Disney+",
    ammount: 6.99,
    currency: "USD",
    date: "2021-01-01",
    iconName: 'tv'
  },
  {
    id: "4",
    title: "T-Shirt",
    ammount: 12.99,
    currency: "USD",
    date: "2021-01-01",
    iconName: 'shirt'
  }
];

export { ILastPayments, LAST_PAYMENTS };
