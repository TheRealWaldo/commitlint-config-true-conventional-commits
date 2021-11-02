module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        // 1. Commits MUST be prefixed with a type, which consists of a noun, feat, fix, etc., followed by the OPTIONAL scope, OPTIONAL !, and REQUIRED terminal colon and space.
        // 2. The type feat MUST be used when a commit adds a new feature to your application or library.
        // 3. The type fix MUST be used when a commit represents a bug fix for your application.
        'type-empty': [2, 'never'],
        'type-max-length': [0, 'always', Infinity],
        'type-min-length': [0, 'always', 0],
        'subject-exclamation-mark': [0, 'never'],

        // 4. A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., fix(parser):
        'scope-enum': [0, 'always', []],
        'scope-empty': [0, 'never'],
        'scope-max-length': [0, 'always', Infinity],
        'scope-min-length': [0, 'always', 0],

        // 5. A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., fix: array parsing issue when multiple spaces were contained in string.
        'subject-empty': [2, 'never'],
        'subject-full-stop': [0, 'never', '.'],
        'header-max-length': [0, 'always', Infinity],
        'header-min-length': [0, 'always', 0],
        // NOTE: 100 is arbitrary; specification only starts 'short', hence a warning
        'subject-max-length': [1, 'always', 100],
        'subject-min-length': [0, 'always', 0],
        'header-full-stop': [0, 'never', '.'],

        // 6. A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.
        'body-leading-blank': [2, 'always'],
        
        // 7. A commit body is free-form and MAY consist of any number of newline separated paragraphs.
        'body-max-line-length': [0, 'always', Infinity],
        'body-max-length': [0, 'always', Infinity],
        'body-min-length': [0, 'always', 0],
        'body-case': [0, 'always', []],

        // 8. One or more footers MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed by either a :<space> or <space># separator, followed by a string value (this is inspired by the git trailer convention).
        'footer-leading-blank': [2, 'always'],
        'footer-empty': [0, 'never'],
        'footer-max-length': [0, 'always', Infinity],
        'footer-max-line-length': [0, 'always', Infinity],
        'footer-min-length': [0, 'always', 0],
        'references-empty': [0, 'never'],

        // 9. A footer’s token MUST use - in place of whitespace characters, e.g., Acked-by (this helps differentiate the footer section from a multi-paragraph body). An exception is made for BREAKING CHANGE, which MAY also be used as a token.
        // 10. A footer’s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer token/separator pair is observed.
        // 11. Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the footer.
        // 12. If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g., BREAKING CHANGE: environment variables now take precedence over config files.
        // 13. If included in the type/scope prefix, breaking changes MUST be indicated by a ! immediately before the :. If ! is used, BREAKING CHANGE: MAY be omitted from the footer section, and the commit description SHALL be used to describe the breaking change.
        // NOTE: There is nothing in commit-lint to support the above rules, yet

        // 14. Types other than feat and fix MAY be used in your commit messages, e.g., docs: updated ref docs.
        // NOTE: commit-lint currently does NOT do a case-insensitive check on these; so cannot use for warnings
        'type-enum': [
            1,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],

        // 15. The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.
        // NOTE: type-enum and case neutrality are not compatible in commit-lint
        'type-case': [0, 'always', []],
        'subject-case': [0, 'always', []],
        'scope-case': [0, 'always', []],
        'header-case': [0, 'always', []],

        // NOTE: The following rules are not mentioned in the specification
        'signed-off-by': [0, 'always', 'Signed-off-by:'],
        'trailer-exists': [0, 'always', 'Signed-off-by:'],
	},
};