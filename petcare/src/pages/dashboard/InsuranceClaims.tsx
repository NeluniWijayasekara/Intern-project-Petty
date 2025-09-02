import React, { useEffect, useState } from "react";
import { Table, Tag, Spin, message } from "antd";
import axios from "axios";

interface Claim {
  key: string;
  claimId: string;
  pet: string;
  owner: string;
  flag: "Duplicate" | "Suspicious" | "Approved";
}

const InsuranceClaims: React.FC = () => {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 🔹 Fetch insurance claims from backend
  const fetchClaims = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/claims");
      const data = response.data.map((c: any, index: number) => ({
        key: index.toString(),
        claimId: c.claimId,
        pet: c.pet,
        owner: c.owner,
        flag: c.flag,
      }));
      setClaims(data);
    } catch (error) {
      message.error("Failed to fetch claims");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  const columns = [
    {
      title: "Claim ID",
      dataIndex: "claimId",
      key: "claimId",
    },
    {
      title: "Pet",
      dataIndex: "pet",
      key: "pet",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Flag",
      dataIndex: "flag",
      key: "flag",
      render: (flag: Claim["flag"]) => {
        let color = "blue";
        if (flag === "Duplicate") color = "red";
        else if (flag === "Suspicious") color = "orange";
        else if (flag === "Approved") color = "green";
        return <Tag color={color}>{flag}</Tag>;
      },
    },
  ];

  return (
    <div>
      <h2>Insurance Fraud Monitoring</h2>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table columns={columns} dataSource={claims} pagination={false} />
      )}
    </div>
  );
};

export default InsuranceClaims;
