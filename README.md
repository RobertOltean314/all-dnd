# All-DND Project

## Project Structure

```
src/
├── assets/          # Static files like images, fonts, etc.
├── components/      # Reusable components
│   ├── common/     # Shared components used across features
│   ├── layout/     # Layout components like Header, Footer, Sidebar
│   ├── ui/         # Basic UI components like buttons, inputs
│   └── forms/      # Form-related components
├── pages/          # Page components, each representing a route
├── context/        # React Context providers
├── hooks/          # Custom React hooks
├── services/       # API services and external integrations
├── utils/          # Utility functions and helpers
├── styles/         # Global styles, themes, and style utilities
├── constants/      # Constants and configuration values
├── types/          # TypeScript type definitions
└── lib/            # Third-party library configurations

```

## Directory Purposes

- `components/`: Reusable UI components

  - `common/`: Shared components used across multiple features
  - `layout/`: Components that define the application layout
  - `ui/`: Basic UI building blocks
  - `forms/`: Form-specific components and controls

- `pages/`: Components that represent entire pages/routes
- `context/`: React Context providers for state management
- `hooks/`: Custom React hooks for shared logic
- `services/`: API calls and external service integrations
- `utils/`: Helper functions and utilities
- `styles/`: Global styles and theming
- `constants/`: Application-wide constants
- `types/`: TypeScript type definitions
- `lib/`: Third-party library configurations

## Best Practices

1. Each component should have its own directory with:

   - Component file (index.tsx/jsx)
   - Styles (if component-specific)
   - Tests
   - Types (if needed)

2. Use named exports instead of default exports
3. Keep components small and focused
4. Use custom hooks for complex logic
5. Implement proper TypeScript types
6. Follow consistent naming conventions
