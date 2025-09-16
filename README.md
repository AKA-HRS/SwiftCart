# Modern E-Commerce Store

A modern, responsive e-commerce website built with React, Vite, and Tailwind CSS. Features beautiful animations with Framer Motion, a complete shopping cart system, and a sleek dark/light theme.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Shopping Cart**: Full cart functionality with persistent storage
- **Product Catalog**: Advanced filtering, sorting, and search
- **Dark/Light Theme**: System preference detection with manual toggle
- **Animations**: Buttery smooth Framer Motion animations throughout
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Code splitting, lazy loading, and optimized images

## 🛠️ Tech Stack

- **Frontend**: React 18 + JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: React Context API
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/          # Framer Motion components
│   ├── cart/               # Cart-related components
│   ├── common/             # Reusable UI components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components
│   └── product/            # Product-related components
├── context/                # React Context providers
├── hooks/                  # Custom React hooks
├── pages/                  # Page components
├── routes/                 # Routing configuration
├── services/               # API and utility services
├── styles/                 # Global styles
├── test/                   # Test files
└── utils/                  # Utility functions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd modern-ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests with Vitest

## 🎨 Customization

### Adding Products

Products are stored in `/public/data/products.json`. To add new products:

1. Open `/public/data/products.json`
2. Add a new product object with the following structure:

```json
{
  "id": 25,
  "slug": "unique-product-slug",
  "title": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "currency": "USD",
  "images": ["/images/products/product-1.jpg"],
  "rating": 4.5,
  "reviewsCount": 100,
  "stock": 50,
  "categories": ["category1", "category2"],
  "colors": ["red", "blue"],
  "sizes": ["S", "M", "L"],
  "tags": ["tag1", "tag2"],
  "createdAt": "2024-01-01T00:00:00Z",
  "featured": false
}
```

### Customizing Theme

The theme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Adding New Pages

1. Create a new component in `/src/pages/`
2. Add the route in `/src/routes/AppRoutes.jsx`
3. Update navigation in `/src/components/layout/Header.jsx`

## 🎭 Animations

The project uses Framer Motion for animations. Key animation components:

- **Page Transitions**: Smooth page-to-page transitions
- **Product Cards**: Hover effects and entrance animations
- **Cart Drawer**: Slide-in animation with backdrop
- **Loading States**: Skeleton loaders and shimmer effects

Animation variants are centralized in `/src/components/animations/motionVariants.js`.

## 🧪 Testing

The project includes tests for:

- **ProductCard Component**: Renders correctly and handles interactions
- **Cart Context**: Add, update, remove, and calculate totals
- **Utility Functions**: Formatting and helper functions

Run tests:

```bash
npm run test
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences respected
- Semantic HTML structure

## 🌙 Dark Mode

Dark mode is automatically enabled based on system preferences and can be manually toggled. The theme persists across sessions using localStorage.

## 🚀 Performance

- **Code Splitting**: Routes are lazy-loaded
- **Image Optimization**: Lazy loading and proper sizing
- **Bundle Analysis**: Optimized build output
- **Caching**: Efficient data fetching with artificial delays

## 🔧 Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_BASE_URL=/api
VITE_APP_NAME=Modern Store
```

## 📦 Build & Deploy

### Production Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🎯 Roadmap

- [ ] User authentication and accounts
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search with filters
- [ ] Payment integration
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Multi-language support

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
