# Error Handling Middleware Package

A production-ready Node.js package for consistent and structured error handling in backend applications. This package provides robust error handling, making it easy to manage errors on the frontend.

## Features
- Predefined error types for common scenarios:
  - **API Errors**: Standard HTTP errors.
  - **Validation Errors**: Field-specific validation failures.
  - **Database Errors**: Errors related to database operations.
  - **Rate Limit Errors**: Throttling issues.
- Global error handler middleware.
- Structured error responses for the frontend.
- Extendable for custom error types.
- Compatible with `Express.js`.

## Installation
```bash
npm install error-handling-package
```

Error Handling Package

Error Handling Package
======================

A comprehensive error handling solution for Node.js/TypeScript applications.

Installation
------------

    npm install error-handling-package

Usage
-----

### 1\. Import Essential Components

    import { APIError, ValidationErrors, DatabaseError, RateLimitError, globalErrorHandler, asyncHandler } from "error-handling-package";

### 2\. Set Up Global Error Handling

    import express from 'express';
    import { globalErrorHandler } from 'error-handling-package';
    
    const app = express();
    
    // Your routes here...
    
    // Global Error Handler
    app.use(globalErrorHandler);

### 3\. Throwing Errors

#### API Error

    throw APIError.notFound("Resource not found");

#### Validation Error

    const validationError = new ValidationErrors("Invalid input data");
    validationError.addError("email", "Invalid email address", "ERR_INVALID_EMAIL");
    throw validationError;

#### Database Error

    throw DatabaseError.connectionError({ host: "localhost", port: 5432 });

#### Rate Limit Error

    throw new RateLimitError();

### 4\. Using Async Error Wrapper

    import { asyncHandler } from "error-handling-package";
    
    app.get(
      "/example",
      asyncHandler(async (req, res) => {
        // Your async logic here...
        throw APIError.internal("Something went wrong");
      })
    );

Customization
-------------

- Extend existing error classes or create custom ones by following the patterns in the APIError or DatabaseError classes.
 - Customize logging behavior by replacing the \`winston\` logger in \`utils/logger.ts\`.


Folder Structure
----------------
```
index.ts
|
src/
├── errors/
│   ├── ApiErrors.ts
│   ├── ValidationErrors.ts
│   ├── DatabaseError.ts
│   └── RateLimitError.ts
├── middleware/
│   ├── asyncHandler.ts
│   └── globalErrorHandler.ts
└── utils/
    └── logger.ts

```


## Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

## License
MIT


This setup ensures your package is production-ready, structured, and extensible. Let me know if you need further refinements!



