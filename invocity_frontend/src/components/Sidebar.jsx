import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  FiShoppingCart,
  FiFileText,
  FiCreditCard,
  FiSettings,
  FiBox,
  FiUsers,
  FiTruck,
  FiPieChart,
  FiShoppingBag,
  FiFolder,
  FiVideo,
  FiMessageCircle,
} from "react-icons/fi";

const SidebarItem = ({ name, icon, children, setActiveItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setActiveItem(name);
  };

  return (
    <div className="sidebar">
      <div
        // to={`${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="sidebar-item"
        onClick={handleClick}
      >
        <div className="sidebar-item-icon">{icon}</div>
        <div className="sidebar-item-name">{name}</div>
        {children && (
          <div className="sidebar-item-chevron">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        )}
      </div>
      {isExpanded && <div className="sidebar-child space-y-2">{children}</div>}
    </div>
  );
};

const Sidebar = ({ setActiveItem }) => {
  return (
    <div className="h-screen item-child">
      <SidebarItem
        name="Sales"
        icon={<FiShoppingCart />}
        setActiveItem={setActiveItem}
      >
        <div>Invoices</div>
        <div>Credit Notes</div>
        <div>E-Invoices</div>
        <div>Subscriptions</div>
      </SidebarItem>

      <SidebarItem
        name="Purchases"
        icon={<FiShoppingBag />}
        setActiveItem={setActiveItem}
      >
        <div>Purchases</div>
        <div>Purchase Orders</div>
        <div>Debit Notes</div>
      </SidebarItem>

      <SidebarItem
        name="Quotations"
        icon={<FiFileText />}
        setActiveItem={setActiveItem}
      >
        <div>Quotations</div>
        <div>Pro Forma Invoices</div>
        <div>Delivery Challans</div>
      </SidebarItem>

      <SidebarItem
        name="Expenses+"
        icon={<FiCreditCard />}
        setActiveItem={setActiveItem}
      >
        <div>Expenses</div>
        <div>Indirect Income</div>
      </SidebarItem>

      <SidebarItem
        name="Products & Services"
        icon={<FiBox />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Inventory"
        icon={<FiFolder />}
        setActiveItem={setActiveItem}
      >
        <div>Warehouses</div>
        <div>Timeline</div>
      </SidebarItem>

      <SidebarItem
        name="Payments"
        icon={<FiCreditCard />}
        setActiveItem={setActiveItem}
      >
        <div>Timeline</div>
        <div>Settlements</div>
        <div>Payment Links</div>
        <div>Journals</div>
      </SidebarItem>

      <SidebarItem
        name="Customers"
        icon={<FiUsers />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Vendors"
        icon={<FiTruck />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Insights"
        icon={<FiPieChart />}
        setActiveItem={setActiveItem}
      >
        {/* <div className="text-xs text-white bg-blue-500 px-2 py-1 rounded inline-block ml-1">
          NEW
        </div>
        <Badge bg="primary" className="ms-2">
          NEW
        </Badge> */}
      </SidebarItem>

      <SidebarItem
        name="Reports"
        icon={<FiFileText />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="E-way Bills"
        icon={<FiTruck />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Online Store"
        icon={<FiShoppingCart />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="My Drive"
        icon={<FiFolder />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Settings"
        icon={<FiSettings />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Tutorials"
        icon={<FiVideo />}
        setActiveItem={setActiveItem}
      />

      <SidebarItem
        name="Feedback"
        icon={<FiMessageCircle />}
        setActiveItem={setActiveItem}
      />
    </div>
  );
};
export default Sidebar;
