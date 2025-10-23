# React Native Project Template

## 🧠 Key Technologies

- React Native / Expo
- TypeScript
- Zustand (state management)
- React Navigation
- MMKV (fast storage)
- i18n (localization)
- Light/Dark Themes

## 🧪 Development Guidelines

- Use absolute imports (@app, @features, @shared, etc.)
- Each feature or entity must be self-contained.
- Avoid cross-imports between unrelated features.
- Prefer hooks and composition over inheritance.

## 📁 Folder Structure

src/
┣ app/ # Core app setup: navigation, providers, config, global store
┣ processes/ # Cross-feature flows (auth, onboarding, etc.)
┣ entities/ # Business entities (user, task, etc.)
┣ features/ # Independent user-facing features (login, profile, etc.)
┣ widgets/ # Reusable UI blocks composed of features/entities
┣ shared/ # Shared utilities, theme, hooks, UI, etc.
┗ assets/ # Static assets (fonts, icons, images)

## 🧩 Principles

- **Modularity** — Every part of the app is isolated and replaceable.
- **Scalability** — Designed to grow without refactoring the whole codebase.
- **Reusability** — Shared layer is designed for maximum code reuse.
- **Clarity** — Each folder has a clear responsibility and README file.

## 🛠 Setup

```bash
npm install
npx expo prebuild

npx expo run:ios
# or
npx expo run:android
```

## 💡 Git guidelines

- **Branch**
| Branch type         | Responsibilities                   | Example                |
| ------------------- | ---------------------------------- | ---------------------- |
| `feat/<feature>`    | New functionality                  | `feat/user-list`       |
| `fix/<bug>`         | Bug fixes                          | `fix/user-item-style`  |
| `chore/<task>`      | Setup, packages update             | `chore/setup-husky`    |
| `refactor/<module>` | Refactoring without new features   | `refactor/home-screen` |

- **Commit**
| Commit type               | Responsibilities                   | Example                                 |
| ------------------------- | ---------------------------------- | --------------------------------------- |
| `feat: <description>`     | New functionality                  | `feat: add user list screen`            |
| `fix: <description>`      | Bug fixes                          | `fix: correct text style in user item`  |
| `chore: <description>`    | Setup, packages update             | `chore: setup husky and lint-staged`    |
| `refactor: <description>` | Refactoring without new features   | `refactor: rename styles constants`     |

