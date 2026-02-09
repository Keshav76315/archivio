# Contributing to Archivio

## Documentation Policy

**All code changes must be accompanied by documentation updates.**

### Required Updates

| Change Type | Update Required |
|-------------|-----------------|
| Backend code | `backend/DEVLOG.md` |
| Frontend code | `frontend/DEVLOG.md` |
| New bug/issue | `FIXME.md` |
| Fixed issue | Remove from `FIXME.md` |
| Completed task | Mark `[x]` in `TODO.md` |
| New feature idea | `ROADMAP.md` (Future Ideas section) |

### DEVLOG Entry Format

```markdown
## YYYY-MM-DD

### Feature/Fix Title
- Brief description of what was done
- Why it was done (if not obvious)

**Files changed:**
- `path/to/file1.py`
- `path/to/file2.jsx`
```

### Pull Request Checklist

Before submitting a PR, verify:

- [ ] Code compiles/runs without errors
- [ ] DEVLOG updated with changes
- [ ] FIXME.md updated if applicable
- [ ] TODO.md updated if applicable
- [ ] New functions have docstrings/JSDoc
- [ ] No `console.log` or `print()` debug statements left

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
**Scopes:** `backend`, `frontend`, `infra`, `docs`

### Code Style

- **Python:** Black formatter, type hints encouraged
- **JavaScript/TypeScript:** Prettier, ESLint rules
- **Naming:** Clear, descriptive names over abbreviations

---

*Following these guidelines keeps our codebase maintainable and helps onboard new contributors quickly.*
