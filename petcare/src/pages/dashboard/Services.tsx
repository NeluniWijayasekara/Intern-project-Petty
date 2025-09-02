import React, { useState, useEffect } from "react";
import { Table, Button, Input, Select, Tag, message, Spin } from "antd";

interface Service {
  key: string;
  name: string;
  type: string;
  location: string;
  status: string;
}

const { Option } = Select;

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");

  // 🔹 Fetch services from API (currently empty placeholder)
  useEffect(() => {
    setLoading(true);

    // Replace this with your API call
    setTimeout(() => {
      setServices([]); // no dummy data
      setLoading(false);
    }, 500);
  }, []);

  // 🔹 Add new service
  const handleAddService = () => {
    if (!serviceName || !serviceType || !serviceLocation) {
      message.warning("Please fill all fields");
      return;
    }

    const newService: Service = {
      key: (services.length + 1).toString(),
      name: serviceName,
      type: serviceType,
      location: serviceLocation,
      status: "Pending",
    };

    setServices([...services, newService]);
    setServiceName("");
    setServiceType("");
    setServiceLocation("");
    message.success("Service added successfully!");
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Location", dataIndex: "location", key: "location" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "orange"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div>
      {/* Add New Service */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Input
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          style={{ width: "200px" }}
        />

        <Select
          placeholder="Select Type"
          value={serviceType || undefined}
          onChange={(value) => setServiceType(value)}
          style={{ width: "200px" }}
        >
          <Option value="Vet">Vet</Option>
          <Option value="Groomer">Groomer</Option>
          <Option value="Trainer">Trainer</Option>
          <Option value="Insurance">Insurance</Option>
        </Select>

        <Input
          placeholder="Location"
          value={serviceLocation}
          onChange={(e) => setServiceLocation(e.target.value)}
          style={{ width: "200px" }}
        />

        <Button type="primary" onClick={handleAddService}>
          Add Service
        </Button>
      </div>

      {/* Manage Services */}
      <h3>Manage Services</h3>
      {loading ? (
        <Spin tip="Loading services..." />
      ) : (
        <Table columns={columns} dataSource={services} pagination={false} />
      )}
    </div>
  );
};

export default Services;
