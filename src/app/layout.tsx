import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./Components/SmoothScroll";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caravan Admin",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
          <ToastContainer/>
          <Navbar />
          <hr />
          <div className="flex flex-row">
            <Sidebar />
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html >
  );
}
