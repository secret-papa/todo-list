package com.study.todo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories
class TodoApplication

fun main(args: Array<String>) {
	runApplication<TodoApplication>(*args)
}
