# Playwright TypeScript Automation

A test automation project using Playwright and TypeScript.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Project Structure

```
.
├── tests/              # Test files
├── src/                # Helper functions and utilities
├── playwright.config.ts # Playwright configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode (show browser):

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

Run tests for specific browser:

```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

Run tests in UI mode:

```bash
npm run test:ui
```

View test report:

```bash
npm run test:report
```

## Configuration

Edit `playwright.config.ts` to:

- Change test directory
- Configure browsers and devices
- Set up web server
- Configure reporters
- Add base URL

## Documentation

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test Features](https://playwright.dev/docs/intro)
- [Best Practices](https://playwright.dev/docs/best-practices)

## License

MIT
