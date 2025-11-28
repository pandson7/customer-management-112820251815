import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import CustomerDetail from './components/CustomerDetail';
import { Customer } from './types/Customer';
import './App.css';

type View = 'list' | 'create' | 'edit' | 'detail';

function App() {
  const [currentView, setCurrentView] = useState<View>('list');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setCurrentView('detail');
  };

  const handleCreateCustomer = () => {
    setSelectedCustomer(null);
    setCurrentView('create');
  };

  const handleEditCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setCurrentView('edit');
  };

  const handleSave = () => {
    setCurrentView('list');
    setSelectedCustomer(null);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleCancel = () => {
    if (selectedCustomer && currentView === 'edit') {
      setCurrentView('detail');
    } else {
      setCurrentView('list');
      setSelectedCustomer(null);
    }
  };

  const handleDelete = () => {
    setCurrentView('list');
    setSelectedCustomer(null);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedCustomer(null);
  };

  return (
    <div className="App">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {currentView === 'list' && (
          <CustomerList
            onSelectCustomer={handleSelectCustomer}
            onCreateCustomer={handleCreateCustomer}
            refreshTrigger={refreshTrigger}
          />
        )}

        {currentView === 'create' && (
          <CustomerForm
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {currentView === 'edit' && selectedCustomer && (
          <CustomerForm
            customer={selectedCustomer}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {currentView === 'detail' && selectedCustomer && (
          <CustomerDetail
            customer={selectedCustomer}
            onEdit={handleEditCustomer}
            onDelete={handleDelete}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

export default App;
