# Security Notes

## Summary

npm audit reports a high-severity advisory affecting Next.js 14.x. The automated fix recommends upgrading to Next 16, which is a breaking change for this project.

## Advisory Details

Record the npm audit advisory IDs and links here:

- Advisory ID: (add from npm audit)
- Link: (add from npm audit)

## Decision

We are not upgrading to Next 16 immediately because it is a breaking change and requires a dedicated migration and QA pass.

## Mitigation Applied

- Disabled Next.js image optimization (`images.unoptimized = true`).
- This site is static and does not use remote image optimization (`remotePatterns` is not configured).

## Future Task

- Evaluate Next 16 upgrade in a dedicated branch with QA checklist.
