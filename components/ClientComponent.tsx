"use client";

type ClientComponentProps = {
  data: {
    name: string;
    startDate: Date;
    endDate: Date;
  }[];
};

export function ClientComponent({ data }: ClientComponentProps) {
  return <pre>{typeof data[0].startDate}</pre>;
}
