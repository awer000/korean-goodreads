import * as React from "react";
import Link from "next/link";
import "./Layout.scss";
import { FaSearch } from "react-icons/fa";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div className="Layout">
    <header className="site-header">
      <div className="search-icon">
        <FaSearch />
      </div>
      <Link href="/">
        <a className="logo">goodreads</a>
      </Link>
      <button className="signIn-button">로그인</button>
    </header>
    {children}
    <footer>이곳은 푸터입니다.</footer>
  </div>
);

export default Layout;
