import React, { useEffect, useState } from "react";
import { Table, Tag, Spin, message } from "antd";
import axios from "axios";

interface Listing {
  key: string;
  name: string;
  seller: string;
  location: string;
  flag: string;
}

const MarketplaceListings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 🔹 Fetch suspicious marketplace listings
  const fetchListings = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/listings");
      const data = response.data.map((l: any, index: number) => ({
        key: index.toString(),
        name: l.name,
        seller: l.seller,
        location: l.location,
        flag: l.flag,
      }));
      setListings(data);
    } catch (error) {
      message.error("Failed to fetch marketplace listings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const columns = [
    { title: "Listing",dataIndex: "name", key: "name", },
    { title: "Seller",dataIndex: "seller", key: "seller",},
    { title: "Location", dataIndex: "location",key: "location",},
    { title: "Flag", dataIndex: "flag", key: "flag",
      render: (flag: string) => (
        <Tag color={flag.includes("Duplicate") ? "orange" : "red"}>
          {flag}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <h2>Suspicious Marketplace Listings</h2>
      {loading ? (<Spin size="large" /> ) : (<Table columns={columns} dataSource={listings} pagination={false} />
      )}
    </div>
  );
};

export default MarketplaceListings;
