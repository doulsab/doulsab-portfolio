angular.module('portfolioApp', [])
  .controller('PortfolioController', function ($scope) {
    $scope.name = "Doulsab Dodamani";
    $scope.title = "Java Full Stack Developer | Spring Boot | AngularJS";
    $scope.about = "Passionate Java Full Stack Developer with 3.5 years of experience delivering scalable and efficient web applications. Proficient in Java, Spring Boot, AngularJS, and database management. Strong problem-solving and collaboration skills, proven through successful project delivery with international clients like Unimicron (Germany).";

    $scope.skills = [
      { name: "Java", link: "https://docs.oracle.com/en/java/", icon: "fab fa-java" },
      { name: "Spring Boot", link: "https://spring.io/projects/spring-boot", icon: "fas fa-leaf" },
      { name: "REST APIs", link: "https://spring.io/guides/gs/testing-restdocs", icon: "fas fa-plug" },
      { name: "AngularJS", link: "https://angularjs.org/", icon: "fab fa-angular" },
      { name: "MySQL", link: "https://www.mysql.com/", icon: "fas fa-database" },
      { name: "Oracle", link: "https://www.oracle.com/database/", icon: "fas fa-database" },
      { name: "SQL", link: "https://www.w3schools.com/sql/", icon: "fas fa-code" },
      { name: "MongoDB", link: "https://www.mongodb.com/", icon: "fas fa-leaf" },
      { name: "Postman", link: "https://www.postman.com/", icon: "fas fa-paper-plane" },
      { name: "Swagger API Documentation", link: "https://swagger.io/", icon: "fas fa-book" },
      { name: "Git", link: "https://git-scm.com/", icon: "fab fa-git-alt" },
      { name: "GitHub", link: "https://github.com/", icon: "fab fa-github" },
      { name: "Maven", link: "https://maven.apache.org/", icon: "fas fa-cogs" },
      { name: "Microservices Architecture", link: "https://spring.io/blog/2015/07/14/microservices-with-spring", icon: "fas fa-network-wired" }
    ];
    

    $scope.projects = [
      {
        name: "Bottie - Quotation Application",
        description: "A web-based application to streamline quotation workflows. Built using Java, Spring Boot, AngularJS, and integrated with backend databases. Worked on feature development, backend microservices, API documentation with Swagger, and database interactions using MongoDB and SQL."
      },
      {
        name: "Bottie_Quote - Client-Specific Quotation Module",
        description: "Developed and maintained modules for Unimicron (Germany). Responsible for data handling, business logic integration, and Swagger documentation. Enhanced system reliability through microservice-based architecture and comprehensive testing using Postman."
      }
    ];

    $scope.contact = {
      email: "doulsab0786@gmail.com",
      linkedin: "https://www.linkedin.com/in/doulsab-dodamani-657a00191",
      github: "https://github.com/doulsab"
    };

    $scope.isDarkMode = false;
    $scope.toggleDarkMode = function () {
      $scope.isDarkMode = !$scope.isDarkMode;
    };
  });
