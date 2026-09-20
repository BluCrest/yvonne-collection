"use client";

import { useState } from "react";

interface Subscriber {
  id: string;
  email: string;
  name: string;
  joined: string;
  status: "active" | "unsubscribed";
}

// No seed data — subscribers are added at runtime only.
// Never commit real-looking PII to the client bundle (privacy-policy §1).
const initialSubscribers: Subscriber[] = [];

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(initialSubscribers);
  const [showAdd, setShowAdd] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  const activeCount = subscribers.filter((s) => s.status === "active").length;
  const filtered = subscribers.filter(
    (s) =>
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail) return;
    const sub: Subscriber = {
      id: String(Date.now()),
      email: newEmail,
      name: newName || newEmail.split("@")[0],
      joined: new Date().toISOString().split("T")[0],
      status: "active",
    };
    setSubscribers([sub, ...subscribers]);
    setNewEmail("");
    setNewName("");
    setShowAdd(false);
  };

  const handleDelete = (id: string) => {
    setSubscribers(subscribers.filter((s) => s.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setSubscribers(
      subscribers.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "active" ? "unsubscribed" : "active" }
          : s
      )
    );
  };

  const handleExport = () => {
    const csv = ["Email,Name,Joined,Status"]
      .concat(subscribers.map((s) => `${s.email},${s.name},${s.joined},${s.status}`))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "yvonne-subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyEmails = () => {
    const active = subscribers
      .filter((s) => s.status === "active")
      .map((s) => s.email)
      .join(", ");
    navigator.clipboard.writeText(active);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1
            className="text-2xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Newsletter
          </h1>
          <p className="text-graphite text-sm mt-1">
            {activeCount} active subscribers
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopyEmails}
            className="px-4 py-2 text-xs tracking-wider uppercase border border-gray-200 text-graphite rounded-lg hover:border-gold hover:text-gold transition-all"
          >
            {copied ? "Copied!" : "Copy Emails"}
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 text-xs tracking-wider uppercase border border-gray-200 text-graphite rounded-lg hover:border-gold hover:text-gold transition-all"
          >
            Export CSV
          </button>
          <button
            onClick={() => setShowAdd(true)}
            className="px-4 py-2 text-xs tracking-wider uppercase bg-gold text-charcoal rounded-lg hover:bg-gold-dark transition-colors font-medium"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Add Form */}
      {showAdd && (
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3
            className="text-sm font-semibold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Add New Subscriber
          </h3>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name (optional)"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-5 py-2.5 bg-gold text-charcoal text-xs tracking-wider uppercase rounded-lg hover:bg-gold-dark transition-colors font-medium"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAdd(false)}
                className="px-5 py-2.5 border border-gray-200 text-graphite text-xs tracking-wider uppercase rounded-lg hover:border-gold hover:text-gold transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 text-[10px] text-graphite uppercase tracking-wider font-medium">
                  Subscriber
                </th>
                <th className="text-left px-5 py-3 text-[10px] text-graphite uppercase tracking-wider font-medium hidden sm:table-cell">
                  Email
                </th>
                <th className="text-left px-5 py-3 text-[10px] text-graphite uppercase tracking-wider font-medium hidden md:table-cell">
                  Joined
                </th>
                <th className="text-left px-5 py-3 text-[10px] text-graphite uppercase tracking-wider font-medium">
                  Status
                </th>
                <th className="text-right px-5 py-3 text-[10px] text-graphite uppercase tracking-wider font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((sub) => (
                <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <span className="text-gold text-xs font-semibold">
                          {sub.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">{sub.name}</p>
                        <p className="text-xs text-graphite sm:hidden">{sub.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <p className="text-sm text-graphite">{sub.email}</p>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <p className="text-sm text-graphite">{sub.joined}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block px-2.5 py-1 text-[10px] tracking-wider uppercase rounded-full ${
                        sub.status === "active"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleToggleStatus(sub.id)}
                        className="text-xs text-graphite hover:text-gold transition-colors"
                      >
                        {sub.status === "active" ? "Unsub" : "Reactivate"}
                      </button>
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="text-xs text-graphite hover:text-red-500 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="text-sm text-graphite">No subscribers found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
