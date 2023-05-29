interface ILastInstallments {
  id: number;
  title: string;
  ammount: number;
  currency: string;
  month: number;
  year: number;
}

const LAST_INSTALLMENTS: ILastInstallments[] = [
  {
    id: 1,
    title: "T-Shirt",
    ammount: 12.99,
    currency: "USD",
    month: 12,
    year: 2023,
  },
  {
    id: 2,
    title: "Jeans",
    ammount: 9.99,
    currency: "USD",
    month: 11,
    year: 2023,
  },
];
