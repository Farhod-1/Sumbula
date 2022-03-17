import Cart from "../UI/Cart";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Somsa",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Shashlik",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Pizza",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) =><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

    return (
        <section className={classes.meals}>
            <Cart><ul>{mealsList}</ul></Cart>
        </section>
    );
};

export default AvailableMeals;
