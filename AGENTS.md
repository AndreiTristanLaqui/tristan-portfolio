# Repository Guidelines

Whatever action you can do yourself, please do yourself. This includes starting apps and performing verification.

## Project Structure & Module Organization

This repository is currently a clean scaffold: no application code, tests, or build configuration have been committed. Keep the root limited to project-wide files such as `README.md`, dependency manifests, and configuration. When implementation begins, place production code in `src/`, tests in `tests/`, and non-code resources in `assets/`. Group modules by feature or domain, and mirror the `src/` layout under `tests/` so ownership remains clear.

## Build, Test, and Development Commands

No build or test runner is configured yet. Do not document or depend on a command until its configuration is committed. These repository checks are available now:

- `git status` — review changed and untracked files.
- `git diff --check` — detect whitespace errors before committing.
- `git diff --stat` — confirm the scope of a change.

When adding a toolchain, expose predictable commands such as `npm run build`, `npm test`, or `make test`, and update this guide and the README in the same change.

## Coding Style & Naming Conventions

Follow the formatter and linter native to the selected language, and commit their configuration with the first source files. Use spaces rather than tabs unless the formatter requires otherwise. Prefer descriptive names: `PascalCase` for types, `camelCase` for functions and variables, and `kebab-case` for documentation and asset filenames. Keep modules focused; avoid mixing generated artifacts with source files.

## Testing Guidelines

Add tests with every behavior change or bug fix. Name tests after observable behavior, for example `rejects_expired_token` or `user-service.test.ts`. Keep unit tests fast and deterministic; isolate network, clock, and filesystem dependencies. Document any coverage threshold when a test framework is introduced, and ensure the full suite passes locally before opening a pull request.

## Commit & Pull Request Guidelines

There is no existing Git history from which to infer a convention. Until one is established, use short, imperative commit subjects, optionally with a Conventional Commit prefix, for example `feat: add session validation`. Keep each commit focused. Pull requests should explain the problem and solution, list verification performed, link relevant issues, and include screenshots or logs for user-visible changes. Call out breaking changes, new configuration, and follow-up work explicitly.

## Security & Configuration

Never commit secrets, credentials, local environment files, or generated build output. Provide sanitized examples such as `.env.example`, and add tool-specific caches and artifacts to `.gitignore`.
