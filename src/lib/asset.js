export function asset(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  if (!path) return base;
  if (/^(?:[a-z]+:|\/\/|#)/i.test(path)) return path;
  const clean = path.replace(/^\//, "");
  const queryAt = clean.indexOf("?");
  const pathname = queryAt === -1 ? clean : clean.slice(0, queryAt);
  const search = queryAt === -1 ? "" : clean.slice(queryAt);
  return `${base}${pathname}${search}`;
}
