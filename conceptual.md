### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Tokens. JWTs are an open standard and are implemented across technology stacks, making it simple to share tokens across different services. JWTs can store any arbitrary “payload” of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session). The JWT token itself is a string comprising three parts: header (metadata about token), payload (data to be stored in token), signature (version of header & payload, signed with secret key)

- What is the signature portion of the JWT? What does it do?
  Signature: version of header & payload, signed with secret key. Uses algorithm specified in header.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, if a JWT is intercepted, the attacker can decode and view the contents of the payload. However, they cannot modify the payload or create a valid signature without knowing the secret key or having access to the private key.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  Make request with username/password to AJAX login route
  Server authenticates & returns token in JSON. Token is encoded & signed with open standard, “JSON Web Token”
  Front-end JavaScript receives token & stores
  For every future request, browser sends token in request. Server gets token from request & validates token

- Compare and contrast unit, integration and end-to-end tests.
  Unit Tests: Test individual components or units of code, such as functions, methods, or classes, in isolation from the rest of the application.
  Integration Tests: Test interactions and interfaces between multiple components or modules to ensure they work together correctly as a group.
  End-to-End Tests (E2E): Test the entire application or system from end to end, simulating real user scenarios and interactions.

- What is a mock? What are some things you would mock?
  Mocking is primarily used in unit testing. An object under test may have dependencies on other (complex) objects. To isolate the behavior, you replace other objects by mocks that simulate their behavior. This is useful if the real objects are impractical to incorporate into the unit test. We can mock API.

- What is continuous integration?
  Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. The goal is to build better software by developing and testing in smaller increments.

- What is an environment variable and what are they used for?
  An environment variable is a dynamic-named value that can affect the way running processes behave on a computer. Environment variables are part of the environment in which a process runs and are used to provide information to programs or scripts about the environment in which they are executing.

- What is TDD? What are some benefits and drawbacks?
  Write tests first - they will fail!
  Only write the code necessary to get the tests to pass.
  Focus on completing the task/user story at hand.
  As you write more code, keep running tests and make sure they are passing.
  Benefits: improved code quality, faster debugging;
  Drawbacks: writing tests before writing code, possibility to write too easy or too complex test, invonvinience.

- What is the value of using JSONSchema for validation?
  There are three main reasons for using a schema validation system:
  So user data can fail fast, before bad data gets to your db.
  To reduce amount of code for processing and validating data.
  To get a validation system that is easy to setup and maintain.

- What are some ways to decide which code to test?
  We should test the most critical components that will have bad impact if they fail. We should test complex code as it might have more bugs. We should test code that interacts with external services, databases, APIs, or other modules within an application. Code that handles user input.

- What does `RETURNING` do in SQL? When would you use it?
  In SQL, the RETURNING clause is used primarily in INSERT, UPDATE, and DELETE statements to retrieve the values of columns affected by the operation. It allows you to retrieve specific columns or expressions after performing the data manipulation operation, such as inserting, updating, or deleting rows in a table.

- What are some differences between Web Sockets and HTTP?
  HTTP is suitable for traditional request-response communication, while Web Sockets provide a more efficient and flexible mechanism for real-time, bidirectional communication between clients and servers.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I like Flask more, maybe because I'm used to it more. It seems to be easier with less code. Maybe after I spend more time with Express I'll change my mind.
