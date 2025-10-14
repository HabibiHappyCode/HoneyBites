import React, { useContext } from 'react'
import CartContext from '../../store/CartContext';
import { useFetch } from '../../hooks/useFetch'
import { fetchingMenuItems } from '../../lib/MenuItemsLib'
import Button from '../../UI/Button';
import { currencyFormatter } from '../../util/formatting';
import { Skeleton } from '@mui/material';

function MenuItems() {
  const { meals, isLoading } = useFetch(fetchingMenuItems, []);
  const slicedMenuItems = meals.slice(10, 16);

  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = (meal) => {
    cartCtx.addItem(meal);
  };

  const fillNum = Array(6).fill();

  return (
    <div className="py-10 max-lg:py-5 flex flex-wrap gap-3">
      {isLoading
        ? fillNum.map((____, index) => (
            <div
              key={index}
              className="w-[32%] max-[850px]:w-[49%] max-sm:w-[100%] h-[40vh]"
            >
              <Skeleton
                height="170%"
                style={{ marginTop: -100 }}
                sx={{ bgcolor: "grey.900" }}
                animation="wave"
              />
            </div>
          ))
        : slicedMenuItems.map((meal) => (
            <div
              className="w-[32%] max-[850px]:w-[49%] max-sm:w-[100%] h-auto pb-7 bg-[#20202C] rounded"
              key={meal.id}
            >
              <div className="w-[100%] h-[40vh]">
                <img
                  className="w-[100%] h-[100%] rounded-t object-cover"
                  src={meal.img}
                  alt={meal.name}
                />
              </div>

              <main className="flex flex-col justify-center items-center p-3">
                <h2 className="font-bold text-20 my-3">{meal.name}</h2>
                <p className="bg-[rgba(255,231,0,0.1)] px-4 py-1 text-[rgba(255,231,0,0.9)] font-medium rounded mb-3 text-[13px] max-md:text-[15px]">
                  {currencyFormatter.format(meal.price)}
                </p>
                <p className="text-center text-[rgba(6, 6, 5, 0.9)]">
                  {meal.dsc}
                </p>
              </main>

              <Button
                onClick={() => handleAddMealToCart(meal)}
                myStyle="block mx-auto bg-[#FFE700] text-stone-900 px-4 py-2 text-[16px] rounded max-md:text-[12px]"
              >
                Add To Cart
              </Button>
            </div>
          ))}
    </div>
  );
}

export default MenuItems