import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    overrides: {
      typescript: {
        'ts/consistent-type-imports': 'off',
      },
    },
  },
)
