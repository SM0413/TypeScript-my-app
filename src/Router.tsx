import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/:coinId/*"
          element={<Coin toggleDark={toggleDark} isDark={isDark} />}
        />
        <Route
          path="/"
          element={<Coins toggleDark={toggleDark} isDark={isDark} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
