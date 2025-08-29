import { Link } from "react-router-dom";
import logo from "./assets/Phibonacci Logo Light.png";

export default function Header() {
  return (
    <header
      style={{
        width: "calc(100% - 3.236em)",
        height: "5em",
        backgroundColor: "rgba(255, 255, 255, 0.1618)",
        backdropFilter: "blur(32.8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.618em",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to={"/"}
        style={{
          width: "auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "1.618em",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: "auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            alt="Phibonacci Logo"
            src={logo}
            style={{
              height: "100%",
              borderRadius: "1.618em",
              marginRight: "1.618em",
              boxShadow: "0 0 6.18px rgba(24, 24, 24, 0.1618)",
            }}
          />
          <h1>Phibonacci</h1>
        </div>
      </Link>
      <div
        style={{
          width: "auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "1.618em",
        }}
      >
        <Link
          to={"/privacy"}
          style={{
            marginRight: "1.618em",
          }}
        >
          <span>Privacy Policy</span>
        </Link>

        <Link
          to={"/support"}
          style={{
            marginRight: "1.618em",
          }}
        >
          <span>Support</span>
        </Link>
      </div>
    </header>
  );
}
