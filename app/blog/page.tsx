import Link from 'next/link';

const blogPosts = [
  {
    slug: 'what-does-as-the-crow-flies-mean',
    title: 'What Does "As the Crow Flies" Mean?',
    excerpt: 'Learn about the origin and meaning of this common phrase used to describe straight-line distances.',
    date: '2024-01-15'
  },
  {
    slug: 'straight-line-vs-driving-distance',
    title: 'Straight Line vs Driving Distance Explained',
    excerpt: 'Understand why straight-line distances differ from actual travel distances and when each measurement matters.',
    date: '2024-01-14'
  },
  {
    slug: 'how-to-measure-distance-on-map',
    title: 'How to Measure Distance on a Map',
    excerpt: 'Different methods and tools for measuring distances on maps, from traditional to digital approaches.',
    date: '2024-01-13'
  },
  {
    slug: 'why-planes-dont-fly-straight',
    title: "Why Planes Don't Fly in Straight Lines",
    excerpt: 'Discover why flight paths curve and how great circle routes actually work in aviation.',
    date: '2024-01-12'
  },
  {
    slug: 'surprising-city-distances',
    title: '10 Surprising City Distances',
    excerpt: 'Fun facts and surprising distances between major cities that might not be what you expect.',
    date: '2024-01-11'
  }
];

export default function BlogIndex() {
  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">🐦 CrowFliesDistance.com</a>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{post.excerpt}</p>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-400">
            © 2024 CrowFliesDistance.com. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}