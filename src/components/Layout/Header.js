import { Fragment } from "react";
import Mealsimage from "../../Assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>restaurant</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={Mealsimage} alt="banner" />
      </div>
    </Fragment>
  );
};



export default Header