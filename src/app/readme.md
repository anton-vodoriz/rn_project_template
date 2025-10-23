# App Layer

The `app/` layer contains the **root setup** of the entire application.  
It manages configuration, navigation, providers, and global stores.

## Structure

```bash
app/
┣ api/ # Global API setup (axios clients, interceptors)
┣ config/ # App-level constants and environment setup
┣ navigation/ # Root navigation structure
┣ providers/ # React context providers for theme, store, etc.
┣ store/ # Global stores (auth, theme, translation)
┗ index.tsx # App entry point
```

## Responsibilities

- Initialize and combine all providers
- Register navigation structure
- Configure global state management
- Set up base API client
- Handle localization and theme switching
