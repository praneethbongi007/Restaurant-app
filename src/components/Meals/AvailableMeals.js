import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import { MEALS_API_URL } from "../../url";
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        MEALS_API_URL
      );
      if (!response.ok) {
        throw Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.MealLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meals) => (
    <MealItem
      key={meals.id}
      name={meals.name}
      id={meals.id}
      description={meals.description}
      price={meals.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
