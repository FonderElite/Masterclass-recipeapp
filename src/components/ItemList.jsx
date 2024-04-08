import Item from "./Item";

export default function ItemList({ food, isLoading }) {
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                food && food.extendedIngredients ? (
                    food.extendedIngredients.map((item) => (
                        <Item item={item} key={item.id} />
                    ))
                ) : (
                    <p>No items available</p>
                )
            )}
        </div>
    );
}

