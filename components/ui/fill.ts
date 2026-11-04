/** Fills the {placeholders} of a text from templates.json, e.g. fill("Go to slide {n}", { n: 2 }). */
export const fill = (template: string, values: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
