# Customer Information Management System - Architecture Diagrams

This directory contains AWS architecture diagrams for the Customer Information Management System.

## Generated Diagrams

### 1. customer-management-architecture.png
**High-Level System Architecture**

This diagram shows the overall system architecture with the following components:
- **User**: End user accessing the system
- **React Frontend**: Client-side application providing the user interface
- **API Gateway**: AWS service handling HTTP requests and routing
- **Lambda Functions**: Serverless compute functions for business logic
  - List Customers: Retrieves all customer records
  - Get Customer: Retrieves a specific customer by ID
  - Create Customer: Creates new customer records
  - Update Customer: Updates existing customer records
  - Delete Customer: Deletes customer records
- **DynamoDB**: NoSQL database storing customer information

### 2. customer-management-api-flow.png
**Detailed API Flow Diagram**

This diagram provides a detailed view of the API endpoints and data flow:
- **API Endpoints**: Shows specific HTTP methods and paths
  - GET /customers - List all customers
  - GET /customers/{id} - Get specific customer
  - POST /customers - Create new customer
  - PUT /customers/{id} - Update existing customer
  - DELETE /customers/{id} - Delete customer
- **Database Operations**: Shows specific DynamoDB operations
  - Scan: For listing all customers
  - GetItem: For retrieving single customer
  - PutItem: For creating new customer
  - UpdateItem: For updating existing customer
  - DeleteItem: For deleting customer
- **Monitoring**: CloudWatch Logs for function monitoring and debugging

## Architecture Patterns

### Serverless Architecture
The system follows a serverless architecture pattern using:
- AWS Lambda for compute
- API Gateway for API management
- DynamoDB for data persistence
- CloudWatch for monitoring

### Benefits
- **Scalability**: Automatic scaling based on demand
- **Cost-Effective**: Pay-per-use pricing model
- **Maintenance**: Reduced operational overhead
- **Performance**: Low latency with proper configuration

## Data Model

The system uses a simple DynamoDB table structure:
- **Table Name**: Customers
- **Partition Key**: customerId (String)
- **Attributes**:
  - customerId: Unique identifier (UUID)
  - name: Customer full name
  - email: Customer email address
  - phone: Customer phone number
  - address: Customer address
  - registrationDate: ISO timestamp
  - lastModified: ISO timestamp

## Security Considerations

- **API Gateway**: CORS configuration for frontend access
- **Lambda Functions**: Minimal IAM permissions for DynamoDB operations
- **DynamoDB**: Server-side encryption enabled by default
- **Input Validation**: Server-side validation for all endpoints

## Deployment

The system is designed for deployment using AWS CDK (Cloud Development Kit) with:
- Single stack deployment
- Environment-specific configuration
- Infrastructure as Code approach
