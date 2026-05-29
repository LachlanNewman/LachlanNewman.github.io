## Why

Authoring a spec is currently disconnected from implementation — once a change is merged to main, a developer must manually run `/opsx:apply`, archive, and open a PR. This creates friction and defeats the purpose of spec-driven development. Automating the implementation step closes the loop so that merging a spec to main is the only manual action required.

## What Changes

- New GitHub Actions workflow (`.github/workflows/implement-spec.yml`) that triggers on pushes to `main` touching `openspec/changes/**`
- Workflow detects the change name from the git diff and invokes `anthropics/claude-code-action@v1` with a prompt to apply, archive, and PR the change
- Convention enforced: one OpenSpec change per PR

## Capabilities

### New Capabilities
- `spec-dispatch-workflow`: GitHub Actions workflow that detects a merged spec, dispatches it to Claude Code, and produces an implementation PR automatically

### Modified Capabilities

## Impact

- Adds `.github/workflows/implement-spec.yml`
- Requires `ANTHROPIC_API_KEY` secret to be set on the repository
- Workflow needs `contents: write` and `pull-requests: write` permissions
- No existing code modified; pure addition
