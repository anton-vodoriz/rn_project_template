# Features Layer

The `features/` folder contains **self-contained functional units** that implement user-facing capabilities.

## Structure

```bash
features/
┣ auth/
┃ ┣ components/
┃ ┣ hooks/
┃ ┗ screens/
```

## Responsibilities

- Combine logic and UI from `entities` and `shared`
- Represent concrete **user interactions** (login, signup, edit profile)
- Should not contain global logic — must remain feature-specific

## Guidelines

- A feature should be **fully reusable** in isolation.
- Avoid direct imports between different features.
- For larger flows (e.g., onboarding), use the `processes/` layer.
