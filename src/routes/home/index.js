/* eslint-disable lines-around-comment */
/* eslint-disable indent */
import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Link } from "preact-router";
import { usePrerenderData } from "@preact/prerender-data-provider";
import style from "./style";

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  return (
    <div class={style.home}>
      <div class={style.about}>
        <h1>Hi, I'm Amy</h1>
        <h1>A product designer in Vancouver, BC</h1>
        <div class={style.bar} />
        <h2>
          I deliver seamless user experience through problem-solving, empathy &
          code. On the side, I like to draw.
        </h2>
      </div>
    </div>
  );
};

export default Home;
