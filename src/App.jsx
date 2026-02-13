import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Activity,
  Pill,
  Stethoscope,
  FileText,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Building2,
  TrendingUp,
  Download,
  ShieldCheck,
  HeartPulse,
  AlertTriangle,
  ArrowUpRight,
  X,
  Printer,
  Share2,
  Info,
  ChevronRight,
  ArrowLeft,
  PieChart,
  Users,
  BedDouble,
  IndianRupee,
  Briefcase,
  ClipboardList,
  Truck,
  Landmark,
  Target,
  FileBarChart,
  LayoutGrid,
  Server,
  Smile,
  Baby,
  Eye,
  FileDown,
  Filter,
  Search,
  Clock,
  ThumbsUp,
  Database,
  Lock,
  FileCheck,
  ChevronDown,
  Bell,
  Menu
} from 'lucide-react';

// --- Sub-components ---

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: 'bg-teal-700 border-teal-600 shadow-teal-900/20',
    info: 'bg-blue-700 border-blue-600 shadow-blue-900/20',
    warning: 'bg-amber-600 border-amber-500 shadow-amber-900/20',
    error: 'bg-red-800 border-red-700 shadow-red-900/20'
  };

  return (
    <div className={`fixed bottom-6 right-6 ${styles[type] || 'bg-slate-800'} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center animate-in slide-in-from-right-10 z-50 border border-white/10 backdrop-blur-md`}>
      {type === 'success' && <CheckCircle2 className="w-5 h-5 mr-3 text-white" />}
      {type === 'warning' && <AlertTriangle className="w-5 h-5 mr-3 text-white" />}
      {type === 'info' && <Activity className="w-5 h-5 mr-3 text-white" />}
      <span className="text-sm font-semibold tracking-wide">{message}</span>
    </div>
  );
};

const InvoiceModal = ({ invoice, onClose }) => {
  if (!invoice) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-200 transform transition-all scale-100">
        <div className="bg-[#0f172a] p-6 flex justify-between items-center border-b border-slate-700">
          <div className="flex items-center text-white">
            <div className="p-2 bg-white/10 rounded-lg mr-3">
              <FileText className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <span className="font-bold text-lg block tracking-tight">Invoice Details</span>
              <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">{invoice.id || 'INV-Generated'}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex justify-between items-start border-b border-slate-100 pb-6">
            <div className="w-3/4">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Item Description</p>
              <h3 className="font-bold text-[#0f172a] text-xl leading-snug">{invoice.item}</h3>
              <div className="flex items-center mt-3 gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200 font-mono">Batch: {invoice.batch}</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200 font-mono">Code: 004456</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Period</p>
              <span className="font-bold text-slate-800 bg-slate-50 px-3 py-1.5 rounded-lg text-sm border border-slate-200 block">{invoice.month}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Agreed Margin</p>
              <p className="font-bold text-slate-800 text-xl">4.00%</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <p className="text-[10px] text-red-700 font-bold uppercase tracking-wider mb-1">Charged Margin</p>
              <p className="font-bold text-red-700 text-xl">{invoice.margin || '5.20'}%</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <p className="text-[10px] text-red-700 font-bold uppercase tracking-wider mb-1">Excess Payout</p>
              <p className="font-bold text-red-700 text-xl">{invoice.excess}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-600 leading-relaxed">
              This invoice has been flagged for audit. The charged margin exceeds the contractual limit of 4%. Recommended action is to withhold payment of the excess amount and notify the vendor.
            </p>
          </div>

          <div className="flex space-x-4 pt-2">
            <button className="flex-1 bg-[#0f172a] text-white py-3 rounded-lg text-sm font-bold hover:bg-[#1e293b] shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center">
              <Printer className="w-4 h-4 mr-2" /> Print Record
            </button>
            <button className="flex-1 bg-white border border-slate-300 text-slate-700 py-3 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
              <Share2 className="w-4 h-4 mr-2" /> Share Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper for Curve Chart ---
const SvgCurveChart = ({ data, color = "#7f1d1d", height = 60 }) => {
  if (!data || data.length === 0) return null;
  const maxVal = Math.max(...data.map(d => d.amount));
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - (d.amount / maxVal) * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`M 0 100 L ${points} L 100 100 Z`}
        fill={`url(#gradient-${color})`}
        stroke="none"
      />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((d, i) => (
        <circle
          key={i}
          cx={(i / (data.length - 1)) * 100}
          cy={100 - (d.amount / maxVal) * 100}
          r="2.5"
          fill="white"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="hover:r-4 transition-all cursor-pointer"
        />
      ))}
    </svg>
  );
};

// --- Details View Component (Now integrated) ---
const DetailsView = ({ onBack }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock detailed data
  const allDetailedData = Array.from({ length: 50 }, (_, i) => ({
    id: `TXN-${2025000 + i}`,
    date: `2025-0${Math.floor(i / 10) + 4}-${(i % 28) + 1}`,
    category: i % 3 === 0 ? 'Pharmacy Procurement' : i % 3 === 1 ? 'Operational Expense' : 'Consultant Payout',
    description: i % 3 === 0 ? `Bulk Purchase Order #${500 + i} - MedMart` : i % 3 === 1 ? `Utility Bill - Unit ${i % 4 + 1}` : `Professional Fees - Consultant ID-${100 + i}`,
    amount: (Math.random() * 50000 + 5000).toFixed(2),
    status: i % 5 === 0 ? 'Pending' : 'Cleared',
    type: i % 2 === 0 ? 'Debit' : 'Credit'
  }));

  // Filtering Logic
  const filteredData = allDetailedData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-800 animate-in slide-in-from-right duration-500 flex flex-col w-full">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-20 shrink-0 shadow-sm">
        <div className="w-full px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="mr-6 p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 hover:text-[#0f172a] border border-transparent hover:border-slate-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-[#0f172a] flex items-center tracking-tight">
                  <div className="bg-teal-50 p-2 rounded-lg mr-3 border border-teal-100">
                    <FileText className="w-5 h-5 text-teal-700" />
                  </div>
                  Consolidated Cash Flow Details
                </h1>
                <p className="text-sm text-slate-500 mt-1 ml-1">Reporting Period: <span className="font-semibold text-slate-700">April 2025 - October 2025</span></p>
              </div>
            </div>
            <div className="flex space-x-4 relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center px-4 py-2.5 border rounded-lg text-sm font-semibold transition-all shadow-sm ${filterOpen || selectedCategory !== 'All' || selectedStatus !== 'All'
                    ? 'bg-slate-100 border-slate-300 text-slate-900'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <Filter className="w-4 h-4 mr-2" /> Filter
                {(selectedCategory !== 'All' || selectedStatus !== 'All') && (
                  <span className="ml-2 w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
                )}
              </button>

              {/* Filter Dropdown */}
              {filterOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-5 z-30 animate-in fade-in slide-in-from-top-2 ring-1 ring-black/5">
                  <div className="mb-5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="All">All Categories</option>
                      <option value="Pharmacy Procurement">Pharmacy Procurement</option>
                      <option value="Operational Expense">Operational Expense</option>
                      <option value="Consultant Payout">Consultant Payout</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status</label>
                    <div className="flex space-x-2">
                      {['All', 'Cleared', 'Pending'].map(status => (
                        <button
                          key={status}
                          onClick={() => setSelectedStatus(status)}
                          className={`flex-1 py-2 text-xs rounded-lg border font-medium transition-all ${selectedStatus === status
                              ? 'bg-teal-50 border-teal-200 text-teal-800 shadow-sm'
                              : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setSelectedStatus('All');
                      }}
                      className="text-xs font-semibold text-slate-500 hover:text-teal-700 mr-4 transition-colors"
                    >
                      Reset Defaults
                    </button>
                    <button
                      onClick={() => setFilterOpen(false)}
                      className="text-xs font-bold bg-[#0f172a] text-white px-4 py-2 rounded-lg hover:bg-[#1e293b] transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}

              <button className="flex items-center px-5 py-2.5 bg-[#0f172a] text-white rounded-lg text-sm font-semibold hover:bg-[#1e293b] hover:shadow-lg transition-all shadow-slate-900/20">
                <Download className="w-4 h-4 mr-2" /> Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto w-full px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"><ArrowUpRight className="w-16 h-16 text-emerald-600" /></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Inflow</p>
            <div className="flex items-baseline">
              <span className="text-slate-400 text-lg mr-1 font-medium">₹</span>
              <p className="text-3xl font-black text-emerald-700">4.2 Cr</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"><ArrowUpRight className="w-16 h-16 text-red-600 rotate-180" /></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Outflow</p>
            <div className="flex items-baseline">
              <span className="text-slate-400 text-lg mr-1 font-medium">₹</span>
              <p className="text-3xl font-black text-red-700">3.8 Cr</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-teal-500 to-emerald-500"></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Net Cash Flow</p>
            <p className="text-3xl font-black text-[#0f172a]">+₹40 L</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Pending Clearance</p>
            <div className="flex items-center">
              <p className="text-3xl font-black text-amber-600 mr-2">12</p>
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full uppercase">Transactions</span>
            </div>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50 shrink-0">
            <div className="relative max-w-lg w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 sm:text-sm transition-all shadow-sm"
                placeholder="Search by transaction ID, category, or description..."
              />
            </div>
            <span className="text-sm font-semibold text-slate-600 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
              Showing <span className="text-teal-700 font-bold">{filteredData.length}</span> / {allDetailedData.length} Records
            </span>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50 sticky top-0 z-10 shadow-sm">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">ID</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Description</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Type</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                  <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-50">
                {filteredData.length > 0 ? (
                  filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0f172a] font-mono group-hover:text-teal-700 transition-colors">{row.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">{row.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${row.category === 'Pharmacy Procurement' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            row.category === 'Consultant Payout' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                              'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-sm truncate font-medium" title={row.description}>{row.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`font-bold ${row.type === 'Credit' ? 'text-emerald-700' : 'text-slate-400'}`}>
                          {row.type}
                        </span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-bold font-mono ${row.type === 'Credit' ? 'text-emerald-700' : 'text-[#0f172a]'}`}>
                        {row.type === 'Debit' ? '-' : '+'}₹{Number(row.amount).toLocaleString('en-IN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                        {row.status === 'Cleared' ? (
                          <div className="flex items-center justify-center">
                            <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span className="text-xs font-bold uppercase">Cleared</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <div className="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span className="text-xs font-bold uppercase">Pending</span>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-24 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-slate-50 p-6 rounded-full mb-4 border border-slate-100">
                          <Search className="w-10 h-10 text-slate-300" />
                        </div>
                        <p className="text-lg font-bold text-slate-700">No transactions found</p>
                        <p className="text-sm text-slate-400 mt-1 max-w-sm">We couldn't find any records matching your current filters or search term.</p>
                        <button
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('All');
                            setSelectedStatus('All');
                          }}
                          className="mt-6 text-teal-700 bg-teal-50 border border-teal-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-100 transition-colors"
                        >
                          Clear all filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between shrink-0">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Showing <span className="font-bold text-slate-800">{filteredData.length > 0 ? 1 : 0}</span> to <span className="font-bold text-slate-800">{filteredData.length > 50 ? 50 : filteredData.length}</span> of <span className="font-bold text-slate-800">{allDetailedData.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-lg shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-3 py-2 rounded-l-lg border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                    Previous
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-[#0f172a] text-white text-sm font-bold">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-slate-50 text-sm font-medium text-slate-700">
                    ...
                  </span>
                  <button className="relative inline-flex items-center px-3 py-2 rounded-r-lg border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [activeTab, setActiveTab] = useState('mis');
  const [accountingStandard, setAccountingStandard] = useState('IGAAP');
  const [isGeneratingCF, setIsGeneratingCF] = useState(false);
  const [cfGenerated, setCfGenerated] = useState(false);
  const [showCFDetails, setShowCFDetails] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'details'

  // UI State
  const [notification, setNotification] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Metrics State
  const [metricsType, setMetricsType] = useState('financial'); // 'financial' or 'operational'

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const handleStandardChange = (standard) => {
    if (standard === accountingStandard) return;
    setAccountingStandard(standard);
    showNotification(`Recalculating metrics for ${standard === 'INDAS' ? 'IND AS (IPO)' : 'Indian GAAP'}...`, 'info');
  };

  const handleGenerateCF = () => {
    // Reset states to allow re-generation
    setCfGenerated(false);
    setShowCFDetails(false);
    setIsGeneratingCF(true);

    setTimeout(() => {
      setIsGeneratingCF(false);
      setCfGenerated(true);
      showNotification('Consolidated Cash Flow statement generated successfully.', 'success');
    }, 1500);
  };

  const handleExportCF = () => {
    showNotification('Downloading "CX_Partners_CF_Format.xlsx"...', 'success');
  };

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  // --- Departments and Doctors Data ---
  const departmentsData = [
    { name: "Critical Care Medicine", doctors: ["Dr. Sarah Thomas", "Dr. Rahul Krishnan"] },
    { name: "Obstetrics and Gynaecology", doctors: ["Dr. Lakshmi Nair", "Dr. Priya Varghese", "Dr. Anita George"] },
    { name: "Pediatrics and Neonatology", doctors: ["Dr. Suresh Kumar", "Dr. Meera Chandran"] },
    { name: "Paediatric Urology", doctors: ["Dr. Anand Menon"] },
    { name: "Orthopaedics", doctors: ["Dr. Vikram Reddy", "Dr. Joseph Kurian"] },
    { name: "Urology And Andrology", doctors: ["Dr. Harish Pillai"] },
    { name: "Ophthalmology", doctors: ["Dr. Susan Jacob"] },
    { name: "General Surgery", doctors: ["Dr. Mathew Philip", "Dr. Thomas Zachariah"] },
    { name: "Cardiology", doctors: ["Dr. Vijayaraghavan", "Dr. Deepa S"] },
    { name: "Endocrinology", doctors: ["Dr. Ravi Shankar"] },
    { name: "Psychology", doctors: ["Dr. Neha Gupta"] },
    { name: "Respiratory Medicine", doctors: ["Dr. George Samuel"] },
    { name: "Fetal Medicine", doctors: ["Dr. Renu Rajan"] },
    { name: "Neurology", doctors: ["Dr. Krishnadas"] },
    { name: "Dermatology", doctors: ["Dr. Aparna Balan"] },
    { name: "Gastroenterology", doctors: ["Dr. Manoj Abraham"] },
    { name: "Oncology", doctors: ["Dr. Sreejith G"] },
    { name: "ENT", doctors: ["Dr. Vinod V"] }
  ];

  // --- Real Data derived directly from the analysis files (SUMMARY.csv) ---
  const monthlyLeakage = [
    { month: 'Apr', amount: 3.02, color: 'bg-rose-200' }, // 302,498
    { month: 'May', amount: 3.61, color: 'bg-rose-200' }, // 361,773
    { month: 'Jun', amount: 19.36, color: 'bg-rose-500' }, // 1,936,996
    { month: 'Jul', amount: 11.26, color: 'bg-rose-400' }, // 1,126,163
    { month: 'Aug', amount: 27.45, color: 'bg-red-700' }, // 2,745,974 - Darker red for peak
    { month: 'Sep', amount: 4.32, color: 'bg-red-300' }, // 432,403
    { month: 'Oct', amount: 15.41, color: 'bg-red-500' }, // 1,541,420
    { month: 'Nov', amount: 0, color: 'bg-slate-200' },   // No data in summary
    { month: 'Dec', amount: 0, color: 'bg-slate-200' },
  ];

  // Updated Violations Data with Margin % derived from EXCESS>30K.csv and Month files
  const violations = [
    { month: "Apr '25", item: "DUPHASTON 10MG TAB", batch: "SAVA5005", excess: "₹69,317", margin: "22.72", status: "CRITICAL", statusColor: "bg-red-100 text-red-800 border border-red-200" },
    { month: "May '25", item: "DUPHASTON 10MG TAB", batch: "SAVA5011", excess: "₹64,985", margin: "22.72", status: "CRITICAL", statusColor: "bg-red-100 text-red-800 border border-red-200" },
    { month: "May '25", item: "FOLISURGE 1200 IU", batch: "7070145", excess: "₹33,313", margin: "5.15", status: "HIGH RISK", statusColor: "bg-orange-100 text-orange-800 border border-orange-200" },
    { month: "Jun '25", item: "RECAGON 300IU", batch: "B120512", excess: "₹52,450", margin: "5.30", status: "CRITICAL", statusColor: "bg-red-100 text-red-800 border border-red-200" },
    { month: "Jul '25", item: "VISANNE 28 TAB", batch: "WEX9K3", excess: "₹1,59,053", margin: "4.85", status: "CRITICAL", statusColor: "bg-red-100 text-red-800 border border-red-200" },
    { month: "Jul '25", item: "REVERSEE INJ 100MG", batch: "1988039.", excess: "₹65,103", margin: "5.20", status: "CRITICAL", statusColor: "bg-red-100 text-red-800 border border-red-200" },
    { month: "Aug '25", item: "ZERODOL SP TAB", batch: "FND0725", excess: "₹32,480", margin: "5.30", status: "HIGH RISK", statusColor: "bg-orange-100 text-orange-800 border border-orange-200" },
    { month: "Sep '25", item: "ZERODOL TC TAB", batch: "0125008BH", excess: "₹28,020", margin: "4.51", status: "WARNING", statusColor: "bg-amber-50 text-amber-700 border border-amber-100" },
    { month: "Oct '25", item: "3M AVAGARD HANDRUB", batch: "R092506", excess: "₹35,999", margin: "4.17", status: "WARNING", statusColor: "bg-amber-50 text-amber-700 border border-amber-100" },
  ];

  // Mock data for the prototype
  const units = [
    { name: 'Unit 1 (HQ)', revenue: 12.5, ebitda: 3.2 },
    { name: 'Unit 2', revenue: 8.4, ebitda: 2.1 },
    { name: 'Unit 3', revenue: 5.2, ebitda: 1.1 },
    { name: 'Unit 4', revenue: 4.8, ebitda: 0.9 }
  ];

  // Extended Navigation Menu
  const navItems = [
    { id: 'mis', icon: BarChart3, label: 'Consolidated MIS', category: 'financial' },
    { id: 'financial_stmts', icon: FileBarChart, label: 'Financial Statements', category: 'financial' },
    { id: 'metrics', icon: PieChart, label: 'Performance Metrics', category: 'financial' },
    { id: 'payouts', icon: Stethoscope, label: 'Variable Pay Engine', category: 'hr' },
    { id: 'rcm', icon: Briefcase, label: 'Revenue Cycle (RCM)', category: 'financial' },
    { id: 'pharmacy', icon: Pill, label: 'MedMart Analysis', category: 'operations' },
    { id: 'inventory', icon: Truck, label: 'Inventory & Procurement', category: 'operations' },
    { id: 'ivf', icon: Activity, label: 'Clinical Ops & SOP', category: 'clinical' },
    { id: 'doctor_portal', icon: Users, label: 'Doctor Self-Service', category: 'clinical' },
    { id: 'assets', icon: Landmark, label: 'Capex & Assets', category: 'operations' },
    { id: 'budget', icon: Target, label: 'Budget vs Actuals', category: 'financial' },
    { id: 'ipo', icon: LayoutGrid, label: 'IPO Readiness', category: 'legal' },
    { id: 'audit', icon: ShieldCheck, label: 'Audit Trail', category: 'legal' },
    { id: 'vendor', icon: ClipboardList, label: 'Vendor Management', category: 'operations' },
    { id: 'system_health', icon: Server, label: 'System Health', category: 'tech' },
    { id: 'patient_exp', icon: Smile, label: 'Patient Experience', category: 'clinical' },
    { id: 'reports', icon: FileText, label: 'Reports Center', category: 'financial' }
  ];

  const renderSidebar = () => (
    <div className="w-64 bg-[#0f172a] text-slate-300 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto border-r border-slate-800 scrollbar-thin scrollbar-thumb-slate-700">
      <div className="p-6 bg-[#061a2e] flex flex-col items-center sticky top-0 z-10 border-b border-slate-800">
        <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-pink-600/30 overflow-hidden relative">
          {/* Custom Mother & Baby Composite Icon */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute left-2.5 top-2">
              <Users className="text-white w-6 h-6" />
            </div>
            <div className="absolute right-2.5 bottom-2.5">
              <Baby className="text-pink-200 w-4 h-4" />
            </div>
          </div>
        </div>
        <h1 className="text-white font-bold text-lg text-center leading-tight tracking-wide">Project 10</h1>
        <p className="text-xs text-pink-400 font-medium mt-1 uppercase tracking-wider">Financial Control</p>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  setSelectedReport(null);
                  setCurrentView('dashboard'); // Reset view on nav change
                }}
                className={`w-full flex items-center px-6 py-2.5 text-sm font-medium transition-all duration-200 ${activeTab === item.id
                    ? 'bg-white/10 text-pink-400 border-r-4 border-pink-500'
                    : 'hover:bg-white/5 hover:text-white'
                  }`}
              >
                <item.icon className={`w-4 h-4 mr-3 ${activeTab === item.id ? 'text-pink-400' : 'text-slate-400'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 text-xs text-slate-500 border-t border-slate-800 mt-auto bg-[#081e35]">
        <p>Tech Consultant Profile</p>
        <p className="mt-1">System Status: <span className="text-green-400 font-semibold">Live API</span></p>
      </div>
    </div>
  );

  const renderTopBar = () => (
    <div className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
      <h2 className="text-xl font-bold text-[#0a2540] capitalize flex items-center">
        <span className="w-2 h-6 bg-pink-600 rounded-full mr-3"></span>
        {activeTab.replace('_', ' ').replace('-', ' ')}
      </h2>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => handleStandardChange('IGAAP')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${accountingStandard === 'IGAAP' ? 'bg-white text-[#0a2540] shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            Indian GAAP
          </button>
          <button
            onClick={() => handleStandardChange('INDAS')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${accountingStandard === 'INDAS' ? 'bg-white text-pink-700 shadow-sm font-bold' : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            IND AS (IPO Ready)
          </button>
        </div>

        <button
          onClick={handleGenerateCF}
          disabled={isGeneratingCF}
          className="bg-[#0a2540] hover:bg-[#153a5f] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors disabled:opacity-70 shadow-lg shadow-blue-900/20"
        >
          {isGeneratingCF ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <TrendingUp className="w-4 h-4 mr-2" />
          )}
          {isGeneratingCF ? 'Consolidating...' : 'Generate Cash Flow'}
        </button>
      </div>
    </div>
  );

  const renderMetrics = () => {
    // Helper to generate a 12-month array
    const generateTrend = (base, variance) =>
      Array.from({ length: 12 }, () => base + (Math.random() * variance - variance / 2));

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Mock data for cities
    const cityData = [
      {
        id: 'unit1',
        name: 'Unit 1 (HQ)',
        financial: { revenue: generateTrend(120, 20), ebitda: generateTrend(32, 5) },
        operational: { opd: generateTrend(4500, 500), occupancy: generateTrend(85, 10) },
        color: 'bg-blue-500'
      },
      {
        id: 'unit2',
        name: 'Unit 2',
        financial: { revenue: generateTrend(80, 15), ebitda: generateTrend(21, 4) },
        operational: { opd: generateTrend(3200, 400), occupancy: generateTrend(75, 12) },
        color: 'bg-emerald-500'
      },
      {
        id: 'unit3',
        name: 'Unit 3',
        financial: { revenue: generateTrend(50, 10), ebitda: generateTrend(11, 3) },
        operational: { opd: generateTrend(2100, 300), occupancy: generateTrend(65, 15) },
        color: 'bg-amber-500'
      },
      {
        id: 'unit4',
        name: 'Unit 4',
        financial: { revenue: generateTrend(45, 8), ebitda: generateTrend(9, 2) },
        operational: { opd: generateTrend(1800, 200), occupancy: generateTrend(60, 10) },
        color: 'bg-pink-500'
      }
    ];

    // Calc totals
    const totalRev = cityData.reduce((acc, city) => acc + city.financial.revenue.reduce((a, b) => a + b, 0), 0);
    const totalOpd = cityData.reduce((acc, city) => acc + city.operational.opd.reduce((a, b) => a + b, 0), 0);

    // Pie Chart Data (Simple CSS Conic Gradient approximation)
    const pieGradient = `conic-gradient(
      #3b82f6 0% 40%, 
      #10b981 40% 67%, 
      #f59e0b 67% 84%, 
      #ec4899 84% 100%
    )`;

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        {/* Toggle Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#0a2540] flex items-center">
              <PieChart className="w-6 h-6 mr-2 text-pink-600" />
              Annual Performance Metrics (2025)
            </h3>
            <p className="text-sm text-slate-500 mt-1">Comprehensive 12-month analysis across all hospital units.</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setMetricsType('financial')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${metricsType === 'financial'
                  ? 'bg-white text-[#0a2540] shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Financial (Revenue/EBITDA)
            </button>
            <button
              onClick={() => setMetricsType('operational')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${metricsType === 'operational'
                  ? 'bg-white text-pink-600 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Operational (OPD/Occupancy)
            </button>
          </div>
        </div>

        {/* Overall Summary Cards with Pie Chart */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase">Revenue Share</h4>
            <div className="w-32 h-32 rounded-full relative" style={{ background: pieGradient }}>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-slate-400">By Unit</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-[10px]">
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>Unit 1</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span>Unit 2</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-500 mr-1"></span>Unit 3</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-500 mr-1"></span>Unit 4</span>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Total Annual Revenue</p>
              <div className="flex items-baseline mt-2">
                <IndianRupee className="w-5 h-5 text-slate-400 mr-1" />
                <h3 className="text-3xl font-bold text-[#0a2540]">{(totalRev / 10).toFixed(1)} Cr</h3>
              </div>
              <p className="text-xs text-green-600 mt-2 font-medium flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +14% YoY Growth
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Total Annual OPD</p>
              <div className="flex items-baseline mt-2">
                <Users className="w-5 h-5 text-slate-400 mr-1" />
                <h3 className="text-3xl font-bold text-[#0a2540]">{totalOpd.toLocaleString()}</h3>
              </div>
              <p className="text-xs text-green-600 mt-2 font-medium flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +8.5% YoY Growth
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Avg. Bed Occupancy</p>
              <div className="flex items-baseline mt-2">
                <BedDouble className="w-5 h-5 text-slate-400 mr-1" />
                <h3 className="text-3xl font-bold text-[#0a2540]">72.4%</h3>
              </div>
              <p className="text-xs text-slate-400 mt-2">Target: 75%</p>
            </div>
          </div>
        </div>

        {/* City Wise Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cityData.map((city) => (
            <div key={city.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg text-[#0a2540] flex items-center">
                  <Building2 className={`w-5 h-5 mr-2 ${city.color.replace('bg-', 'text-')}`} />
                  {city.name}
                </h4>
                <div className={`text-xs px-2 py-1 rounded text-white font-bold ${city.color}`}>
                  {metricsType === 'financial' ? 'Rev Trend' : 'OPD Trend'}
                </div>
              </div>

              {/* 12-Month Chart */}
              <div className="h-48 flex items-end space-x-2 mb-4 pt-6"> {/* Increased height for labels */}
                {(metricsType === 'financial' ? city.financial.revenue : city.operational.opd).map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center group relative">
                    {/* Value Label above bar */}
                    <div className="mb-1 text-[10px] font-bold text-slate-600 opacity-80">
                      {Math.round(val)}
                    </div>
                    <div
                      className={`w-full rounded-t-sm transition-all hover:brightness-110 ${city.color}`}
                      style={{ height: `${(val / (metricsType === 'financial' ? 150 : 6000)) * 100}%`, minHeight: '4px' }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-1">
                {months.map(m => <span key={m}>{m}</span>)}
              </div>

              {/* Summary Stats Row */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase">
                    {metricsType === 'financial' ? 'Total Revenue' : 'Total OPD'}
                  </p>
                  <p className="text-lg font-bold text-slate-700">
                    {metricsType === 'financial'
                      ? `₹${city.financial.revenue.reduce((a, b) => a + b, 0).toFixed(1)} L`
                      : city.operational.opd.reduce((a, b) => a + b, 0).toLocaleString()
                    }
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase">
                    {metricsType === 'financial' ? 'EBITDA Margin' : 'Avg Occupancy'}
                  </p>
                  <p className={`text-lg font-bold ${metricsType === 'financial' ? 'text-green-600' : 'text-blue-600'}`}>
                    {metricsType === 'financial'
                      ? '26.5%' // Mock average
                      : `${Math.round(city.operational.occupancy.reduce((a, b) => a + b, 0) / 12)}%`
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderReports = () => {
    if (selectedReport === 'medmart') {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button
            onClick={() => setSelectedReport(null)}
            className="flex items-center text-slate-500 hover:text-[#0a2540] mb-4 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Reports List
          </button>

          {/* Report Paper Container */}
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm max-w-4xl mx-auto border border-slate-200">
            {/* Header */}
            <div className="flex justify-between items-start border-b-2 border-[#0a2540] pb-6 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-[#0a2540]">Internal Audit Report</h1>
                <p className="text-slate-500 mt-2 text-sm uppercase tracking-wider font-semibold">Subject: MedMart Procurement Analysis</p>
                <p className="text-slate-500 mt-1 text-sm">Period: April 2025 - October 2025</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end text-[#0a2540] font-bold text-xl mb-1">
                  <HeartPulse className="w-6 h-6 mr-2 text-pink-600" /> Project 10
                </div>
                <p className="text-xs text-slate-400">Financial Control Tower</p>
                <p className="text-xs text-slate-400">Generated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-8 bg-slate-50 p-6 rounded border-l-4 border-pink-500">
              <h2 className="text-lg font-bold text-[#0a2540] mb-3 uppercase tracking-wide">1. Executive Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    A forensic analysis of MedMart procurement data reveals a significant breach in the agreed 4% margin cap.
                    The total excess payout detected for the period amounts to <strong>₹84.47 Lakhs</strong>.
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The leakage correlates strongly with bulk procurement cycles for high-value Clinical & hormonal drugs.
                    Immediate corrective action involves implementing a real-time API block on invoices exceeding the threshold.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Total Financial Impact</p>
                  <p className="text-3xl font-bold text-red-600">₹84,47,230</p>
                  <p className="text-xs text-red-400 mt-1 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Unapproved Excess Payout
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[#0a2540] mb-4 uppercase tracking-wide border-b border-slate-200 pb-2">2. Monthly Variance Trend</h2>
              <div className="h-48 w-full bg-slate-50 rounded border border-slate-100 flex items-end p-4 space-x-4 relative">
                {/* Curve Overlay */}
                <div className="absolute inset-0 p-4 pointer-events-none opacity-50">
                  <SvgCurveChart data={monthlyLeakage.filter(m => m.amount > 0 || m.month === 'Apr')} color="#0a2540" />
                </div>

                {monthlyLeakage.map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center z-10">
                    <div className="text-[10px] font-bold text-slate-600 mb-1">₹{item.amount}L</div>
                    <div
                      className={`w-full ${item.color} rounded-t-sm`}
                      style={{ height: item.amount > 0 ? `${(item.amount / 30) * 100}%` : '2px' }}
                    ></div>
                    <div className="text-[10px] text-slate-500 mt-2 transform -rotate-45 origin-top-left translate-y-2">{item.month}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic mt-4 text-center">Fig 1.1: Visual representation of monthly excess payout in Lakhs (INR).</p>
            </div>

            {/* Violations Table */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[#0a2540] mb-4 uppercase tracking-wide border-b border-slate-200 pb-2">3. Key Violations (Sample Data)</h2>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-300">
                    <th className="p-3">Month</th>
                    <th className="p-3">Item Name</th>
                    <th className="p-3">Batch</th>
                    <th className="p-3 text-right">Margin %</th>
                    <th className="p-3 text-right">Excess Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {violations.slice(0, 6).map((v, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="p-2 text-slate-600">{v.month}</td>
                      <td className="p-2 text-[#0a2540] font-medium">{v.item}</td>
                      <td className="p-2 text-slate-500 font-mono text-xs">{v.batch}</td>
                      <td className="p-2 text-right font-bold text-red-600">{v.margin}%</td>
                      <td className="p-2 text-right font-bold text-red-600">{v.excess}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-200 print:hidden">
              <p className="text-xs text-slate-400">Project 10 Financial Control Tower v2.1</p>
              <div className="flex space-x-4">
                <button onClick={() => window.print()} className="flex items-center text-[#0a2540] hover:text-pink-600 font-medium transition-colors">
                  <Printer className="w-4 h-4 mr-2" /> Print Report
                </button>
                <button className="flex items-center bg-[#0a2540] text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default Reports List View
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => setSelectedReport('medmart')}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-pink-200 cursor-pointer transition-all group"
          >
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540] mb-2 group-hover:text-pink-600 transition-colors">MedMart Margin Audit</h3>
            <p className="text-sm text-slate-500 mb-4">Forensic analysis of pharmacy procurement, highlighting 4% cap breaches and itemized leakage.</p>
            <div className="flex justify-between items-center text-xs font-medium text-slate-400">
              <span>Updated: Today</span>
              <span className="flex items-center text-blue-600">View Report <ChevronRight className="w-3 h-3 ml-1" /></span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 opacity-60 cursor-not-allowed">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540] mb-2">Consolidated Cash Flow</h3>
            <p className="text-sm text-slate-500 mb-4">Monthly cash flow statement aligned with IND AS standards for IPO readiness.</p>
            <div className="flex justify-between items-center text-xs font-medium text-slate-400">
              <span>Generating...</span>
              <span className="flex items-center">Processing <RefreshCw className="w-3 h-3 ml-1 animate-spin" /></span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 opacity-60 cursor-not-allowed">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540] mb-2">Variable Pay Disbursal</h3>
            <p className="text-sm text-slate-500 mb-4">Automated calculation of doctor payouts based on procedure volume and agreed revenue share.</p>
            <div className="flex justify-between items-center text-xs font-medium text-slate-400">
              <span>Pending Approval</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPayouts = () => {
    // Flatten doctors list for table display (just taking first 6 for demo)
    const flatDocList = departmentsData.flatMap(dept =>
      dept.doctors.map(doc => ({
        name: doc,
        dept: dept.name,
        // Generating random realistic stats
        procedures: Math.floor(Math.random() * 50) + 10,
        opd: Math.floor(Math.random() * 200) + 50,
        payout: (Math.random() * 8 + 2).toFixed(2) // in Lakhs
      }))
    ).slice(0, 15); // Show top 15

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#0a2540] flex items-center mb-2">
                <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                Automated Variable Pay Engine
              </h3>
              <p className="text-sm text-slate-500">Replaces manual Excel compilation. Rules codified based on CEO/Investor agreements. Zero month-end spillover.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <h4 className="font-semibold text-[#0a2540] mb-2">Consultant - Payout Rules</h4>
              <ul className="text-sm space-y-2 text-slate-600">
                <li className="flex justify-between"><span>OPD Consultations:</span> <span className="font-medium">20% Cut</span></li>
                <li className="flex justify-between"><span>Standard Procedure:</span> <span className="font-medium">15% Cut</span></li>
                <li className="flex justify-between"><span>Complex Procedures:</span> <span className="font-medium">25% Cut</span></li>
              </ul>
            </div>
            <div className="border border-blue-100 rounded-lg p-4 bg-blue-50 flex flex-col justify-center items-center text-center">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-bold text-blue-900">100% System Calculated</h4>
              <p className="text-xs text-blue-700 mt-1">Manual intervention disabled. Audit trail active.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-y border-slate-200">
                  <th className="p-3 font-medium">Doctor Name</th>
                  <th className="p-3 font-medium">Department</th>
                  <th className="p-3 font-medium">Volume (Month)</th>
                  <th className="p-3 font-medium">Generated Payout</th>
                  <th className="p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {flatDocList.map((doc, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 font-medium text-[#0a2540]">{doc.name}</td>
                    <td className="p-3 text-slate-500 text-xs font-medium uppercase tracking-wide">{doc.dept}</td>
                    <td className="p-3 text-slate-600">{doc.procedures} Proc / {doc.opd} OPD</td>
                    <td className="p-3 font-bold text-[#0a2540]">₹{doc.payout} L</td>
                    <td className="p-3"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Ready to disburse</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderAudit = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] flex items-center mb-6">
          <FileText className="w-5 h-5 mr-2 text-pink-600" />
          Internal Financial Controls (IFC) Audit Trail
        </h3>

        <div className="space-y-4">
          <div className="p-4 border border-red-200 bg-red-50 rounded-lg flex items-start">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-900 text-sm flex items-center">
                MATERIAL WEAKNESS DETECTED: MedMart Procurement
                <span className="ml-2 bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded-full border border-red-200">High Severity</span>
              </h4>
              <p className="text-sm text-red-800 mt-1">
                <span className="font-bold">Deficiency:</span> Existing controls failed to prevent/detect purchase margins exceeding the 4% cap, resulting in a <strong>material misstatement of ₹84.47L</strong> (Apr-Oct '25).
                <br />
                <span className="font-bold">Remediation:</span> Automated API validation deployed. Invoices {'>'}4% margin are now auto-rejected effectively closing this control gap.
              </p>
            </div>
          </div>

          <div className="p-4 border border-emerald-200 bg-emerald-50 rounded-lg flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-900 text-sm">Control Deficiency Resolved: Variable Pay Delays</h4>
              <p className="text-sm text-emerald-800 mt-1">
                <span className="font-bold">Status:</span> <strong>Effective.</strong> Manual calculation (prone to error) replaced by Business Rules Engine. Reasonable assurance obtained that doctor payouts match HIS procedure data 100%.
              </p>
            </div>
          </div>

          <div className="p-4 border border-emerald-200 bg-emerald-50 rounded-lg flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-900 text-sm">Significant Deficiency Closed: Clinical Billing (SOP)</h4>
              <p className="text-sm text-emerald-800 mt-1">
                <span className="font-bold">Status:</span> <strong>Effective.</strong> Billing system now strictly enforces SOP templates. Risk of revenue leakage from unbilled consumables is now mitigated.
              </p>
            </div>
          </div>

          <div className="p-4 border border-amber-200 bg-amber-50 rounded-lg flex items-start">
            <RefreshCw className="w-5 h-5 text-amber-600 mr-3 mt-0.5 animate-spin" />
            <div>
              <h4 className="font-bold text-amber-900 text-sm">Ongoing Observation: IND AS Transition</h4>
              <p className="text-sm text-amber-800 mt-1">
                <span className="font-bold">Status:</span> <strong>In Progress.</strong> Dual-ledger system active to ensure financial statements are free of material misstatement during the IPO transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMIS = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Consolidated Revenue', value: '₹30.9 Cr', trend: '+12%', color: 'border-blue-600', icon: 'text-blue-600' },
          { label: 'Consolidated EBITDA', value: '₹7.3 Cr', trend: '+8%', color: 'border-pink-600', icon: 'text-pink-600' },
          { label: 'MedMart Cost Leakage', value: '₹84.47 L', trend: '+Alert', color: 'border-red-500', icon: 'text-red-500', note: 'Exceeds 4% margin' },
          { label: 'Unreconciled Payouts', value: '₹0.00', trend: '100% Auto', color: 'border-violet-500', icon: 'text-violet-500' }
        ].map((kpi, i) => (
          <div key={i} className={`bg-white p-5 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-shadow ${kpi.color}`}>
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
              <Activity className={`w-4 h-4 ${kpi.icon} opacity-50`} />
            </div>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-bold text-[#0a2540]">{kpi.value}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${kpi.trend === '+Alert' ? 'text-red-700 bg-red-50 border-red-100' : 'text-emerald-700 bg-emerald-50 border-emerald-100'}`}>{kpi.trend}</span>
            </div>
            {kpi.note && <p className="text-xs text-slate-400 mt-2 flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> {kpi.note}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Unit Wise Consolidation */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-[#0a2540] flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-blue-600" />
              Automated Unit-Wise Consolidation
            </h3>
            <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium border border-blue-100">Real-time TB Sync</span>
          </div>
          <div className="space-y-5">
            {units.map((unit, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-[#0a2540]">{unit.name}</span>
                  <span className="text-slate-500">₹{unit.revenue} Cr Rev / ₹{unit.ebitda} Cr EBITDA</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 flex overflow-hidden">
                  <div className="bg-[#0a2540] h-2.5" style={{ width: `${(unit.revenue / 15) * 100}%` }}></div>
                  <div className="bg-pink-500 h-2.5" style={{ width: `${(unit.ebitda / 15) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cash Flow Generator View */}
        <div className="bg-[#0a2540] rounded-xl shadow-lg shadow-blue-900/20 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-600 opacity-20 rounded-full -mr-12 -mt-12 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full -ml-10 -mb-10 blur-2xl"></div>

          <h3 className="text-lg font-bold mb-4 flex items-center relative z-10">
            <RefreshCw className="w-5 h-5 mr-2 text-pink-400" />
            Cash Flow Automation
          </h3>

          {cfGenerated ? (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500 relative z-10">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-white">Process Complete</p>
                    <p className="text-xs text-slate-300">Statement generated successfully.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setCurrentView('details')}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-lg text-sm font-medium flex justify-center items-center transition-colors"
                >
                  <Eye className="w-4 h-4 mr-2" /> View Details
                </button>
                <button
                  onClick={handleExportCF}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2.5 rounded-lg text-sm font-medium flex justify-center items-center transition-colors shadow-lg shadow-pink-600/20"
                >
                  <FileDown className="w-4 h-4 mr-2" /> Export Report
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-center text-slate-400 relative z-10">
              <FileText className="w-12 h-12 mb-3 opacity-30 text-pink-200" />
              <p className="text-sm text-slate-300">Consolidated CF not generated yet for current period.</p>
              <p className="text-xs mt-2 text-slate-400">Click "Generate Cash Flow" above.</p>
            </div>
          )}
        </div>
      </div>

      {/* NEW SECTION: Consolidated MedMart Analysis */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-[#0a2540] flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
            Consolidated MedMart Cost Leakage Trend (Apr - Oct 2025)
          </h3>
          <span className="text-sm font-medium text-slate-500">Total Excess: <span className="text-red-600 font-bold">₹84.47 L</span></span>
        </div>
        {/* Reusing the chart logic */}
        <div className="h-48 w-full bg-slate-50 rounded border border-slate-100 flex items-end p-4 space-x-4 relative">
          {/* Curve Overlay */}
          <div className="absolute inset-0 p-4 pointer-events-none opacity-50">
            <SvgCurveChart data={monthlyLeakage.filter(m => m.amount > 0 || m.month === 'Apr')} color="#0a2540" />
          </div>

          {monthlyLeakage.filter(m => m.amount > 0 || m.month === 'Apr').map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group relative z-10">
              {/* Tooltip */}
              <div className="absolute -top-10 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                ₹{item.amount}L
              </div>
              <div
                className={`w-full ${item.color} rounded-t-sm transition-all duration-500`}
                style={{ height: `${(item.amount / 30) * 100}%` }}
              ></div>
              <div className="text-xs font-medium text-slate-500 mt-2">{item.month}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">
          Aggregated analysis of purchase margins exceeding 4% cap. Peak leakage observed in August 2025 (₹27.46L).
        </p>
      </div>
    </div>
  );

  // --- Render Functions for New Modules ---

  const renderFinancialStmts = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <FileBarChart className="w-5 h-5 mr-2 text-pink-600" />
          Financial Statements (IND AS)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-3">Profit & Loss (P&L)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Revenue from Operations</span><span className="font-medium">₹48.2 Cr</span></div>
              <div className="flex justify-between"><span>Direct Expenses (COGS)</span><span className="font-medium text-red-600">(₹18.4 Cr)</span></div>
              <div className="flex justify-between border-t border-slate-300 pt-1 font-bold"><span>Gross Profit</span><span className="text-emerald-600">₹29.8 Cr</span></div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-3">Balance Sheet Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Non-Current Assets</span><span className="font-medium">₹120.5 Cr</span></div>
              <div className="flex justify-between"><span>Current Assets</span><span className="font-medium">₹45.2 Cr</span></div>
              <div className="flex justify-between border-t border-slate-300 pt-1 font-bold"><span>Total Assets</span><span className="text-[#0a2540]">₹165.7 Cr</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRCM = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
          Revenue Cycle Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-xs text-blue-600 font-medium">Claims Pending ({'>'}90 Days)</p>
            <p className="text-2xl font-bold text-blue-900 mt-1">₹1.2 Cr</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-xs text-red-600 font-medium">Claim Rejection Rate</p>
            <p className="text-2xl font-bold text-red-900 mt-1">4.2%</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-xs text-emerald-600 font-medium">Collection Efficiency</p>
            <p className="text-2xl font-bold text-emerald-900 mt-1">92%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInventory = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Truck className="w-5 h-5 mr-2 text-amber-500" />
          Inventory & Procurement Intelligence
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-slate-200 rounded-lg">
            <h4 className="font-semibold text-slate-700 text-sm mb-2">Near Expiry Alert (Next 30 Days)</h4>
            <ul className="text-sm space-y-2 text-red-600">
              <li className="flex justify-between"><span>Recagon 300IU</span> <span className="font-mono">12 Units</span></li>
              <li className="flex justify-between"><span>Meropenem Inj</span> <span className="font-mono">45 Units</span></li>
            </ul>
          </div>
          <div className="p-4 border border-slate-200 rounded-lg">
            <h4 className="font-semibold text-slate-700 text-sm mb-2">Stock Valuation (ABC Analysis)</h4>
            <div className="flex items-end h-24 space-x-2">
              <div className="w-1/3 bg-emerald-500 h-[80%] rounded-t flex items-center justify-center text-white text-xs">Cat A (70%)</div>
              <div className="w-1/3 bg-blue-400 h-[20%] rounded-t flex items-center justify-center text-white text-xs">Cat B (20%)</div>
              <div className="w-1/3 bg-slate-300 h-[10%] rounded-t flex items-center justify-center text-slate-600 text-xs">Cat C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDoctorPortal = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-indigo-500" />
          Doctor Self-Service Portal
        </h3>
        <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 mb-4">
          <p className="text-sm text-indigo-900 font-medium">Logged in as: <span className="font-bold">Dr. Lakshmi Nair - OBGYN (ID: 8842)</span></p>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="bg-white p-3 rounded shadow-sm"><p className="text-xs text-slate-500">OPD Count</p><p className="font-bold text-indigo-600">452</p></div>
            <div className="bg-white p-3 rounded shadow-sm"><p className="text-xs text-slate-500">Surgeries</p><p className="font-bold text-indigo-600">18</p></div>
            <div className="bg-white p-3 rounded shadow-sm"><p className="text-xs text-slate-500">Est. Payout</p><p className="font-bold text-emerald-600">₹4.2 L</p></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssets = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Landmark className="w-5 h-5 mr-2 text-teal-600" />
          Capex & Asset Management
        </h3>
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500">
            <tr><th className="p-2">Asset Name</th><th className="p-2">Location</th><th className="p-2">Status</th><th className="p-2 text-right">Utilization</th></tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100"><td className="p-2">MRI Machine (3T)</td><td className="p-2">Unit 1 - Radiology</td><td className="p-2 text-emerald-600 font-medium">Active</td><td className="p-2 text-right">88%</td></tr>
            <tr className="border-b border-slate-100"><td className="p-2">CT Scanner</td><td className="p-2">Unit 2 - Radiology</td><td className="p-2 text-emerald-600 font-medium">Active</td><td className="p-2 text-right">72%</td></tr>
            <tr className="border-b border-slate-100"><td className="p-2">IVF Incubator #4</td><td className="p-2">Unit 1 - IVF Lab</td><td className="p-2 text-amber-500 font-medium">Maintenance</td><td className="p-2 text-right">0%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBudget = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-rose-500" />
          Budget vs Actuals (Variance Analysis)
        </h3>
        <div className="space-y-6">
          {/* Unit 1 */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">Unit 1 Revenue</span>
              <span className="text-emerald-600 font-bold">+12% vs Target</span>
            </div>
            <div className="relative w-full h-8 bg-slate-100 rounded-full overflow-hidden">
              {/* Budget Marker Line at 80% (representing 100% of Budget) */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" style={{ left: '80%' }}></div>
              <div className="absolute top-1 right-[20%] text-[10px] text-slate-500 -mt-4">Target</div>

              {/* Actual Bar: 112% of Budget = 80% * 1.12 = 89.6% of container */}
              <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-l-full" style={{ width: '89.6%' }}></div>
              <div className="absolute top-0 left-2 h-full flex items-center text-xs text-white font-bold">₹13.4 Cr</div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0%</span>
              <span>125%</span>
            </div>
          </div>

          {/* Unit 2 */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">Unit 2 Opex</span>
              <span className="text-red-600 font-bold">+5% Over Budget</span>
            </div>
            <div className="relative w-full h-8 bg-slate-100 rounded-full overflow-hidden">
              {/* Budget Marker Line at 80% */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" style={{ left: '80%' }}></div>

              {/* Actual Bar: 105% of Budget = 80% * 1.05 = 84% of container */}
              <div className="absolute top-0 left-0 h-full bg-red-500 rounded-l-full" style={{ width: '84%' }}></div>
              <div className="absolute top-0 left-2 h-full flex items-center text-xs text-white font-bold">₹4.2 Cr</div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0%</span>
              <span>125%</span>
            </div>
          </div>

          {/* Unit 3 (Under Budget Example) */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">Unit 3 Marketing</span>
              <span className="text-emerald-600 font-bold">-8% Under Budget</span>
            </div>
            <div className="relative w-full h-8 bg-slate-100 rounded-full overflow-hidden">
              {/* Budget Marker Line at 80% */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" style={{ left: '80%' }}></div>

              {/* Actual Bar: 92% of Budget = 80% * 0.92 = 73.6% of container */}
              <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-l-full" style={{ width: '73.6%' }}></div>
              <div className="absolute top-0 left-2 h-full flex items-center text-xs text-white font-bold">₹85 L</div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0%</span>
              <span>125%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIPO = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <LayoutGrid className="w-5 h-5 mr-2 text-violet-600" />
          IPO Readiness & Data Room
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 border border-violet-100 bg-violet-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-violet-700">85%</p>
            <p className="text-xs text-violet-600">DRHP Readiness</p>
          </div>
          <div className="p-4 border border-violet-100 bg-violet-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-violet-700">12/15</p>
            <p className="text-xs text-violet-600">Audit Queries Closed</p>
          </div>
        </div>
        <button className="w-full bg-slate-800 text-white py-2 rounded text-sm font-medium flex items-center justify-center">
          <Lock className="w-4 h-4 mr-2" /> Access Virtual Data Room
        </button>
      </div>
    </div>
  );

  const renderVendor = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <ClipboardList className="w-5 h-5 mr-2 text-cyan-600" />
          Vendor Management System
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500"><tr><th className="p-2">Vendor</th><th className="p-2">Category</th><th className="p-2">Compliance</th><th className="p-2">Rating</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-100"><td className="p-2 font-medium">MedMart Pharma</td><td className="p-2">Pharmacy</td><td className="p-2 text-red-500">Flagged</td><td className="p-2">⭐⭐</td></tr>
              <tr className="border-b border-slate-100"><td className="p-2 font-medium">CleanCare Services</td><td className="p-2">Housekeeping</td><td className="p-2 text-emerald-600">Verified</td><td className="p-2">⭐⭐⭐⭐</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSystemHealth = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Server className="w-5 h-5 mr-2 text-slate-600" />
          System Health & Integrations
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
            <span className="text-sm font-medium flex items-center"><Database className="w-4 h-4 mr-2 text-slate-400" /> HIS Sync (Patient Data)</span>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">Operational</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
            <span className="text-sm font-medium flex items-center"><Briefcase className="w-4 h-4 mr-2 text-slate-400" /> Tally Prime (Accounting)</span>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">Operational</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
            <span className="text-sm font-medium flex items-center"><Activity className="w-4 h-4 mr-2 text-slate-400" /> LIMS (Lab Data)</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">Latency: 400ms</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatientExp = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center">
          <Smile className="w-5 h-5 mr-2 text-yellow-500" />
          Patient Experience (NPS)
        </h3>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0a2540]">72</div>
            <p className="text-xs text-slate-500 uppercase mt-1">NPS Score</p>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex justify-between text-xs text-slate-600"><span>Promoters</span><span>75%</span></div>
            <div className="w-full bg-slate-100 h-2 rounded-full"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div></div>

            <div className="flex justify-between text-xs text-slate-600"><span>Detractors</span><span>12%</span></div>
            <div className="w-full bg-slate-100 h-2 rounded-full"><div className="bg-red-500 h-2 rounded-full" style={{ width: '12%' }}></div></div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-200 flex items-start">
          <Clock className="w-4 h-4 text-slate-400 mr-2 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-slate-700">Avg. OPD Wait Time</p>
            <p className="text-sm text-[#0a2540]">18 Mins <span className="text-xs text-green-600">(-2m vs last month)</span></p>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentView === 'details') {
    return <DetailsView onBack={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <InvoiceModal
        invoice={selectedInvoice}
        onClose={() => setSelectedInvoice(null)}
      />

      <div className="hidden md:block">
        {renderSidebar()}
      </div>

      {/* Mobile Sidebar Replacement / Menu could go here, for now just hidden on mobile */}

      <main className="flex-1 md:ml-64 w-full">
        {renderTopBar()}
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          {activeTab === 'mis' && renderMIS()}
          {activeTab === 'pharmacy' && renderPharmacy()}
          {activeTab === 'payouts' && renderPayouts()}
          {activeTab === 'audit' && renderAudit()}
          {activeTab === 'ivf' && renderIVF()}
          {activeTab === 'reports' && renderReports()}
          {activeTab === 'metrics' && renderMetrics()}

          {/* Render new modules */}
          {activeTab === 'financial_stmts' && renderFinancialStmts()}
          {activeTab === 'rcm' && renderRCM()}
          {activeTab === 'inventory' && renderInventory()}
          {activeTab === 'doctor_portal' && renderDoctorPortal()}
          {activeTab === 'assets' && renderAssets()}
          {activeTab === 'budget' && renderBudget()}
          {activeTab === 'ipo' && renderIPO()}
          {activeTab === 'vendor' && renderVendor()}
          {activeTab === 'system_health' && renderSystemHealth()}
          {activeTab === 'patient_exp' && renderPatientExp()}
        </div>
      </main>
    </div>
  );
}