export const data = [
  {
    name: "One",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Two",
    startDate: new Date(),
    endDate: new Date(),
  },
];

export type Data = typeof data;

export function fetchData(): Promise<typeof data> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), Math.random() * 1000);
  });
}
