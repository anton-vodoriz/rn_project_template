# Widgets Layer

The `widgets/` layer are **reusable UI blocks** that can combine multiple features or entities into cohesive sections.

## Structure

widgets/
┣ user-profile-card/
┃ ┣ components/
┃ ┣ hooks/
┃ ┗ index.ts

## Guidelines

- Widgets should contain only **UI and composition**, not business logic.
- Reusable across different screens or features.
- Typically used inside screens or layouts.

## Examples

- `UserProfileCard` (uses `entities/user` and `features/profile`)
- `TaskList` (uses `entities/task` and `shared/ui` components)
- `DashboardHeader` (uses theme + translation + navigation)
