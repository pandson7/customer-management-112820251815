# Customer Management System

A comprehensive full-stack customer management application built with React frontend and AWS CDK backend infrastructure.

## 🏗️ Architecture Overview

This project consists of:
- **Frontend**: React TypeScript application with Tailwind CSS
- **Backend**: AWS CDK infrastructure with Lambda functions, DynamoDB, and API Gateway
- **Infrastructure**: Fully automated AWS deployment using CDK

## 📁 Project Structure

```
customer-management-112820251815/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API service layer
│   │   └── types/           # TypeScript type definitions
│   ├── public/              # Static assets
│   └── build/               # Production build output
├── backend/                 # AWS CDK infrastructure
│   ├── lib/                 # CDK stack definitions
│   ├── bin/                 # CDK app entry point
│   ├── test/                # Infrastructure tests
│   └── cdk.out/             # CDK synthesis output
├── specs/                   # Project specifications
│   ├── requirements.md      # Functional requirements
│   ├── design.md           # Technical design
│   └── tasks.md            # Implementation tasks
├── generated-diagrams/      # Architecture diagrams
├── pricing/                 # Cost analysis documents
├── qr-code/                # Repository QR code
└── PROJECT_SUMMARY.md      # Project overview
```

## 🚀 Features

### Frontend Features
- Modern React 18 with TypeScript
- Responsive design with Tailwind CSS
- Customer CRUD operations
- Real-time data synchronization
- Form validation and error handling
- Professional UI/UX design

### Backend Features
- Serverless architecture with AWS Lambda
- DynamoDB for data persistence
- RESTful API with API Gateway
- CORS configuration for frontend integration
- Infrastructure as Code with AWS CDK
- Automated deployment and scaling

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Testing Library** - Component testing

### Backend & Infrastructure
- **AWS CDK** - Infrastructure as Code
- **AWS Lambda** - Serverless compute
- **Amazon DynamoDB** - NoSQL database
- **Amazon API Gateway** - REST API management
- **AWS CloudFormation** - Infrastructure deployment
- **Node.js** - Runtime environment
- **TypeScript** - Type-safe development

## 📋 Prerequisites

- Node.js 18+ and npm
- AWS CLI configured with appropriate credentials
- AWS CDK CLI installed globally
- Git for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/pandson7/customer-management-112820251815.git
cd customer-management-112820251815
```

### 2. Deploy Backend Infrastructure
```bash
cd backend
npm install
npm run build
cdk bootstrap  # First time only
cdk deploy
```

### 3. Start Frontend Development
```bash
cd ../frontend
npm install
npm start
```

The application will be available at `http://localhost:3000`

## 🏗️ Deployment

### Backend Deployment
```bash
cd backend
npm run build
cdk deploy
```

### Frontend Production Build
```bash
cd frontend
npm run build
```

The build artifacts will be in the `frontend/build/` directory.

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

## 📊 Cost Analysis

Detailed cost analysis is available in the `pricing/` directory:
- Monthly operational costs
- Scaling cost projections
- Cost optimization recommendations

## 📖 Documentation

- **[Requirements](specs/requirements.md)** - Functional and non-functional requirements
- **[Design](specs/design.md)** - Technical architecture and design decisions
- **[Tasks](specs/tasks.md)** - Implementation roadmap and task breakdown
- **[Architecture Diagrams](generated-diagrams/)** - Visual system architecture
- **[Cost Analysis](pricing/)** - Detailed cost breakdown and projections

## 🔧 Configuration

### Environment Variables
Create `.env` files in both frontend and backend directories:

**Frontend (.env)**
```
REACT_APP_API_URL=https://your-api-gateway-url
```

**Backend (.env)**
```
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=CustomerManagement
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `specs/` directory
- Review the architecture diagrams for system understanding

## 🎯 Project Status

✅ **Completed Features:**
- Full-stack application architecture
- React frontend with TypeScript
- AWS CDK backend infrastructure
- DynamoDB data layer
- API Gateway REST endpoints
- Comprehensive documentation
- Cost analysis and projections

🚀 **Ready for Production Deployment**

---

**Generated by Echo Architect** - Automated full-stack application generator
