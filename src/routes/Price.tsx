import { useQuery } from "react-query";
import { fetchPrice } from "../api";

interface IPrice {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
}
function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPrice[]>(["PriceOf", coinId], () =>
    fetchPrice(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price....."
      ) : (
        <div>
          Open time : {data?.map((value) => value.time_open.toFixed(3))}
        </div>
      )}
    </div>
  );
}

export default Price;
