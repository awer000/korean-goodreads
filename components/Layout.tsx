import * as React from "react";
import Link from "next/link";
import "./Layout.scss";
import { FaSearch, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

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
    <div className="children">{children}</div>
    <footer className="site-footer">
      <div className="connect">
        <a>CONNECT</a>
        <div className="icons">
          <Link href="https://github.com/awer000/korean-goodreads">
            <a target="_blank">
              <FaGithub />
            </a>
          </Link>
          <Link href="mailto:awer000@naver.com">
            <a target="_blank">
              <MdMailOutline />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
