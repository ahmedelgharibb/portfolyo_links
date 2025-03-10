import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Restaurant ambiance"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Our Restaurant</h1>
            <p className="text-xl md:text-2xl mb-8">Experience the finest dining in town</p>
            <Link href="#menu" className="btn btn-primary">
              View Menu
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="section-title">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/about.jpg"
                  alt="Our restaurant"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg mb-6">
                  We are passionate about delivering exceptional dining experiences to our guests.
                  Our carefully curated menu features the finest ingredients, expertly prepared by our talented chefs.
                </p>
                <p className="text-lg">
                  With over 20 years of experience, we've created a warm and inviting atmosphere
                  where memories are made and traditions are celebrated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20">
          <div className="container">
            <h2 className="section-title">Our Menu</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Menu items will be dynamically loaded here */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/menu-item-1.jpg"
                  alt="Signature dish"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Signature Dish</h3>
                  <p className="text-gray-600 mb-4">Description of our signature dish</p>
                  <p className="text-primary font-bold">$24.99</p>
                </div>
              </div>
              {/* Add more menu items as needed */}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="section-title">Our Locations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Downtown</h3>
                <p className="text-gray-600 mb-4">123 Main Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Westside</h3>
                <p className="text-gray-600 mb-4">456 Ocean Drive</p>
                <p className="text-gray-600">Miami, FL 33139</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Riverside</h3>
                <p className="text-gray-600 mb-4">789 River Road</p>
                <p className="text-gray-600">Chicago, IL 60601</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-8">
                Have questions or want to make a reservation? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <p className="text-lg">Phone: (555) 123-4567</p>
                <p className="text-lg">Email: info@restaurant.com</p>
                <p className="text-lg">Hours: Mon-Sun, 11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 