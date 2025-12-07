import React, { useState } from 'react';
import { Plus, MessageSquare, Upload, Smartphone, X, IndianRupee } from 'lucide-react';

export default function FinanceTracker() {
    const [activeView, setActiveView] = useState('home');
    const [transactions, setTransactions] = useState([
        { id: 1, name: 'Milk', amount: 50, category: 'Groceries', date: '2025-12-06', type: 'expense' },
        { id: 2, name: 'Salary', amount: 50000, category: 'Income', date: '2025-12-01', type: 'income' }
    ]);

    const [templates, setTemplates] = useState([
        { id: 1, name: 'Milk', amount: 50, category: 'Groceries' },
        { id: 2, name: 'Newspaper', amount: 30, category: 'Utilities' },
        { id: 3, name: 'Coffee', amount: 120, category: 'Food' }
    ]);

    const [quickAddForm, setQuickAddForm] = useState({
        name: '',
        amount: '',
        category: 'Groceries'
    });

    const [newTemplate, setNewTemplate] = useState({
        name: '',
        amount: '',
        category: 'Groceries'
    });

    const [showAddTemplate, setShowAddTemplate] = useState(false);

    // Unused state removed for cleanliness
    // const [editingTransaction, setEditingTransaction] = useState(null);
    // const [showEditModal, setShowEditModal] = useState(false);

    const categories = ['Groceries', 'Food', 'Transport', 'Utilities', 'Entertainment', 'Income', 'Other'];

    const addFromTemplate = (template) => {
        const newTransaction = {
            id: Date.now(),
            name: template.name,
            amount: template.amount,
            category: template.category,
            date: new Date().toISOString().split('T')[0],
            type: 'expense'
        };
        setTransactions([newTransaction, ...transactions]);
    };

    const handleQuickAdd = () => {
        if (quickAddForm.name && quickAddForm.amount) {
            const newTransaction = {
                id: Date.now(),
                name: quickAddForm.name,
                amount: parseFloat(quickAddForm.amount),
                category: quickAddForm.category,
                date: new Date().toISOString().split('T')[0],
                type: 'expense'
            };
            setTransactions([newTransaction, ...transactions]);
            setQuickAddForm({ name: '', amount: '', category: 'Groceries' });
            setActiveView('home');
        }
    };

    const handleAddTemplate = () => {
        if (newTemplate.name && newTemplate.amount) {
            const template = {
                id: Date.now(),
                name: newTemplate.name,
                amount: parseFloat(newTemplate.amount),
                category: newTemplate.category
            };
            setTemplates([...templates, template]);
            setNewTemplate({ name: '', amount: '', category: 'Groceries' });
            setShowAddTemplate(false);
        }
    };

    const totalExpenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpenses;

    const HomePage = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Balance Card - Futuristic Holographic Style */}
            <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-2xl overflow-hidden group-hover:transform group-hover:scale-[1.01] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <IndianRupee size={120} />
                    </div>
                    <p className="text-cyan-300 text-sm font-medium tracking-wider mb-2 uppercase">Total Balance</p>
                    <h2 className="text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        ₹{balance.toLocaleString('en-IN')}
                    </h2>
                    <div className="flex gap-8">
                        <div className="flex-1 p-3 rounded-lg bg-white/5 border border-white/5">
                            <p className="text-gray-400 text-xs mb-1 uppercase tracking-wide">Income</p>
                            <p className="font-bold text-lg text-emerald-400">₹{totalIncome.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-white/5 border border-white/5">
                            <p className="text-gray-400 text-xs mb-1 uppercase tracking-wide">Expenses</p>
                            <p className="font-bold text-lg text-rose-400">₹{totalExpenses.toLocaleString('en-IN')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Templates */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                        Quick Access
                    </h3>
                    <button
                        onClick={() => setShowAddTemplate(true)}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors flex items-center gap-1"
                    >
                        <Plus size={16} /> New Template
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {templates.map(template => (
                        <button
                            key={template.id}
                            onClick={() => addFromTemplate(template)}
                            className="group relative bg-slate-800/50 hover:bg-slate-800/80 border border-white/5 hover:border-cyan-500/50 rounded-xl p-4 text-left transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-medium text-gray-200 group-hover:text-cyan-200 transition-colors">{template.name}</p>
                                <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <Plus size={14} />
                                </div>
                            </div>
                            <p className="text-xl font-bold text-white mb-1">₹{template.amount}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">{template.category}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tracking Options */}
            <div className="grid grid-cols-2 gap-4">
                {[
                    { id: 'sms', icon: MessageSquare, title: 'SMS Track', color: 'blue', desc: 'Auto-sync' },
                    { id: 'upload', icon: Upload, title: 'Import', color: 'emerald', desc: 'CSV/PDF' },
                    { id: 'upi', icon: Smartphone, title: 'UPI Mode', color: 'purple', desc: 'Scan & Pay' },
                    { id: 'quickadd', icon: Plus, title: 'Quick Add', color: 'orange', desc: 'Manual', highlight: true }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveView(item.id)}
                        className={`relative rounded-2xl p-5 text-left transition-all border group overflow-hidden ${item.highlight
                                ? 'bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-orange-500/30 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'
                                : 'bg-slate-800/40 hover:bg-slate-800/60 border-white/5 hover:border-white/10'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${item.highlight ? 'bg-gradient-to-br from-orange-500 to-pink-500 text-white' : `bg-${item.color}-500/10 text-${item.color}-400`
                            }`}>
                            <item.icon size={20} />
                        </div>
                        <h3 className="font-bold text-gray-100">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                    </button>
                ))}
            </div>

            {/* Recent Transactions */}
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white tracking-wide mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                    Recent Activity
                </h3>
                <div className="space-y-4">
                    {transactions.slice(0, 5).map((transaction, i) => (
                        <div key={transaction.id}
                            className="flex items-center justify-between py-2 group hover:bg-white/5 rounded-lg px-2 -mx-2 transition-colors delay-[${i * 50}ms] animate-in slide-in-from-bottom-2 fade-in">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform ${transaction.type === 'income'
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : 'bg-rose-500/20 text-rose-400'
                                    }`}>
                                    <IndianRupee size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-200">{transaction.name}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{transaction.category}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold text-lg ${transaction.type === 'income' ? 'text-emerald-400 shadow-emerald-500/50' : 'text-rose-400 shadow-rose-500/50'
                                    }`}>
                                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString('en-IN')}
                                </p>
                                <p className="text-xs text-gray-600">{transaction.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const QuickAddView = () => (
        <div className="space-y-4 animate-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => setActiveView('home')}
                    className="w-10 h-10 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all"
                >
                    <X size={20} />
                </button>
                <h2 className="text-2xl font-bold text-white tracking-tight">Add Expense</h2>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What is this for?</label>
                    <input
                        type="text"
                        value={quickAddForm.name}
                        autoFocus
                        onChange={(e) => setQuickAddForm({ ...quickAddForm, name: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-lg placeholder-gray-600"
                        placeholder="e.g. Lunch, Uber"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">How much?</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">₹</span>
                        <input
                            type="number"
                            value={quickAddForm.amount}
                            onChange={(e) => setQuickAddForm({ ...quickAddForm, amount: e.target.value })}
                            className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-10 pr-4 py-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-lg placeholder-gray-600"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                    <div className="grid grid-cols-3 gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setQuickAddForm({ ...quickAddForm, category: cat })}
                                className={`p-2 rounded-lg text-sm transition-all ${quickAddForm.category === cat
                                        ? 'bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/25'
                                        : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleQuickAdd}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all active:scale-[0.98]"
                >
                    Add Expense
                </button>
            </div>
        </div>
    );

    const FeatureView = ({ title, icon: Icon, description }) => (
        <div className="h-full flex flex-col animate-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => setActiveView('home')}
                    className="w-10 h-10 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all"
                >
                    <X size={20} />
                </button>
                <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-3xl border border-white/5 border-dashed">
                <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-6 animate-pulse">
                    <Icon size={40} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Coming Soon</h3>
                <p className="text-gray-400 text-center max-w-xs mb-8 leading-relaxed">{description}</p>
                <div className="px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium">
                    Work in Progress
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200 p-4 sm:p-6 selection:bg-cyan-500/30">
            <div className="max-w-md mx-auto min-h-[600px] flex flex-col relative">
                {/* Background Glows */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[100px]"></div>
                </div>

                {activeView === 'home' && (
                    <div className="mb-6 animate-in slide-in-from-top-4 fade-in duration-700">
                        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-1">
                            Finance<span className="text-cyan-400">.ai</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Welcome back, Nvbal</p>
                    </div>
                )}

                {activeView === 'home' && <HomePage />}
                {activeView === 'quickadd' && <QuickAddView />}
                {activeView === 'sms' && (
                    <FeatureView
                        title="SMS Tracking"
                        icon={MessageSquare}
                        description="AI-powered analysis of transaction SMS for automated expense tracking."
                    />
                )}
                {activeView === 'upload' && (
                    <FeatureView
                        title="Upload File"
                        icon={Upload}
                        description="Parse bank statements from PDF or CSV files securely on your device."
                    />
                )}
                {activeView === 'upi' && (
                    <FeatureView
                        title="UPI Mode"
                        icon={Smartphone}
                        description="Seamless integration with UPI apps for real-time payment tracking."
                    />
                )}
            </div>

            {/* Add Template Modal */}
            {showAddTemplate && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
                    <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white">New Template</h3>
                            <button onClick={() => setShowAddTemplate(false)} className="text-gray-500 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    value={newTemplate.name}
                                    onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                                    placeholder="e.g., Milk"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Amount</label>
                                <input
                                    type="number"
                                    value={newTemplate.amount}
                                    onChange={(e) => setNewTemplate({ ...newTemplate, amount: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                                    placeholder="0"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                                <select
                                    value={newTemplate.category}
                                    onChange={(e) => setNewTemplate({ ...newTemplate, category: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                onClick={handleAddTemplate}
                                className="w-full bg-cyan-600 text-white py-3 rounded-xl font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-500/20 mt-4"
                            >
                                Save Template
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}