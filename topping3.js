function topping3(someMap){
  const map = new Map(someMap);
  if(map.has("potato"))
  {
    map.set("fries",map.get("potato");
  }
  if(map.has("salad"))
  {
    map.set("spinach",map.get("salad");
  }
  return map;
}