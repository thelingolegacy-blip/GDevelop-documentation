# Documentation Studio Release System

Studio Mode stays on for the GDevelop documentation deployment lane. This file is an operations checklist for the Vercel-hosted documentation fork; it is not end-user GDevelop documentation.

## Release stages

1. **Staging** — every documentation change starts in a pull request or preview deployment.
2. **QA Review** — validate MkDocs config, links touched by the change, Vercel config, and generated output expectations.
3. **Studio Review** — confirm the documentation remains clear, useful, and user-facing without exposing implementation-only details.
4. **Production Deployment** — merge only after validation and review pass.
5. **Monitoring** — watch Vercel Web Analytics, Speed Insights, deployment health, and reported documentation routing issues.
6. **Iteration** — fixes return to staging, pass QA and Studio Review, then ship.

## Required release gate

Run lightweight validation before merge:

```bash
python3 -m json.tool vercel.json >/dev/null
```

When dependencies are available, also run the documented MkDocs build command from `vercel.json` or the repository README.

## Documentation QA checklist

- `vercel.json` remains valid JSON and preserves the MkDocs build command and `site` output directory.
- Published documentation changes stay user-facing and useful for creators.
- Published pages avoid implementation-only details that do not help users create games.
- Vercel security headers remain present.
- No secret, API token, or credential appears in documentation or config.

## 48-hour post-launch cycle

- Check pageviews, LCP, CLS, INP, and FCP after production deploy.
- Log any broken-link, routing, clarity, or performance issue against the Docs world.
- Fix in staging, validate again, review content quality, then redeploy.
