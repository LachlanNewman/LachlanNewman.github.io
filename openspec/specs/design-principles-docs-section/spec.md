## Requirements

### Requirement: Docs section is enabled
The site SHALL have a working docs section served at `/docs`.

#### Scenario: Docs plugin enabled
- **WHEN** a user visits `/docs`
- **THEN** the Docusaurus docs section is rendered

### Requirement: Design principles category exists
The docs section SHALL include a `design-principles` category in the sidebar.

#### Scenario: Design principles sidebar entry
- **WHEN** the docs sidebar is rendered
- **THEN** a "Design Principles" category is visible containing at least one document

### Requirement: Mock design principle document is accessible
A placeholder document SHALL exist under `docs/design-principles/` to validate the structure.

#### Scenario: Mock doc renders
- **WHEN** a user navigates to the mock design principle doc
- **THEN** the page renders with a title and placeholder body content

### Requirement: Navbar links to docs
The site navbar SHALL include a link to the docs section.

#### Scenario: Navbar docs link
- **WHEN** a user views any page on the site
- **THEN** a navbar item linking to `/docs` or the first doc is visible
