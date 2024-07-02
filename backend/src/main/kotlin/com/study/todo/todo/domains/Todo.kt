package com.study.todo.todo.domains

import jakarta.persistence.Entity
import jakarta.persistence.Id
import java.time.Instant
import java.util.UUID

@Entity
data class Todo (
    @Id
    val id: String = UUID.randomUUID().toString(),
    var title: String,
    var description: String?,
    var createdAt: Instant = Instant.now(),
    var updatedAt: Instant = Instant.now()
)