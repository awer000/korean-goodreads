import * as React from "react";
import Link from "next/link";
import "./Layout.scss";
import { FaSearch, FaGithub } from "react-icons/fa";
import { MdMailOutline, MdArrowDropDown } from "react-icons/md";
import Headroom from "react-headroom";

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
    <Headroom
      style={{
        top: 60,
        left: 0,
        right: 0,
        zIndex: 1
      }}
      disableInlineStyles={true}
    >
      <div className="toggle-menu">
        <div className="my-book">내 서재</div>
        <div className="browse">
          <a>탐색하기</a>
          <MdArrowDropDown />
        </div>
        <div className="community">
          <a>커뮤니티</a>
          <MdArrowDropDown />
        </div>
      </div>
    </Headroom>
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
