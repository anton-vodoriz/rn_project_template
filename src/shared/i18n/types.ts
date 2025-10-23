import en from './translations/en.json';

/** Deep key union: { home: { welcome: "x" } } -> "home" | "home.welcome" */
type FlattenObjectKeys<
  T extends Record<string, any>,
  Key = keyof T,
> = Key extends string
  ? T[Key] extends Record<string, any>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

export type AppTranslationSchema = typeof en; // shape of one locale file
export type AppTranslationKeys = FlattenObjectKeys<typeof en>; // "home" | "home.welcome" | ...
