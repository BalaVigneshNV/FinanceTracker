# Finance Tracker

A modern, futuristic finance tracking web application built with React and styled with TailwindCSS. Track your expenses and income with an elegant, holographic-inspired user interface.

## Features

### Current Features
- **Real-time Balance Tracking**: View your total balance, income, and expenses at a glance
- **Quick Templates**: Create and use expense templates for frequently recurring transactions
- **Quick Add**: Manually add expenses with custom amounts and categories
- **Recent Activity**: View your recent transactions in a beautifully designed list
- **Category Management**: Organize expenses into predefined categories (Groceries, Food, Transport, Utilities, Entertainment, Income, Other)

### Coming Soon
- **SMS Tracking**: AI-powered analysis of transaction SMS for automated expense tracking
- **Import Files**: Parse bank statements from PDF or CSV files securely on your device
- **UPI Mode**: Seamless integration with UPI apps for real-time payment tracking

## Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: TailwindCSS 3.4.0 with animations
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BalaVigneshNV/FinanceTracker.git
cd FinanceTracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Usage

### Adding Expenses

**Using Quick Templates:**
1. Click on any existing template card to instantly add that expense
2. Create new templates by clicking "New Template" and filling in the details

**Using Quick Add:**
1. Click on the "Quick Add" button on the home page
2. Enter the expense name, amount, and select a category
3. Click "Add Expense" to save

### Managing Templates

Templates are reusable expense entries that you can quickly add with a single click. Perfect for recurring expenses like:
- Daily milk purchases
- Newspaper subscriptions
- Regular coffee runs

## Project Structure

```
FinanceTracker/
├── src/
│   ├── FinanceTracker.jsx  # Main application component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Design Features

- **Holographic UI**: Modern, futuristic design with gradient accents and glassmorphism effects
- **Smooth Animations**: Fade-in, slide-in, and zoom animations for a polished user experience
- **Responsive Layout**: Mobile-first design that works seamlessly across devices
- **Dark Theme**: Easy-on-the-eyes dark color scheme with cyan and purple accents
- **Interactive Elements**: Hover effects and smooth transitions throughout the interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

BalaVigneshNV

## Acknowledgments

- Built with React and Vite for optimal development experience
- Styled with TailwindCSS for rapid UI development
- Icons provided by Lucide React
