function mapAB2(someMap){
  const map = new Map(someMap);
  if(map.get("a") == map.get("b"))
  {
    map.delete("a");
    map.delete("b");
  }
  return map;
}