'use client';

import Topbar from "./components/Topbar/Topbar";
import Trade from "./components/Dashboards/Trade";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Topbar />
        <Trade />
      </LocalizationProvider>
    </main >
  );
}
