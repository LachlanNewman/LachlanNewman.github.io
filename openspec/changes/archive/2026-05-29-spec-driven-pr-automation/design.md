## Context

The repo currently has one GitHub Actions workflow (`deploy.yml`) that builds and deploys the Docusaurus site on push to main. OpenSpec change artifacts (proposal, design, specs, tasks) live under `openspec/changes/<name>/` and are committed to the repo. The opsx skills (apply, archive) are committed under `.claude/commands/opsx/` and `.claude/skills/`, making them available to any Claude Code session that checks out the repo.

## Goals / Non-Goals

**Goals:**
- Automatically detect when a spec is merged to main and invoke Claude Code to implement it
- Archive the change and open an implementation PR without human intervention
- Use the existing `anthropics/claude-code-action@v1` rather than custom API integration

**Non-Goals:**
- Handling multiple specs per PR
- Retry logic or failure recovery beyond what the action provides
- Validating spec quality before dispatch
- Running tests or CI on the implementation PR automatically

## Decisions

**Use `anthropics/claude-code-action@v1` with a `prompt` input**
The action handles checkout, Claude invocation, git operations, and PR creation natively. Building a custom integration with the Anthropic API would duplicate all of this. The action supports non-interactive dispatch via the `prompt` input.

**Detect change name from git diff**
Since one spec per PR is a hard convention, diffing `HEAD~1..HEAD` on `openspec/changes/` and extracting the first changed directory is sufficient. No metadata file or commit message convention needed.

Alternative considered: require the change name as a workflow input (manual dispatch). Rejected — the goal is zero manual steps after merge.

**Pass opsx skills via repo checkout**
The skills in `.claude/commands/opsx/` and `.claude/skills/` are committed to the repo. The action checks out the repo before invoking Claude, so the skills are available. No plugin marketplace or external dependency needed.

**Prompt instructs Claude to apply, archive, and PR in sequence**
The prompt tells Claude to run `/opsx:apply <name>`, then `/opsx:archive <name>`, then create a PR. This keeps the workflow stateless — each run is self-contained.

## Risks / Trade-offs

- **Claude produces a broken implementation** → The implementation PR still goes through human review before merging; broken code is caught there
- **Action runner doesn't have Claude Code CLI** → `anthropics/claude-code-action@v1` bundles its own Claude Code environment; this is handled by the action itself
- **Spec merged but dispatch fails** → The spec stays in `openspec/changes/` on main (natural pending queue); a developer can re-run the action manually or via workflow dispatch
- **`ANTHROPIC_API_KEY` not set** → Workflow fails immediately with a clear auth error; no silent failures
