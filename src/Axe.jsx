import axios from "axios";
import { useState, useEffect } from "react";
const Axe = () => {
  const [meals, setMeals] = useState([]);

  // fetching the data

  //   everytime you reload the page the image content changes also it changes automatically
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);
  return (
    <div>
      {meals.map((meal) => (
        <img
          key={meal.idMeal}
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={400}
        />
      ))}
    </div>
  );
};

export default Axe;
