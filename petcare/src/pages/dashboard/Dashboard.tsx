<<<<<<< HEAD
// src/pages/dashboard/Dashboard.tsx
import React from "react";
import { Row, Col } from "antd";
import DashboardCard from "../../components/DashboardCard";

const Dashboard: React.FC = () => {
  // 👇 API data (hardcoded for now, later can come from backend)
  const stats = [
    { title: "Active Fraud Cases", value: 12 },
    { title: "High-Risk Users", value: 5 },
    { title: "Flagged Claims", value: 8 },
    { title: "Suspicious Listings", value: 4 },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>Dashboard Overview</h2>
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <DashboardCard title={stat.title} value={stat.value} />
          </Col>
        ))}
=======
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Tag, Button, Statistic, List } from 'antd';
import { 
  AlertOutlined, 
  UserDeleteOutlined, 
  ExclamationCircleOutlined, 
  ShopOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  EyeOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined
} from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Stats data
  const stats = [
    { 
      title: "Active Fraud Cases", 
      value: 12, 
      icon: <AlertOutlined />, 
      color: "#ff4d4f",
      trend: { direction: 'down', percentage: 8, isGood: true },
      bgColor: "#fff2f0"
    },
    { 
      title: "High-Risk Users", 
      value: 5, 
      icon: <UserDeleteOutlined />, 
      color: "#faad14",
      trend: { direction: 'up', percentage: 15, isGood: false },
      bgColor: "#fffbe6"
    },
    { 
      title: "Flagged Claims", 
      value: 8, 
      icon: <ExclamationCircleOutlined />, 
      color: "#fa8c16",
      trend: { direction: 'down', percentage: 12, isGood: true },
      bgColor: "#fff7e6"
    },
    { 
      title: "Suspicious Listings", 
      value: 4, 
      icon: <ShopOutlined />, 
      color: "#722ed1",
      trend: { direction: 'up', percentage: 5, isGood: false },
      bgColor: "#f9f0ff"
    }
  ];

  // Chart data
  const fraudTrendData = [
    { month: 'Jan', cases: 8, resolved: 6 },
    { month: 'Feb', cases: 12, resolved: 9 },
    { month: 'Mar', cases: 15, resolved: 11 },
    { month: 'Apr', cases: 10, resolved: 8 },
    { month: 'May', cases: 18, resolved: 14 },
    { month: 'Jun', cases: 12, resolved: 10 }
  ];

  const riskDistribution = [
    { name: 'Low Risk', value: 65, color: '#52c41a' },
    { name: 'Medium Risk', value: 25, color: '#faad14' },
    { name: 'High Risk', value: 10, color: '#ff4d4f' }
  ];

  // Recent cases table
  const recentCases = [
    {
      key: '1',
      id: 'FC-2024-001',
      type: 'Insurance Claim',
      riskLevel: 'High',
      status: 'Under Review',
      date: '2024-09-04',
      amount: '$2,500'
    },
    {
      key: '2',
      id: 'FC-2024-002',
      type: 'Marketplace Listing',
      riskLevel: 'Medium',
      status: 'Investigating',
      date: '2024-09-03',
      amount: '$850'
    },
    {
      key: '3',
      id: 'FC-2024-003',
      type: 'User Activity',
      riskLevel: 'High',
      status: 'Flagged',
      date: '2024-09-02',
      amount: '$1,200'
    }
  ];

  const caseColumns = [
    {
      title: 'Case ID',
      dataIndex: 'id',
      key: 'id',
  render: (text: string) => <a style={{ color: '#1890ff', fontWeight: 500 }}>{text}</a>
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Risk Level',
      dataIndex: 'riskLevel',
      key: 'riskLevel',
  render: (level: string) => (
        <Tag color={level === 'High' ? 'red' : level === 'Medium' ? 'orange' : 'green'}>
          {level}
        </Tag>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
  render: (status: string) => (
        <Tag color={status === 'Under Review' ? 'blue' : status === 'Investigating' ? 'orange' : 'red'}>
          {status}
        </Tag>
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
  render: (amount: string) => <span style={{ fontWeight: 600 }}>{amount}</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="primary" size="small" icon={<EyeOutlined />}>
          Review
        </Button>
      )
    }
  ];

  // Recent activities
  const recentActivities = [
    {
      title: 'New fraud case detected',
      description: 'Insurance claim FC-2024-001 flagged for suspicious activity',
      time: '2 hours ago',
      type: 'warning'
    },
    {
      title: 'High-risk user identified',
      description: 'User ID: 12345 showing unusual spending patterns',
      time: '4 hours ago',
      type: 'error'
    },
    {
      title: 'Case resolved',
      description: 'Fraud case FC-2024-000 has been successfully resolved',
      time: '6 hours ago',
      type: 'success'
    },
    {
      title: 'System alert',
      description: 'Multiple failed login attempts detected',
      time: '1 day ago',
      type: 'info'
    }
  ];

  return (
    <div style={{ padding: '0 24px', background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: '-24px -24px 24px -24px',
        padding: '40px 24px',
        borderRadius: '0 0 16px 16px'
      }}>
        <h1 style={{ 
          color: 'white', 
          margin: 0, 
          fontSize: '32px', 
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          🛡️ Fraud Detection Dashboard
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: '8px 0 0 0', fontSize: '16px' }}>
          Real-time monitoring and fraud prevention system
        </p>
      </div>

      {/* Stats Cards */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card 
              loading={loading}
              bordered={false}
              style={{ 
                borderRadius: 16,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                background: 'white',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ 
                background: stat.bgColor,
                margin: '-24px -24px 16px -24px',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ fontSize: 32, color: stat.color }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {stat.trend.direction === 'up' ? 
                    <ArrowUpOutlined style={{ color: stat.trend.isGood ? '#52c41a' : '#ff4d4f' }} /> :
                    <ArrowDownOutlined style={{ color: stat.trend.isGood ? '#52c41a' : '#ff4d4f' }} />
                  }
                  <span style={{ 
                    color: stat.trend.isGood ? '#52c41a' : '#ff4d4f',
                    fontSize: 14,
                    fontWeight: 600
                  }}>
                    {stat.trend.percentage}%
                  </span>
                </div>
              </div>
              
              <Statistic
                title={stat.title}
                value={stat.value}
                valueStyle={{ 
                  fontSize: 36, 
                  fontWeight: 700, 
                  color: stat.color,
                  lineHeight: 1
                }}
                suffix={<span style={{ fontSize: 16, color: '#666' }}>cases</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Row */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} lg={16}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <AlertOutlined style={{ color: '#1890ff' }} />
                <span>Fraud Cases Trend</span>
              </div>
            }
            bordered={false}
            style={{ 
              borderRadius: 16,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={fraudTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: 8, 
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="cases" 
                  stroke="#ff4d4f" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#ff4d4f' }}
                  name="New Cases"
                />
                <Line 
                  type="monotone" 
                  dataKey="resolved" 
                  stroke="#52c41a" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#52c41a' }}
                  name="Resolved Cases"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <SafetyOutlined style={{ color: '#1890ff' }} />
                <span>Risk Distribution</span>
              </div>
            }
            bordered={false}
            style={{ 
              borderRadius: 16,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}: {name?: string, value?: number}) => `${name ?? ''}: ${value ?? 0}%`}
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Bottom Row */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ExclamationCircleOutlined style={{ color: '#1890ff' }} />
                  <span>Recent Fraud Cases</span>
                </div>
                <Button type="primary" size="small">
                  View All
                </Button>
              </div>
            }
            bordered={false}
            style={{ 
              borderRadius: 16,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <Table 
              dataSource={recentCases} 
              columns={caseColumns} 
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ClockCircleOutlined style={{ color: '#1890ff' }} />
                <span>Recent Activity</span>
              </div>
            }
            bordered={false}
            style={{ 
              borderRadius: 16,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <List
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ marginTop: 2 }}>
                        {item.type === 'warning' && <WarningOutlined style={{ color: '#faad14' }} />}
                        {item.type === 'error' && <AlertOutlined style={{ color: '#ff4d4f' }} />}
                        {item.type === 'success' && <CheckCircleOutlined style={{ color: '#52c41a' }} />}
                        {item.type === 'info' && <ExclamationCircleOutlined style={{ color: '#1890ff' }} />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, color: '#262626', marginBottom: 4 }}>
                          {item.title}
                        </div>
                        <div style={{ color: '#666', fontSize: 13, marginBottom: 4 }}>
                          {item.description}
                        </div>
                        <div style={{ color: '#999', fontSize: 12 }}>
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row style={{ marginTop: 32, marginBottom: 24 }}>
        <Col span={24}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <SafetyOutlined style={{ color: '#1890ff' }} />
                <span>Quick Actions</span>
              </div>
            }
            bordered={false}
            style={{ 
              borderRadius: 16,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Button 
                type="primary" 
                size="large"
                icon={<AlertOutlined />}
                style={{ 
                  borderRadius: 8,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }}
              >
                Review Flagged Cases
              </Button>
              <Button 
                size="large"
                icon={<UserDeleteOutlined />}
                style={{ borderRadius: 8 }}
              >
                Investigate High-Risk Users
              </Button>
              <Button 
                size="large"
                icon={<ExclamationCircleOutlined />}
                style={{ borderRadius: 8 }}
              >
                Analyze Claims
              </Button>
              <Button 
                size="large"
                icon={<ShopOutlined />}
                style={{ borderRadius: 8 }}
              >
                Check Listings
              </Button>
            </div>
          </Card>
        </Col>
>>>>>>> dashboard
      </Row>
    </div>
  );
};

export default Dashboard;