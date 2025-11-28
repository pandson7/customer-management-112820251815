import { Customer, CreateCustomerRequest, UpdateCustomerRequest } from '../types/Customer';

const API_BASE_URL = 'https://dpzl8whrh3.execute-api.us-east-1.amazonaws.com/prod';

export class CustomerService {
  static async getAllCustomers(): Promise<Customer[]> {
    const response = await fetch(`${API_BASE_URL}/customers`);
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    return response.json();
  }

  static async getCustomer(customerId: string): Promise<Customer> {
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch customer');
    }
    return response.json();
  }

  static async createCustomer(customer: CreateCustomerRequest): Promise<Customer> {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    if (!response.ok) {
      throw new Error('Failed to create customer');
    }
    return response.json();
  }

  static async updateCustomer(customerId: string, customer: UpdateCustomerRequest): Promise<Customer> {
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    if (!response.ok) {
      throw new Error('Failed to update customer');
    }
    return response.json();
  }

  static async deleteCustomer(customerId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete customer');
    }
  }
}
