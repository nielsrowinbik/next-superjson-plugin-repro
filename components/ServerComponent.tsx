type ServerComponentProps = {
  data: {
    name: string;
    startDate: Date;
    endDate: Date;
  }[];
};

export function ServerComponent({ data }: ServerComponentProps) {
  return <pre>{typeof data[0].startDate}</pre>;
}
