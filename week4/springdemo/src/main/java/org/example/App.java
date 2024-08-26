package org.example;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {

        ApplicationContext context= new ClassPathXmlApplicationContext("beans.xml");
        Hello obj =(Hello) context.getBean("hello");
        Hello obj2 =(Hello) context.getBean("hello");
        System.out.println(obj==obj2);
        obj.helloWorld();
        Student student= (Student) context.getBean("stu1");
        System.out.println(student);

    }
}
