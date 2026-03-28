#!/bin/bash
# Workspace backup script to GitHub
# Usage: ./backup.sh GITHUB_TOKEN

REPO="champsdomore-droid/scoutreach"
BRANCH="main"
WORKSPACE_DIR="/root/.openclaw/workspace"

GIT_TOKEN="${1:-${GITHUB_TOKEN}}"

if [ -z "$GIT_TOKEN" ]; then
    echo "❌ Error: Provide GitHub token as argument or set GITHUB_TOKEN env var"
    echo "Usage: ./backup.sh ghp_your_token"
    exit 1
fi

cd "$WORKSPACE_DIR" || exit 1

git config --global --add safe.directory "$WORKSPACE_DIR"
git config user.email "scott@example.com"
git config user.name "Scott"

git remote remove origin 2>/dev/null || true
git remote add origin "https://champsdomore-droid:$GIT_TOKEN@github.com/$REPO.git"

git branch -M main 2>/dev/null || true
git add -A -f
git reset soccer-recruiting 2>/dev/null || true

git commit -m "Workspace backup - $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "No changes to commit"
git push origin $BRANCH -f

echo "✅ Backup complete - $(date '+%Y-%m-%d %H:%M')"