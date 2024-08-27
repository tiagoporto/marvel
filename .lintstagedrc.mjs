export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json',
  '*.{js,jsx,ts,tsx}': ['eslint --ext js,jsx,ts,tsx --max-warnings 0'],
}
