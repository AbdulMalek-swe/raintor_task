import "./globals.css";
import Layout from "@/components/layouts/Layout";
import { sportingGrotesque,bwGradual } from "@/components/fonts/font";
 
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sportingGrotesque.variable} ${bwGradual.variable} `}
      >
        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
