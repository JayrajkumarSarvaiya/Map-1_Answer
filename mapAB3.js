function mapAB3(someMap){
  const map = new Map(someMap);
  
  if(map.has("a") && map.has("b"))
  {
    return map;
  }
  else if(map.has("a"))
  {
    map.set("b", map.get("a"));
  }
  else if(map.has("b"))
  {
    map.set("a", map.get("b"));
  }
  return map
}