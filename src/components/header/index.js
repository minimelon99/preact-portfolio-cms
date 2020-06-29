import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = () => (
  <header class={style.header}>
    <Link href="/">
      <h2>Amy Zhu</h2>
    </Link>
    <nav>
      <Link activeClassName={style.active} href="/blogs">
        Blogs
      </Link>
      <Link activeClassName={style.active} href="/contact">
        Contact me
      </Link>
      <Link activeClassName={style.active}>Personal Work</Link>
      <Link activeClassName={style.active}>About Me</Link>
    </nav>
  </header>
);

export default Header;
