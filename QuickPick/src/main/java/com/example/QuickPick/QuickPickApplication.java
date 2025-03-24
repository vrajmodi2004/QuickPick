package com.example.QuickPick;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages = "com.example")
@EnableMongoRepositories(basePackages = "com.example.repo")
public class QuickPickApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickPickApplication.class, args);
	}

}
