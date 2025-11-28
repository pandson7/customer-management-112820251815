import React, { useState } from 'react';
import { Customer } from '../types/Customer';
import { CustomerService } from '../services/customerService';

interface CustomerDetailProps {
  customer: Customer;
  onEdit: (customer: Customer) => void;
  onDelete: () => void;
  onBack: () => void;
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer, onEdit, onDelete, onBack }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      setError(null);
      await CustomerService.deleteCustomer(customer.customerId);
      onDelete();
    } catch (err) {
      setError('Failed to delete customer');
    } finally {
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Customer Details</h2>
        <button
          onClick={onBack}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Back to List
        </button>
      </div>

      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#495057' }}>Basic Information</h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {customer.name}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Email:</strong> {customer.email}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Phone:</strong> {customer.phone || 'Not provided'}
            </div>
            <div>
              <strong>Customer ID:</strong> {customer.customerId}
            </div>
          </div>
          
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#495057' }}>Additional Details</h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Address:</strong> {customer.address || 'Not provided'}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Registration Date:</strong> {new Date(customer.registrationDate).toLocaleString()}
            </div>
            <div>
              <strong>Last Modified:</strong> {new Date(customer.lastModified).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => onEdit(customer)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Edit Customer
        </button>
        <button
          onClick={() => setShowDeleteConfirm(true)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Delete Customer
        </button>
      </div>

      {showDeleteConfirm && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.5)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '30px', 
            borderRadius: '8px', 
            maxWidth: '400px',
            width: '90%'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Confirm Delete</h3>
            <p>Are you sure you want to delete customer "{customer.name}"? This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#6c757d', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: deleting ? 'not-allowed' : 'pointer' 
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: deleting ? '#ccc' : '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: deleting ? 'not-allowed' : 'pointer' 
                }}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetail;
