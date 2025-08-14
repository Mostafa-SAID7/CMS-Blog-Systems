"use client"

export function AboutStats() {
  const stats = [
    { label: "Articles Published", value: "150+" },
    { label: "Active Readers", value: "10K+" },
    { label: "Languages Supported", value: "2" },
    { label: "Countries Reached", value: "25+" },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
