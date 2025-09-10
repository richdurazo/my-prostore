# My ProStore 🛍️

A modern e-commerce store built with Next.js 15, featuring a clean and responsive design with product catalog, individual product pages, and a robust database setup.

## ✨ Features

- **Product Catalog**: Browse products with filtering and search capabilities
- **Product Detail Pages**: Individual product pages with image galleries and detailed information
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme switching with system preference detection
- **Database Integration**: PostgreSQL with Prisma ORM and Neon serverless database
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Database Hosting**: Neon (Serverless PostgreSQL)
- **Icons**: Lucide React
- **Theme**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-prostore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your-neon-database-url"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-prostore/
├── app/                    # Next.js App Router
│   ├── (root)/            # Route group
│   │   ├── page.tsx       # Home page
│   │   └── product/       # Product pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── shared/           # Shared components
│   │   ├── header/       # Header components
│   │   └── product/      # Product-related components
│   └── ui/               # UI components (shadcn/ui)
├── db/                   # Database related files
│   └── prisma.ts         # Prisma client configuration
├── lib/                  # Utility functions
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🎨 Key Components

- **ProductCard**: Displays product information in a card format
- **ProductImages**: Image gallery with thumbnail navigation
- **ProductPrice**: Formatted price display component
- **Header**: Navigation with theme toggle and mobile menu
- **Footer**: Site footer with links and information

## 🗄️ Database Schema

The application uses a single `Product` model with the following fields:
- Basic info: name, slug, description, brand, category
- Media: images array, banner image
- Pricing: price, stock quantity
- Reviews: rating, number of reviews
- Metadata: creation date, featured status

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Environment Variables

Make sure to set the following environment variables in production:
- `DATABASE_URL`: Your Neon database connection string

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Richard Durazo**
- GitHub: [@richdurazo](https://github.com/richdurazo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/rdurazo/)

---

Built with ❤️ using Next.js and modern web technologies.
