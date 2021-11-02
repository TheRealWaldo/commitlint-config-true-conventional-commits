import lint from '@commitlint/lint';
import {rules, parserPreset} from '.';

const commitLint = async (message) => {
	const preset = await require(parserPreset)();
	return lint(message, rules, {...preset});
};

const messages = {
	validMessages: [
		'fix: some message',
		'fix(scope): some message',
		'fix(scope): some Message',
		'fix(scope): some message\n\nBREAKING CHANGE: it will be significant!',
		'fix(scope): some message\n\nbody',
		'fix(scope)!: some message\n\nbody',
        'feat: Some message.',
        'feat!: Some message',
        'feat: this is a short description\n\nThis is a really long body that should probably be shorter but actually does not matter according to conventional commits.  Body can be any length!',
	],
    warnMessages: [
        'ug: some message',
        'fix: this is a really long header that should not fail because it is just really long but maybe I can make it longer',
    ],
    errorMessages: [
        'just a message',
        'fix: message\nbody',
        'fix:',
        'feat: this message should fail\n\nbecause the footer does not have a line break\nBREAKING CHANGE: whoops',
        // Would expect this to fail, but does not due to https://github.com/conventional-changelog/commitlint/issues/2093
        // 'fix(): message',
    ],
};


test('error messages', async () => {
	const errorInputs = await Promise.all(
		messages.errorMessages.map((input) => commitLint(input))
	);

	errorInputs.forEach((result) => {
		expect(result.errors).not.toEqual([]);
		expect(result.warnings).toEqual([]);
        expect(result.valid).toBe(false);
	});
});

test('warning messages', async () => {
	const warnInputs = await Promise.all(
		messages.warnMessages.map((input) => commitLint(input))
	);

	warnInputs.forEach((result) => {
		expect(result.errors).toEqual([]);
		expect(result.warnings).not.toEqual([]);
        expect(result.valid).toBe(true);
	});
});

test('valid messages', async () => {
	const validInputs = await Promise.all(
		messages.validMessages.map((input) => commitLint(input))
	);

	validInputs.forEach((result) => {
		expect(result.valid).toBe(true);
		expect(result.errors).toEqual([]);
		expect(result.warnings).toEqual([]);
	});
});