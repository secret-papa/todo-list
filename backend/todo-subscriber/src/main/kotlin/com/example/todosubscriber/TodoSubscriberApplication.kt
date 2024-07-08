package com.example.todosubscriber

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TodoSubscriberApplication

fun main(args: Array<String>) {
    runApplication<TodoSubscriberApplication>(*args)
}
