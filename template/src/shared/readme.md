# Shared Layer

The `shared/` folder holds **common utilities**, **UI components**, and **global systems** that are reused across the app.

## Structure

shared/
┣ components/ # Reusable UI elements (Button, Input)
┣ constants/ # App constants (storage keys, enums)
┣ hooks/ # Reusable logic (useTheme, useKeyboard, etc.)
┣ i18n/ # Internationalization setup
┣ lib/ # Third-party integrations (MMKV, analytics)
┣ theme/ # Design system (colors, spacing, typography)
┣ types/ # Shared TypeScript definitions
┣ ui/ # More complex reusable UI blocks
┗ utils/ # Helper functions and pure utilities

## Responsibilities

- Provide generic, framework-agnostic tools
- Define UI design system and styling constants
- Manage translations, themes, and persistent storage
- Contain utilities for consistent and DRY codebase
