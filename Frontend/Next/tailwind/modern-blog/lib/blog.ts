export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  readingTime: number
  featured: boolean
  tags: string[]
  author: {
    name: string
    avatar: string
    bio: string
  }
}

// Mock blog data - In a real app, this would come from a CMS or database
export const mockPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with the latest version of Next.js.",
    content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building web applications even more enjoyable. In this comprehensive guide, we'll explore the key features and how to get started.

## What's New in Next.js 15

Next.js 15 introduces several groundbreaking features:

- **Improved App Router**: Enhanced performance and developer experience
- **Server Components**: Better server-side rendering capabilities
- **Enhanced Image Optimization**: Faster loading times and better user experience
- **Improved TypeScript Support**: Better type safety and developer productivity

## Setting Up Your First Project

To get started with Next.js 15, you'll need to have Node.js installed on your machine. Then, you can create a new project using:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will create a new Next.js application with all the latest features and best practices configured out of the box.

## Key Features to Explore

### App Router
The App Router is the recommended way to build Next.js applications. It provides:
- File-based routing
- Nested layouts
- Server and Client Components
- Streaming and Suspense

### Server Components
Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client and improving performance.

### Image Optimization
Next.js provides automatic image optimization with the Image component, which includes:
- Automatic WebP conversion
- Responsive images
- Lazy loading
- Blur placeholder support

## Best Practices

When building with Next.js 15, keep these best practices in mind:

1. **Use Server Components by default**: Only use Client Components when you need interactivity
2. **Optimize images**: Always use the Next.js Image component
3. **Implement proper SEO**: Use metadata API for better search engine optimization
4. **Follow the file-based routing**: Organize your pages according to the App Router conventions

## Conclusion

Next.js 15 represents a significant step forward in web development, offering improved performance, better developer experience, and more powerful features. Whether you're building a simple blog or a complex web application, Next.js 15 provides the tools you need to succeed.

Start exploring these features today and see how they can improve your development workflow and application performance.`,
    coverImage: "/placeholder-eauv5.png",
    publishedAt: "2024-01-15",
    readingTime: 8,
    featured: true,
    tags: ["Next.js", "React", "Web Development"],
    author: {
      name: "Sarah Johnson",
      avatar: "/author-sarah.png",
      bio: "Full-stack developer and technical writer with 5+ years of experience in React and Next.js.",
    },
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for 2024",
    excerpt: "Discover the latest CSS features and techniques that will improve your web development workflow.",
    content: `# Modern CSS Techniques for 2024

CSS continues to evolve rapidly, bringing new features and capabilities that make styling web applications more powerful and intuitive. Let's explore the most important modern CSS techniques you should know in 2024.

## Container Queries

Container queries are one of the most exciting additions to CSS. They allow you to apply styles based on the size of a container rather than the viewport.

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grid items to participate in the sizing of their parent grid, creating more flexible and maintainable layouts.

\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.child-grid {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
\`\`\`

## CSS Cascade Layers

Cascade layers provide better control over CSS specificity and the cascade, making it easier to manage large stylesheets.

\`\`\`css
@layer reset, base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .button { padding: 0.5rem 1rem; }
}
\`\`\`

## Modern Color Functions

CSS now supports advanced color functions that provide more control over color manipulation.

\`\`\`css
.element {
  background: oklch(70% 0.15 180);
  color: color-mix(in srgb, blue 60%, white);
}
\`\`\`

## CSS Nesting

Native CSS nesting is now supported in modern browsers, reducing the need for preprocessors.

\`\`\`css
.card {
  padding: 1rem;
  
  & .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
}
\`\`\`

## Logical Properties

Logical properties make it easier to create layouts that work well with different writing modes and directions.

\`\`\`css
.element {
  margin-inline: 1rem;
  padding-block: 0.5rem;
  border-inline-start: 2px solid blue;
}
\`\`\`

## CSS Custom Properties (Variables) Advanced Usage

Modern CSS variables can be used in more sophisticated ways:

\`\`\`css
:root {
  --primary-hue: 220;
  --primary-saturation: 100%;
  --primary-lightness: 50%;
  --primary: hsl(var(--primary-hue) var(--primary-saturation) var(--primary-lightness));
}

.button {
  background: var(--primary);
  border: 1px solid hsl(var(--primary-hue) var(--primary-saturation) calc(var(--primary-lightness) - 10%));
}
\`\`\`

## Conclusion

These modern CSS techniques provide powerful tools for creating more maintainable, flexible, and performant stylesheets. As browser support continues to improve, incorporating these features into your workflow will help you build better web experiences.

Start experimenting with these techniques in your projects and see how they can simplify your CSS and improve your development workflow.`,
    coverImage: "/modern-css-design.png",
    publishedAt: "2024-01-10",
    readingTime: 6,
    featured: true,
    tags: ["CSS", "Web Design", "Frontend"],
    author: {
      name: "Alex Chen",
      avatar: "/author-alex.png",
      bio: "CSS specialist and UI/UX designer passionate about modern web technologies.",
    },
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Learn how to structure and organize TypeScript code for maintainable large-scale applications.",
    content: `# TypeScript Best Practices for Large Applications

As applications grow in size and complexity, maintaining clean, type-safe, and scalable TypeScript code becomes increasingly important. This guide covers essential best practices for building large-scale TypeScript applications.

## Project Structure and Organization

### Feature-Based Organization

Organize your code by features rather than by file types:

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   ├── blog/
│   └── user/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   └── utils/
└── app/
\`\`\`

### Barrel Exports

Use barrel exports to create clean import paths:

\`\`\`typescript
// features/auth/index.ts
export { LoginForm } from './components/LoginForm'
export { useAuth } from './hooks/useAuth'
export { authService } from './services/authService'
export type { User, AuthState } from './types'
\`\`\`

## Type System Best Practices

### Strict Configuration

Always use strict TypeScript configuration:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

### Utility Types

Leverage TypeScript's built-in utility types:

\`\`\`typescript
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

// Create types for different use cases
type CreateUserRequest = Omit<User, 'id'>
type UpdateUserRequest = Partial<Pick<User, 'name' | 'email'>>
type UserSummary = Pick<User, 'id' | 'name'>
\`\`\`

### Generic Constraints

Use generic constraints to create flexible yet type-safe APIs:

\`\`\`typescript
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>
  create(item: Omit<T, 'id'>): Promise<T>
  update(id: string, updates: Partial<T>): Promise<T>
  delete(id: string): Promise<void>
}
\`\`\`

## Error Handling Patterns

### Result Pattern

Implement a Result pattern for better error handling:

\`\`\`typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E }

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await userService.getById(id)
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: error as Error }
  }
}
\`\`\`

### Custom Error Types

Create specific error types for different scenarios:

\`\`\`typescript
abstract class AppError extends Error {
  abstract readonly statusCode: number
  abstract readonly isOperational: boolean
}

class ValidationError extends AppError {
  readonly statusCode = 400
  readonly isOperational = true
  
  constructor(message: string, public field: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

class NotFoundError extends AppError {
  readonly statusCode = 404
  readonly isOperational = true
  
  constructor(resource: string, id: string) {
    super(\`\${resource} with id \${id} not found\`)
    this.name = 'NotFoundError'
  }
}
\`\`\`

## Performance Considerations

### Lazy Loading with Dynamic Imports

Use dynamic imports for code splitting:

\`\`\`typescript
const LazyComponent = lazy(() => import('./HeavyComponent'))

// For non-React modules
const heavyUtility = await import('./heavyUtility')
\`\`\`

### Type-Only Imports

Use type-only imports to avoid runtime dependencies:

\`\`\`typescript
import type { User } from './types/User'
import type { ComponentProps } from 'react'

// Only import the type, not the actual module
type UserProps = ComponentProps<typeof UserComponent>
\`\`\`

## Testing Strategies

### Type Testing

Test your types using tools like \`tsd\`:

\`\`\`typescript
import { expectType, expectError } from 'tsd'
import { createUser } from './userService'

// Test that the function accepts the correct type
expectType<Promise<User>>(createUser({ name: 'John', email: 'john@example.com' }))

// Test that invalid calls are caught
expectError(createUser({ name: 'John' })) // Missing email
\`\`\`

### Mock Types

Create mock types for testing:

\`\`\`typescript
type MockUser = {
  [K in keyof User]: User[K] extends (...args: any[]) => any
    ? jest.MockedFunction<User[K]>
    : User[K]
}

const createMockUser = (): MockUser => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  role: 'user',
  // Mock any methods if User had them
})
\`\`\`

## Documentation and Maintenance

### JSDoc Comments

Use JSDoc for better IDE support and documentation:

\`\`\`typescript
/**
 * Calculates the total price including tax
 * @param basePrice - The base price before tax
 * @param taxRate - The tax rate as a decimal (e.g., 0.1 for 10%)
 * @returns The total price including tax
 * @example
 * \`\`\`typescript
 * const total = calculateTotal(100, 0.1) // Returns 110
 * \`\`\`
 */
function calculateTotal(basePrice: number, taxRate: number): number {
  return basePrice * (1 + taxRate)
}
\`\`\`

### Type Guards

Create type guards for runtime type checking:

\`\`\`typescript
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'email' in obj &&
    typeof (obj as User).id === 'string' &&
    typeof (obj as User).name === 'string' &&
    typeof (obj as User).email === 'string'
  )
}
\`\`\`

## Conclusion

Building large-scale TypeScript applications requires careful planning, consistent patterns, and adherence to best practices. By following these guidelines, you can create maintainable, type-safe, and scalable applications that are easier to develop, test, and maintain over time.

Remember that these practices should be adapted to your specific use case and team preferences. The key is to establish consistent patterns and stick to them throughout your application.`,
    coverImage: "/typescript-code-structure.png",
    publishedAt: "2024-01-05",
    readingTime: 12,
    featured: true,
    tags: ["TypeScript", "Best Practices", "Architecture"],
    author: {
      name: "Michael Rodriguez",
      avatar: "/author-michael.png",
      bio: "Senior software engineer specializing in TypeScript and large-scale application architecture.",
    },
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockPosts
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockPosts.find((post) => post.slug === slug) || null
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.featured)
}
