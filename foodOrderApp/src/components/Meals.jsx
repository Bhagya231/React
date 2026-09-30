import useHttp from '../hooks/useHttp.js';
import MealItems from './MealItems.jsx';
import Error from './Error.jsx';

export default function Meals()
{
    const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals',null, []);

   if(isLoading)
   {
    return <p className='center'>Fetching meals....</p>
   }
   if(error)
   {
    return <Error title="Failed to fetch meals" message={error} />
   }

    return(
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItems key={meal.id} meal={meal}  />
            ))}

        </ul>
    )
}