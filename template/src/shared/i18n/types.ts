import en from './translations/en.json';

/**
 * Recursively flattens nested JSON keys into dot notation
 * Example: { home: { welcome: "Hi" } } => "home.welcome"
 */
type NestedKeys<T> = {
  [K in keyof T & (string | number)]: T[K] extends Record<string, any>
    ? `${K}` | `${K}.${NestedKeys<T[K]>}`
    : `${K}`;
}[keyof T & (string | number)];

export type AppTranslationKeys = NestedKeys<typeof en>;
