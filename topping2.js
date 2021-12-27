function topping2(someMap){
  const map = new Map(someMap);
  if(map.has("ice cream"))
  {
    map.set("yogurt",map.get("ice cream"));
  }
  if(map.has("spinach"))
  {
    map.set("spinach","nuts");
  }
  return map;
}