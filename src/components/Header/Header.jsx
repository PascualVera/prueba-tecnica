import style from "./Header.module.css";

export default function Header() {
  const links = ["Home", "About", "Pricing", "Blog"];
  return (
    <header className={style.header}>
      <picture className={style.logo_wrapper}>
        <img
          className={style.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_Region_of_Murcia.svg"
          alt="Bandera de Murcia"
          srcset=""
        />
      </picture>

      <nav className={style.navbar}>
        <ul>
          {links.map((link, index) => {
            return (
              <li>
                <a href="#">{link}</a>
                {index < links.length - 1 ? (<div className={style.separator}></div>) : ("")}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
