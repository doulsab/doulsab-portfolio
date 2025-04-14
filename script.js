var myApp = angular.module('portfolioApp',  ['ngSanitize'])
myApp.directive('prismHighlight', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.$watch(function () {
        return element.html();
      }, function () {
        Prism.highlightAllUnder(element[0]);
      });
    }
  };
});

  myApp.controller('PortfolioController', function ($scope) {

    
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

    $scope.javaUpdates = [
      {
        version: "Java 8",
        releaseDate: "March 18, 2014",
        description: "Java 8 introduced significant features such as Lambda Expressions, Streams API, and the new Date-Time API (java.time).",
        example: `<pre><code class="language-java">(x, y) -> x + y;</code></pre>
    <pre><code class="language-java">List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3, 4);
    nums.stream().filter(n -> n > 2).forEach(System.out::println);</code></pre>`
      },
      {
        version: "Java 9",
        releaseDate: "September 21, 2017",
        description: "Java 9 introduced the Java Platform Module System (JPMS), JShell, and enhanced Javadoc.",
        example: `<pre><code class="language-java">jshell> var sum = (int a, int b) -> a + b;</code></pre>
    <pre><code class="language-java">module my.module { requires java.base; }</code></pre>`
      },
      {
        version: "Java 10",
        releaseDate: "March 20, 2018",
        description: "Java 10 brought Local-Variable Type Inference (var), and garbage collection improvements.",
        example: `<pre><code class="language-java">var num = 10;</code></pre>
    <pre><code class="language-java">java -XX:+UseG1GC -jar myApp.jar</code></pre>`
      },
      {
        version: "Java 11",
        releaseDate: "September 25, 2018",
        description: "Java 11 was a Long-Term Support (LTS) release, introducing features like HTTP Client API, and removal of the Java EE and CORBA modules.",
        example: `<pre><code class="language-java">HttpClient client = HttpClient.newHttpClient();</code></pre>
    <pre><code class="language-java">HttpRequest request = HttpRequest.newBuilder(new URI("https://example.com")).build();</code></pre>`
      },
      {
        version: "Java 12",
        releaseDate: "March 19, 2019",
        description: "Java 12 included JVM improvements like Shenandoah Garbage Collector and JVM Constants API.",
        example: `<pre><code class="language-java">-XX:+UseShenandoahGC</code></pre>
    <pre><code class="language-java">ConstantDesc CONSTANT = ConstantDesc.of("value");</code></pre>`
      },
      {
        version: "Java 13",
        releaseDate: "September 17, 2019",
        description: "Java 13 introduced text blocks (Preview), dynamic CDS archives, and the new switch expression (Preview).",
        example: `<pre><code class="language-java">String s = """Hello, Java 13!""";</code></pre>
    <pre><code class="language-java">switch (day) {
      case MONDAY -> System.out.println("Start of the week");
    }</code></pre>`
      },
      {
        version: "Java 14",
        releaseDate: "March 17, 2020",
        description: "Java 14 brought features like helpful NullPointerExceptions, and the second preview of the switch expression.",
        example: `<pre><code class="language-java">NullPointerException: Cannot invoke "Object.toString()" because "obj" is null</code></pre>
    <pre><code class="language-java">switch (day) {
      case MONDAY -> System.out.println("Weekday");
    }</code></pre>`
      },
      {
        version: "Java 15",
        releaseDate: "September 15, 2020",
        description: "Java 15 introduced sealed classes (Preview) and Foreign-Memory Access API (Incubator).",
        example: `<pre><code class="language-java">sealed class Shape permits Circle, Square {}</code></pre>
    <pre><code class="language-java">MemorySegment segment = MemorySegment.allocateNative(1024);</code></pre>`
      },
      {
        version: "Java 16",
        releaseDate: "March 16, 2021",
        description: "Java 16 brought features like Records, Pattern Matching (Preview), and Foreign Function & Memory API (Incubator).",
        example: `<pre><code class="language-java">record Point(int x, int y) {}</code></pre>
    <pre><code class="language-java">if (obj instanceof String s) {
      System.out.println(s);
    }</code></pre>`
      },
      {
        version: "Java 17",
        releaseDate: "September 14, 2021",
        description: "Java 17 is a Long-Term Support (LTS) release, introducing pattern matching for switch, sealed classes, and enhanced pseudo-random number generators.",
        example: `<pre><code class="language-java">switch (obj) {
      case String s -> System.out.println(s);
    }</code></pre>
    <pre><code class="language-java">sealed class Shape permits Circle, Square {}</code></pre>`
      },
      {
        version: "Java 18",
        releaseDate: "March 22, 2022",
        description: "Java 18 introduced features like Simple Web Server, JEP 400: UTF-8 by Default, and JEP 395: On-Stack Replacement for JVM.",
        example: `<pre><code class="language-java">java -m httpserver</code></pre>
    <pre><code class="language-java">java -Dfile.encoding=UTF-8 -jar app.jar</code></pre>`
      },
      {
        version: "Java 19",
        releaseDate: "September 20, 2022",
        description: "Java 19 includes features like Record Patterns (Preview), Virtual Threads (Preview), and a new Foreign Function & Memory API.",
        example: `<pre><code class="language-java">Thread.startVirtualThread(() -> {...});</code></pre>
    <pre><code class="language-java">switch (obj) {
      case Record Point(int x, int y) -> System.out.println(x + y);
    }</code></pre>`
      },
      {
        version: "Java 20",
        releaseDate: "March 21, 2023",
        description: "Java 20 introduced features like Project Loom (Virtual Threads), enhanced pattern matching, and improvements in the Foreign Function & Memory API.",
        example: `<pre><code class="language-java">switch (obj) {
      case Integer i -> System.out.println(i);
    }</code></pre>
    <pre><code class="language-java">Thread.startVirtualThread(() -> {});</code></pre>`
      },
      {
        version: "Java 21",
        releaseDate: "September 2023",
        description: "Java 21 is the latest LTS version with features like Foreign Function and Memory API (incubator), JEP 441 (Pattern Matching), and many more.",
        example: `<pre><code class="language-java">ForeignMemoryAccess API</code></pre>
    <pre><code class="language-java">switch (shape) {
      case Circle c -> System.out.println("Circle");
    }</code></pre>`
      }
    ];
    
    

    $scope.isDarkMode = false;
    $scope.toggleDarkMode = function () {
      $scope.isDarkMode = !$scope.isDarkMode;
    };

  });
