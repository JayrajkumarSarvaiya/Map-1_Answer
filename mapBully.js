function mapBully(someMap){
  const map = new Map(someMap);
  
  if(map.has("a"))
  {
    let temp = map.get("a");
    map.set("a","");
    map.set("b",temp);
  }
  return map;
}