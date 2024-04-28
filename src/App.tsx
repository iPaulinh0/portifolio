import { Header } from "./components/Header/header";
import { HomePage } from "./components/Home/homepage";

export function App() {

  return(
    <div className="h-screen bg-black">
      <Header />
      <HomePage />
    </div>
  )
}