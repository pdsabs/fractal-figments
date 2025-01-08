module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'max-len': ['error', 120],
    'indent': [
      'error', 2,
      {
        'SwitchCase': 1,
        'MemberExpression': 2,
        'FunctionDeclaration': {
          'body': 1,
          'parameters': 2,
        },
        'FunctionExpression': {
          'body': 1,
          'parameters': 2,
        },
        'CallExpression': {
          'arguments': 1,
        },
        'ignoredNodes': ['ConditionalExpression'],
      },
    ],
    'function-call-argument-newline': ['error', 'consistent'],
  },
};
