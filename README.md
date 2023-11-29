Forked from [smikula/good-fences](https://github.com/smikula/good-fences), except that we completely ignore `import type` imports.

Types are removed during TS compilation anyway, so it's not useful for boundary management to keep them.

Known issues: `endToEndTests` are currently broken.
