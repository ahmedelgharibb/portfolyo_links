# Restaurant Website

A modern, responsive restaurant website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for About, Menu, Locations, and Contact
- Mobile-friendly navigation
- Optimized images with Next.js Image component

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd restaurant-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add your images to the `public` directory:
- `logo.png` - Your restaurant logo
- `hero-bg.jpg` - Hero section background image
- `about.jpg` - About section image
- `menu-item-1.jpg` (and more) - Menu item images

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. Update the restaurant name in `src/components/Navigation.tsx`
2. Modify the content in `src/app/page.tsx`
3. Update the color scheme in `tailwind.config.js`
4. Add your own images to the `public` directory

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

This project is licensed under the MIT License.