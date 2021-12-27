function topping1(someMap){
  const map = new Map(someMap);
  if(map.has("ice cream"))
  {
    map.set("ice cream","cherry");
  }
  map.set("bread","butter");
  return map;
}