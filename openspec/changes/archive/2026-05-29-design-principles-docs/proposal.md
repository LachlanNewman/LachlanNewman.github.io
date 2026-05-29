## Why

The site has no docs section — only a blog. Adding a design principles docs section creates a home for engineering/design principles that can grow over time, with a mock document providing the initial structure to validate the setup.

## What Changes

- Enable the Docusaurus docs plugin in `docusaurus.config.ts` (currently `docs: false`)
- Create a `docs/design-principles/` directory
- Add one mock design principle document as a structural placeholder
- Add a "Docs" or "Design Principles" link to the navbar

## Capabilities

### New Capabilities
- `design-principles-docs-section`: Docs infrastructure and first mock design principle document

### Modified Capabilities

## Impact

- Modifies `docusaurus.config.ts` (enable docs, update navbar)
- Modifies `sidebars.ts` if needed
- Adds `docs/design-principles/` directory with one `.md` file
