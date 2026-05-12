"use client";

import { useState } from "react";

import {
  LayoutDashboard,
  Building2,
  Users,
  ClipboardList,
  Home,
  BedDouble,
  MapPin,
  Search,
  TrendingUp,
  Plus
} from "lucide-react";

export default function HomePage() {
  const [activeView, setActiveView] = useState("dashboard");

  const stats = [
    {
      title: "Total Buyers",
      value: 248,
      icon: Users
    },
    {
      title: "Total Sellers",
      value: 112,
      icon: Home
    },
    {
      title: "Matches",
      value: 89,
      icon: TrendingUp
    }
  ];

  const registry = [
    {
      id: 1,
      type: "Apartment",
      price: "$320,000",
      sqm: "95m²",
      rooms: 3,
      floors: 5,
      district: "Downtown",
      address: "12 Main Street"
    },
    {
      id: 2,
      type: "House",
      price: "$540,000",
      sqm: "180m²",
      rooms: 5,
      floors: 2,
      district: "West Side",
      address: "48 Green Avenue"
    }
  ];

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard
    },
    {
      id: "objects",
      label: "Objects",
      icon: Building2
    },
    {
      id: "clients",
      label: "Clients",
      icon: Users
    },
    {
      id: "registry",
      label: "Registry",
      icon: ClipboardList
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-border min-h-screen p-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            EstateFlow
          </h1>

          <p className="text-slate-500 mt-1">
            Professional CRM
          </p>
        </div>

        <div className="mt-10 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeView === item.id
                    ? "bg-primary text-white shadow-soft"
                    : "hover:bg-slate-100 text-slate-600"
                }`}
              >
                <Icon size={20} />
                {item.label}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-8">
        {activeView === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="bg-white rounded-3xl p-6 shadow-soft border border-border"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-500">
                          {stat.title}
                        </p>

                        <h3 className="text-4xl font-bold mt-3">
                          {stat.value}
                        </h3>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                        <Icon
                          className="text-primary"
                          size={28}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeView === "objects" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Add Object
            </h2>

            <div className="bg-white rounded-3xl p-6 shadow-soft border border-border grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Type" />
              <Input label="Price" />
              <Input label="SqM" />
              <Input label="Rooms" />
              <Input label="Floors" />
              <Input label="District" />

              <div className="md:col-span-2">
                <Input label="Address" />
              </div>

              <button className="bg-primary text-white px-6 py-4 rounded-2xl flex items-center gap-3 w-fit">
                <Plus size={20} />
                Add Object
              </button>
            </div>
          </div>
        )}

        {activeView === "clients" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Add Client
            </h2>

            <div className="bg-white rounded-3xl p-6 shadow-soft border border-border grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Type" />
              <Input label="Budget" />
              <Input label="Rooms" />
              <Input label="SqM" />
              <Input label="Floors" />
              <Input label="District" />

              <div className="md:col-span-2">
                <Input label="Address" />
              </div>

              <button className="bg-primary text-white px-6 py-4 rounded-2xl flex items-center gap-3 w-fit">
                <Plus size={20} />
                Add Client
              </button>
            </div>
          </div>
        )}

        {activeView === "registry" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Registry
            </h2>

            <div className="bg-white rounded-3xl p-4 shadow-soft border border-border flex gap-4 items-center">
              <Search className="text-slate-400" size={20} />

              <input
                type="text"
                placeholder="Search properties..."
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {registry.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 shadow-soft border border-border"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.type}
                      </h3>

                      <p className="text-primary font-semibold mt-2 text-lg">
                        {item.price}
                      </p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-2xl">
                      <Home
                        className="text-primary"
                        size={24}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Info
                      icon={<Building2 size={18} />}
                      label="SqM"
                      value={item.sqm}
                    />

                    <Info
                      icon={<BedDouble size={18} />}
                      label="Rooms"
                      value={item.rooms}
                    />

                    <Info
                      icon={<TrendingUp size={18} />}
                      label="Floors"
                      value={item.floors}
                    />

                    <Info
                      icon={<MapPin size={18} />}
                      label="District"
                      value={item.district}
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-slate-500">
                      Address
                    </p>

                    <p className="font-medium mt-1">
                      {item.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full px-4 py-4 rounded-2xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4">
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        {icon}
        {label}
      </div>

      <p className="text-lg font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}
