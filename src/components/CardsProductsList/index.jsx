import { Card } from "../CardProduct"

export const CardList = ({ listFood }) => {

    return (
        <>
            {listFood.map((food) =>
                <Card
                    key={food._id}
                    pictures={food.pictures}
                    price={food.price}
                    discount={food.discount}
                    id={food._id}
                    wight={food.wight}
                    name={food.name}
                />)}
        </>
    )
}