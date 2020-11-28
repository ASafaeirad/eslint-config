module.exports = {
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        'minimumDescriptionLength': 3,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/init-declarations': ['off'],
    '@typescript-eslint/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      // variables, CONSTANTS, ReactComponents
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      // disallow I prefix for interfaces
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-base-to-string': 'off', // false negative
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'off', // Annoying with autofix on save.
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': ['off', { ignoreEnums: true }], // Not good enough yet
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-type-alias': 'off', // prettier
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-untyped-public-signature': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'off', // Why two rules?
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^[iI]gnore(d)?',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // I'm not sure...
    '@typescript-eslint/prefer-readonlysemi': 'off', // Annoying with autofix on save.
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off', // Anoyying
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': [
      'error',
      {
        parameter: false,
        arrowParameter: false,
        variableDeclaration: false,
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    // collisions
    '@babel/camelcase': 'off',
    'default-param-last': 'off',
    'init-declarations': 'off',
    'lines-between-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',

    // open issues
    'import/no-cycle': 'off', // PENDING: remove this on https://github.com/benmosher/eslint-plugin-import/issues/1453
    'react/jsx-no-useless-fragment': 'off', // Need use-less-fragment for JSX return type
  },
};
