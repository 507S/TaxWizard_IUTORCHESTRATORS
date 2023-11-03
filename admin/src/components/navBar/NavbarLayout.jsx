import logo from "../../assets/icon2.png";

export default function NavbarLayout() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt=""
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          &nbsp; TaxWizard
        </a>
      </div>
    </nav>
  );
}
