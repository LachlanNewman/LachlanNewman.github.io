## 1. GitHub Actions Workflow

- [x] 1.1 Create `.github/workflows/implement-spec.yml` with push trigger on `main` filtered to `openspec/changes/**`
- [x] 1.2 Add `permissions` block with `contents: write` and `pull-requests: write`
- [x] 1.3 Add a step to extract the change name by diffing `HEAD~1..HEAD` on `openspec/changes/` and outputting the first changed directory name
- [x] 1.4 Add the `anthropics/claude-code-action@v1` step with `ANTHROPIC_API_KEY` secret and a prompt to apply, archive, and PR the detected change
