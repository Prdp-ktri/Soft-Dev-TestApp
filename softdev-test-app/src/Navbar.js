import logo from "./assets/home/logo.png";
import search from "./assets/home/search-interface-symbol.png";
import bag from "./assets/home/bag-icon.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 50px",
        color: "white",
        fontFamily: "Indie Flower",
      }}
    >
      <div>
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
      </div>

      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "60px",
          margin: 0,
          padding: 0,
          fontSize: "24px",
        }}
      >
        <li>Home</li>
        <li>Plants Type</li>
        <li>More</li>
        <li>Contact</li>
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <img src={search} alt="Search" style={{ height: "25px" }} />
        <img src={bag} alt="Bag" style={{ height: "25px" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "50px",
              height: "5px",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "5px 0",
            }}
          ></div>
          <div
            style={{
              width: "35px",
              height: "5px",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "5px 0",
              alignSelf: "flex-end",
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
