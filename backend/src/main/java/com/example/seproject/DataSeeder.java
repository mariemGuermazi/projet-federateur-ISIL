package com.example.seproject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(ProjectRepository projectRepository, EmployeeRepository employeeRepository) {
        return args -> {
            // Seed Projects
            if (projectRepository.count() == 0) {
                projectRepository
                        .save(new Project(null, "E-Commerce Platform", "Sprint 1 MVP for retail", "In Progress"));
                projectRepository.save(new Project(null, "Mobile Banking App", "Secure payment integration", "To Do"));
                System.out.println("Projects seeded!");
            }

            // Seed Employees
            if (employeeRepository.count() == 0) {
                employeeRepository.save(new Employee(null, "John", "Doe", "Full Stack Developer", "Engineering"));
                employeeRepository.save(new Employee(null, "Jane", "Smith", "Scrum Master", "Management"));
                employeeRepository.save(new Employee(null, "Haythem", "Ghazouani", "Project Tutor", "Education"));
                System.out.println("Employees seeded!");
            }
        };
    }
}
