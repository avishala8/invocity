import React from "react";
import { FiSettings } from "react-icons/fi";

const Sales = () => {
  return (
    <div className="flex h-screen sales-container">
      <div className="sidebar-item-border">
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold ">
                Sales <span className="text-pink-500 ml-2">▶</span>
              </h1>
            </div>

            <div className="space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded ">
                <FiSettings className="mr-2" />
                Document Settings
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded">
                POS Billing
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                + Create Invoice
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/400"
                alt="Illustration"
                className="w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Creating invoices lightning fast.
              </h2>
              <p className="text-gray-600 mb-4">
                Get a detailed summary of all your sales transactions.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span>
                  Create invoices in 10 seconds & share them with customers
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span>
                  Discover templates that's perfect for your business
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span>
                  Keep track of your day-to-day transactions
                </li>
              </ul>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                + Create your first invoice
              </button>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center cursor-pointer">
                  <span>🎧</span>
                  <span className="ml-2">Talk to a specialist</span>
                </div>
                <div className="flex items-center cursor-pointer">
                  <span>▶</span>
                  <span className="ml-2">Watch a quick video here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
