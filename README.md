# Linting and Formatting Practice

This project is an Angular application demonstrating the integration of ESLint and Prettier for consistent code style and quality. It includes examples of common linting issues and their resolutions.

## Project Structure

The project consists of the following main components:

1. `AppComponent`: The root component of the application.
2. `UserListComponent`: A component for displaying user lists.
3. `SampleComponent`: An additional sample component.

## ESLint Configuration

The project uses a custom ESLint configuration to enforce coding standards. Key rules include:

- TypeScript-specific rules (e.g., no unused variables)
- Prohibition of `var` keyword
- Restricted use of `console.log`
- Integration with Prettier for formatting

## Setup and Installation

1. Clone the repository:
   ```
   git clone [your-repository-url]
   cd linting-formatting-practice
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Available Scripts

- `npm start`: Run the app in development mode
- `npm run build`: Build the app for production
- `npm test`: Run tests
- `npm run lint`: Check for linting errors
- `npm run lint:fix`: Automatically fix linting errors where possible
- `npm run format`: Format all supported files using Prettier
- `npm run format:check`: Check if all files are formatted correctly
- `npm run check`: Run both linting and format checking
- `npm run fix`: Fix linting issues and format files

## Linting and Formatting

### ESLint

ESLint is configured with Angular-specific rules. To run ESLint:

```
npm run lint
```

To automatically fix ESLint issues:

```
npm run lint:fix
```

### Prettier

Prettier is used for code formatting. To format your code:

```
npm run format
```

To check if your code is formatted correctly:

```
npm run format:check
```

## Common Linting Issues and Fixes

1. **String Quotes**: Use single quotes for strings.
   - Before: `title = "linting-formatting-practice";`
   - After: `title = 'linting-formatting-practice';`

2. **Const vs Let**: Use `const` for variables that are never reassigned.
   - Before: `let x = 10;`
   - After: `const x = 10;`

3. **Console Statements**: Avoid using `console.log` for debugging. Use alternatives like `alert` or proper logging mechanisms.
   - Before: `console.log('App component initialized');`
   - After: `// Logging removed or replaced with appropriate mechanism`

4. **Equality Operators**: Use strict equality (`===`) instead of loose equality (`==`).
   - Before: `if(x == 10)`
   - After: `if(x === 10)`

5. **Semicolons**: Ensure all statements end with semicolons.
   - Before: `const y = 20`
   - After: `const y = 20;`

6. **Any Type**: Avoid using `any` type in TypeScript. Specify a more precise type.
   - Before: `users: any[];`
   - After: `users: User[];` (assuming you have a `User` interface or type)

## Contributing

Please ensure your code passes all linting and formatting checks before submitting a pull request. Use `npm run check` to verify your changes.

## License

None