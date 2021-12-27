function mapShare(someMap){
  const map = new Map(someMap);
  map.delete("c");
  
   if (map.get("a") != null){
        map.set("b", map.get("a"));
   }
   return map;
}