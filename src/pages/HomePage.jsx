import s from "../pages/css/HomePage.module.css";

const HomePage = () => {
  return (
    <section className={s.container}>
      <h1 className={s.title}>
        Welcome to <span className={s.highlight}>Contact Book App</span>
      </h1>
      <p className={s.text}>
        This app allows you to manage your contacts{" "}
        <span className={s.highlight}>privately</span> and{" "}
        <span className={s.highlight}>securely</span>.
      </p>
      <p className={s.text}>Register or login to get started.</p>
    </section>
  );
};

export default HomePage;
