import Topbar from "./components/Topbar/Topbar";
import Trade from "./components/Dashboards/Trade";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Topbar />
      <Trade />
    </main>
  );
}
