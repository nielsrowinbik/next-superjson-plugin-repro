import { ClientComponent } from "@/components/ClientComponent";
import type { Data } from "@/lib/data";

type ServerComponentProps = {
  data: Data;
};

export function ServerComponent({ data }: ServerComponentProps) {
  return <ClientComponent data={data} data-json />;
}
