package com.mindsprint.hello.collections;

import java.util.*;

public class HashTableDemo {
    public static void main(String[] args) {
        Map<Integer,String> map=new Hashtable<>();
        map.put(10,"ten");
        map.put(2,"two");
        map.put(9,"nine");

        System.out.println(map);
        System.out.println(map.get(10));
        System.out.println(map.containsKey(10));
        Set<Map.Entry<Integer,String>> set =map.entrySet();
        Iterator<Map.Entry<Integer,String>> itr =set.iterator();
        while (itr.hasNext()){
            Map.Entry<Integer,String> entry=itr.next();
            System.out.println(entry.getKey()+" "+entry.getValue());
        }
        //using for each
        for(Map.Entry<Integer,String> entry: map.entrySet()){
            System.out.println(entry.getKey()+" "+entry.getValue());
        }
    }
}
