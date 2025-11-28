# Technical Design Document

## Architecture Overview

The Customer Information Management System follows a serverless architecture pattern using AWS services with a React frontend and Node.js backend. The system uses API Gateway for REST endpoints, Lambda functions for business logic, and DynamoDB for data persistence.

## System Components

### Frontend Layer
- **Technology**: React.js application
- **Hosting**: Local development server
- **Responsibilities**: User interface, form validation, API communication
- **Key Features**: Responsive design, real-time validation, CRUD operations interface

### API Layer
- **Technology**: AWS API Gateway (REST API)
- **Authentication**: None (prototype system)
- **Endpoints**:
  - GET /customers - List all customers
  - GET /customers/{id} - Get specific customer
  - POST /customers - Create new customer
  - PUT /customers/{id} - Update existing customer
  - DELETE /customers/{id} - Delete customer

### Business Logic Layer
- **Technology**: AWS Lambda functions (Node.js runtime)
- **Functions**:
  - `listCustomers` - Retrieve customer list from DynamoDB
  - `getCustomer` - Retrieve single customer by ID
  - `createCustomer` - Create new customer record
  - `updateCustomer` - Update existing customer record
  - `deleteCustomer` - Delete customer record

### Data Layer
- **Technology**: Amazon DynamoDB
- **Table Design**:
  - Table Name: `Customers`
  - Partition Key: `customerId` (String)
  - Attributes:
    - `customerId` - Unique identifier (UUID)
    - `name` - Customer full name (String)
    - `email` - Customer email address (String)
    - `phone` - Customer phone number (String)
    - `address` - Customer address (String)
    - `registrationDate` - ISO timestamp (String)
    - `lastModified` - ISO timestamp (String)

## Data Model

```json
{
  "customerId": "uuid-string",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123",
  "address": "123 Main St, City, State 12345",
  "registrationDate": "2024-01-15T10:30:00Z",
  "lastModified": "2024-01-15T10:30:00Z"
}
```

## API Specifications

### GET /customers
- **Purpose**: Retrieve all customer records
- **Response**: Array of customer objects
- **Status Codes**: 200 (success), 500 (server error)

### GET /customers/{id}
- **Purpose**: Retrieve specific customer by ID
- **Parameters**: customerId (path parameter)
- **Response**: Single customer object
- **Status Codes**: 200 (success), 404 (not found), 500 (server error)

### POST /customers
- **Purpose**: Create new customer record
- **Request Body**: Customer object (without customerId)
- **Response**: Created customer object with generated ID
- **Status Codes**: 201 (created), 400 (validation error), 500 (server error)

### PUT /customers/{id}
- **Purpose**: Update existing customer record
- **Parameters**: customerId (path parameter)
- **Request Body**: Updated customer object
- **Response**: Updated customer object
- **Status Codes**: 200 (success), 404 (not found), 400 (validation error), 500 (server error)

### DELETE /customers/{id}
- **Purpose**: Delete customer record
- **Parameters**: customerId (path parameter)
- **Response**: Success message
- **Status Codes**: 200 (success), 404 (not found), 500 (server error)

## Infrastructure as Code

### AWS CDK Stack Components
- **API Gateway**: REST API with CORS enabled
- **Lambda Functions**: Node.js runtime with appropriate IAM roles
- **DynamoDB Table**: On-demand billing, point-in-time recovery disabled
- **IAM Roles**: Lambda execution roles with DynamoDB permissions

### Deployment Strategy
- Single CDK stack deployment
- No CI/CD pipeline (simple CDK deploy)
- Local frontend development server
- Environment-specific configuration through CDK context

## Security Considerations

- **API Gateway**: CORS configuration for local frontend
- **Lambda Functions**: Minimal IAM permissions (DynamoDB read/write only)
- **DynamoDB**: Server-side encryption enabled by default
- **Input Validation**: Server-side validation for all API endpoints
- **Error Handling**: Generic error messages to prevent information disclosure

## Performance Considerations

- **DynamoDB**: On-demand billing for variable workloads
- **Lambda**: Appropriate memory allocation based on function complexity
- **API Gateway**: Request/response caching disabled (prototype system)
- **Frontend**: Client-side validation to reduce API calls

## Error Handling Strategy

### Frontend Error Handling
- Form validation errors displayed inline
- API errors shown as user-friendly messages
- Loading states during API operations
- Retry mechanisms for failed requests

### Backend Error Handling
- Structured error responses with appropriate HTTP status codes
- Lambda function error logging to CloudWatch
- Input validation with detailed error messages
- Graceful handling of DynamoDB exceptions

## Monitoring and Logging

- **CloudWatch Logs**: Lambda function execution logs
- **CloudWatch Metrics**: API Gateway and Lambda metrics
- **Error Tracking**: CloudWatch error metrics and alarms
- **Performance Monitoring**: Lambda duration and error rate tracking
