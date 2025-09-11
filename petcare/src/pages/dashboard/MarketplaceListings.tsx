import React from "react";
import { Button } from "antd";

const MarketplaceListingsHeader: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
      <h2 style={{ margin: 0 }}>Marketplace Listings</h2>
      <Button type="primary" onClick={onAdd}>
        + Add Product
      </Button>
    </div>
  );
};

export default MarketplaceListingsHeader;
