package com.mindsprint.hello.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;

public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(67);
        list.add(10);
        list.add(20);
        list.add(67);
        System.out.println(list);
        list.remove(2);
        System.out.println(list);
        System.out.println(list.size());
        System.out.println(list.contains(67));
        System.out.println("Iterate using forloop");
        for(int i:list)
            System.out.println(i);
        System.out.println("Print using iterator");
        Iterator<Integer> itr= list.iterator();
        while (itr.hasNext())
            System.out.println(itr.next());
    }
}
