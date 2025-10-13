export async function fetchingMenuItems() {
    const response = await fetch('https://free-food-menus-api-two.vercel.app/fried-chicken');
    const resData = await response.json();


    if (!response.ok) {
        throw new Error("There is an Error");
    }

    return resData
}