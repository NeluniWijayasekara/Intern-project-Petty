import React, { useState } from "react";

interface Company {
  id: number;
  name: string;
  location: string;
}

const CompanyManagement: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([
    { id: 1, name: "ABC Pvt Ltd", location: "Colombo" },
    { id: 2, name: "XYZ Holdings", location: "Kandy" },
  ]);

  const [newCompany, setNewCompany] = useState({ name: "", location: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Add new company
  const handleAdd = () => {
    if (!newCompany.name || !newCompany.location) return;
    setCompanies([
      ...companies,
      { id: Date.now(), name: newCompany.name, location: newCompany.location },
    ]);
    setNewCompany({ name: "", location: "" });
  };

  // Delete company
  const handleDelete = (id: number) => {
    setCompanies(companies.filter((c) => c.id !== id));
  };

  // Edit company
  const handleEdit = (id: number) => {
    setEditingId(id);
    const company = companies.find((c) => c.id === id);
    if (company) setNewCompany({ name: company.name, location: company.location });
  };

  // Update company
  const handleUpdate = () => {
    setCompanies(
      companies.map((c) =>
        c.id === editingId ? { ...c, name: newCompany.name, location: newCompany.location } : c
      )
    );
    setEditingId(null);
    setNewCompany({ name: "", location: "" });
  };

  return (
    <div style={{ padding: "20px", background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, letterSpacing: 1, color: '#333' }}>🏢 Company Management</h2>
      <p style={{ fontSize: 18, marginBottom: 24, color: '#555' }}>
        Manage company information, branches, and employees in a vibrant dashboard.
      </p>
      <div style={{
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '32px',
        maxWidth: 800,
        margin: '0 auto 32px auto',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
          <thead>
            <tr style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <th style={{ padding: '12px 8px', borderRadius: '16px 0 0 0' }}>ID</th>
              <th style={{ padding: '12px 8px' }}>Company Name</th>
              <th style={{ padding: '12px 8px' }}>Location</th>
              <th style={{ padding: '12px 8px', borderRadius: '0 16px 0 0' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} style={{ background: '#f5f7fa', borderBottom: '2px solid #e0e7ef' }}>
                <td style={{ padding: '10px 8px', fontWeight: 600 }}>{company.id}</td>
                <td style={{ padding: '10px 8px' }}>{company.name}</td>
                <td style={{ padding: '10px 8px' }}>{company.location}</td>
                <td style={{ padding: '10px 8px' }}>
                  <button
                    style={{
                      background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 8,
                      padding: '6px 16px',
                      marginRight: 8,
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                    onClick={() => handleEdit(company.id)}
                  >Edit</button>
                  <button
                    style={{
                      background: 'linear-gradient(90deg, #fa709a 0%, #fee140 100%)',
                      color: '#333',
                      border: 'none',
                      borderRadius: 8,
                      padding: '6px 16px',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                    onClick={() => handleDelete(company.id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
            {companies.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '16px', color: '#999' }}>
                  No companies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Add/Edit Form */}
        <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Company Name"
            value={newCompany.name}
            onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
            style={{ padding: '8px', borderRadius: 8, border: '1px solid #c3cfe2', minWidth: 180 }}
          />
          <input
            type="text"
            placeholder="Location"
            value={newCompany.location}
            onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
            style={{ padding: '8px', borderRadius: 8, border: '1px solid #c3cfe2', minWidth: 180 }}
          />
          {editingId ? (
            <button
              onClick={handleUpdate}
              style={{
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '8px 24px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >Update Company</button>
          ) : (
            <button
              onClick={handleAdd}
              style={{
                background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
                color: '#333',
                border: 'none',
                borderRadius: 8,
                padding: '8px 24px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >Add Company</button>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #ffb347 0%, #ffcc33 100%)',
          borderRadius: 16,
          padding: '24px 32px',
          minWidth: 220,
          boxShadow: '0 4px 16px rgba(255,179,71,0.15)',
          color: '#333',
          textAlign: 'center',
        }}>
          <h3 style={{ fontWeight: 600, marginBottom: 8 }}>Branches</h3>
          <p style={{ fontSize: 16 }}>Add, edit, and view company branches.</p>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          borderRadius: 16,
          padding: '24px 32px',
          minWidth: 220,
          boxShadow: '0 4px 16px rgba(67,233,123,0.15)',
          color: '#333',
          textAlign: 'center',
        }}>
          <h3 style={{ fontWeight: 600, marginBottom: 8 }}>Employees</h3>
          <p style={{ fontSize: 16 }}>Manage employee records and roles.</p>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          borderRadius: 16,
          padding: '24px 32px',
          minWidth: 220,
          boxShadow: '0 4px 16px rgba(250,112,154,0.15)',
          color: '#333',
          textAlign: 'center',
        }}>
          <h3 style={{ fontWeight: 600, marginBottom: 8 }}>Company Info</h3>
          <p style={{ fontSize: 16 }}>Edit company details and settings.</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyManagement;


