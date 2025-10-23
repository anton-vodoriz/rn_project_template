# Entities Layer

The `entities/` layer represent **business-level models** and logic of the application.  
Each entity defines the core data types, API, and state management that can be reused across features.

## Structure

```bash
entities/
┣ user/
┃ ┣ api/
┃ ┣ store/
┃ ┗ types/
```

## Responsibilities

- Define **types and interfaces** for the entity
- Manage **API endpoints** for fetching or updating entity data
- Provide **state management** (Zustand store, or similar)
- Contain domain-specific hooks (`useUser`, `useTask`, etc.)
