# Testing Unchained
Quelltexte und Folien für den Vortrag "Testing Unchained" auf der Developer Week 2016

## Installation
```bash
npm install
```

## Jasmine
```bash
node_modules/jasmine/bin/jasmine.js
```

Tests in: [spec/some-class-spec.js](spec/some-class-spec.js)

## CasperJS
```bash
node_modules/casperjs/bin/casperjs test casper-tests/
```

Tests in [casper-tests/wikipedia-test.js](casper-tests/wikipedia-test.js)

## cucumber.js
```bash
node_modules/cucumber/bin/cucumber.js
```

Tests in:
- [features/wikipedia-einfach.feature](features/wikipedia-einfach.feature)
- [features/wikipedia-extended.feature](features/wikipedia-extended.feature)
- [features/step_definitions/wikipedia_steps.js](features/step_definitions/wikipedia_steps.js)