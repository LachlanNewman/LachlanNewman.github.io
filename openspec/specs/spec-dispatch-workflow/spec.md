# Spec: spec-dispatch-workflow

## Purpose

Defines a GitHub Actions workflow that automatically triggers Claude Code to implement an OpenSpec change whenever a spec is merged to main.

## Requirements

### Requirement: Workflow triggers on spec merge
The system SHALL trigger the implementation workflow whenever a push to `main` touches any file under `openspec/changes/**`.

#### Scenario: Spec merged to main
- **WHEN** a commit is pushed to `main` that adds or modifies files under `openspec/changes/`
- **THEN** the implement-spec workflow is triggered

#### Scenario: Push to main with no spec changes
- **WHEN** a commit is pushed to `main` that does not touch `openspec/changes/**`
- **THEN** the implement-spec workflow is NOT triggered

### Requirement: Change name is detected from git diff
The workflow SHALL extract the OpenSpec change name by diffing `HEAD~1` against `HEAD` on the `openspec/changes/` path and reading the first changed directory name.

#### Scenario: Single spec change in the push
- **WHEN** the diff contains files under exactly one `openspec/changes/<name>/` directory
- **THEN** the workflow extracts `<name>` as the change to implement

### Requirement: Claude Code implements the change
The workflow SHALL invoke `anthropics/claude-code-action@v1` with a prompt instructing Claude to apply the detected change, archive it, and create a PR.

#### Scenario: Successful dispatch
- **WHEN** the change name is detected and `ANTHROPIC_API_KEY` is available
- **THEN** the action runs with a prompt equivalent to: "Run /opsx:apply <name>, then /opsx:archive <name>, then create a PR with the implementation"

### Requirement: Workflow has required permissions
The workflow SHALL declare `contents: write` and `pull-requests: write` permissions so Claude Code can push a branch and open a PR.

#### Scenario: Claude creates implementation branch and PR
- **WHEN** Claude finishes implementing and archiving the change
- **THEN** Claude pushes a new branch and opens a PR against `main`
