# Processes Layer

The `processes/` layer manages **cross-feature workflows** that connect multiple features and entities.

## Structure

```bash
processes/
┣ auth-flow/
┃ ┣ hooks/
┃ ┣ components/
┃ ┗ index.ts
```

## Examples

- Authentication flow (register → login → profile)
- Onboarding flow
- Purchase or checkout flow

Each process can use multiple features under one common workflow.
