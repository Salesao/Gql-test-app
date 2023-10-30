
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.quickclick.online/content/graphql",
  generates: {
    "src/gql/generated/": {
      preset: "client",
      plugins: ['typescript-operations', 'typescript-react-apollo', 'fragment-matcher'],
    }
  }
};

export default config;
