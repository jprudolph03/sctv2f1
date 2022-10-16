import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="ui inverted top fixed menu">
        <div className="ui container">
          <Link href="/">
            <a className="header item">SCTv2</a>
          </Link>
          <div
            role="listbox"
            aria-expanded="false"
            className="ui item simple dropdown"
            tabIndex="0"
          >
            <div
              aria-atomic="true"
              aria-live="polite"
              role="alert"
              className="divider text"
            >
              Admin
            </div>
            <i aria-hidden="true" className="dropdown icon"></i>
            <div className="menu transition visible">
              <Link href="/addNewPart">
                <div aria-roledescription="option" className="item">
                  Add New Part
                </div>
              </Link>
              <Link href="/addNewLot">
                <div aria-roledescription="option" className="item">
                  Start New Lot
                </div>
              </Link>
            </div>
          </div>
          <div
            role="listbox"
            aria-expanded="false"
            className="ui item simple dropdown"
            tabIndex="0"
          >
            <div
              aria-atomic="true"
              aria-live="polite"
              role="alert"
              className="divider text"
            >
              Scrap Reporting
            </div>
            <i aria-hidden="true" className="dropdown icon"></i>
            <div className="menu transition visible">
              <Link href="/ForgingScrap">
                <div aria-roledescription="option" className="item">
                  Forging Scrap Reporting
                </div>
              </Link>
              <Link href="/PressingScrap">
                <div aria-roledescription="option" className="item">
                  Pressing Scrap Reporting
                </div>
              </Link>
              <Link href="/TappingScrap">
                <div aria-roledescription="option" className="item">
                  Tapping Scrap Reporting
                </div>
              </Link>
              <Link href="/VsPackScrap">
                <div aria-roledescription="option" className="item">
                  VS/Pack Scrap Reporting
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
