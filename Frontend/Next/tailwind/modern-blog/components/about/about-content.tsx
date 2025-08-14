"use client"

export function AboutContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold font-serif mb-6">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            InkFlow was born from a simple idea: to create a platform where writers and readers can connect through
            meaningful content. We believe in the power of words to inspire, educate, and transform lives.
          </p>

          <h2 className="text-3xl font-bold font-serif mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're committed to providing a modern, accessible, and beautiful platform for sharing ideas. Our focus is on
            creating an exceptional reading and writing experience that works seamlessly across all devices and
            languages.
          </p>

          <h2 className="text-3xl font-bold font-serif mb-6">Technology</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Built with the latest web technologies including Next.js, TypeScript, and Tailwind CSS, InkFlow represents
            the cutting edge of modern web development while maintaining excellent performance and accessibility
            standards.
          </p>
        </div>
      </div>
    </section>
  )
}
