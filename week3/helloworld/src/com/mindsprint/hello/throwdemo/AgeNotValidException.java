package com.mindsprint.hello.throwdemo;

public class AgeNotValidException extends Exception{
    AgeNotValidException(){
        super("Age is not Valid Exception");
    }
    AgeNotValidException(String message){
        super(message);
    }

    @Override
    public String toString() {
        return "AgeNotValidException{}"+super.toString();
    }
}
