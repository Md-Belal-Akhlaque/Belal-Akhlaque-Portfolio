import { dmSerif, inter } from "./fonts.js";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar.jsx";


export const metadata = {
    title: "Md. Belal Akhlaque",
    description: "Personal portfolio of Md. Belal Akhlaque",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${dmSerif.variable} ${inter.variable}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}