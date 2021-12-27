function mapAB(someMap){
  const map = new Map(someMap)
  if(map.has("a") && map.has("b")) {
    map.set("ab", map.get("a") + map.get("b"));
  }
  return map;
}