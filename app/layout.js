import "../styles/index.scss";
import Nav from "../components/Nav";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <Nav></Nav>
        </header>
        {children}
      </body>
    </html>
  );
}
