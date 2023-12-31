const data = [
    // same
  ];
  
  const names = (arr) => {
    return arr.map((el) => {
      return el.name;
    });
  };
  
  const born = (arr) => {
    return arr.filter((item) => {
      const birthday = new Date(item.birthday).getFullYear();
      if (birthday < 1990) {
        return item;
      }
    });
  };
  
  const food = (arr) => {
    const obj = {};
  
    arr.forEach((el) => {
      el.favoriteFoods.forEach((foodObj) => {
        // Debugging: Log the structure of foodObj
        console.log(foodObj);
  
        // foodObj is an object, not an array. Remove the forEach loop
        // foodObj.forEach((meatItem) => {
        //   console.log();
        //   obj[meatItem] = obj[meatItem] + 1 || 1;
        // });
  
        //iterate over the meats and fish arrays directly
        foodObj.meats.forEach((meatItem) => {
          obj[meatItem] = obj[meatItem] + 1 || 1;
        });
        foodObj.fish.forEach((fishItem) => {
          obj[fishItem] = obj[fishItem] + 1 || 1;
        });
      });
    });
    return obj;
  };
  
  console.log(food(data));
  
//  foodObj is an object, not an array.forEach resulted in an error.

//   directly accessing the meats and fish arrays inside foodObj not trying to iterate over an object.
  