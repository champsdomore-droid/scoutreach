#!/bin/bash
# Workspace backup script to GitHub

REPO="champsdomore-droid/scoutreach"
BRANCH="main"
GIT_TOKEN="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"
WORKSPACE_DIR="/root/.openclaw/workspace"

cd "$WORKSPACE_DIR" || exit 1

# Fix git ownership
git config --global --add safe.directory "$WORKSPACE_DIR"

git config user.email "scott@example.com"
git config user.name "Scott"
git remote set-url origin "https://champsdomore-droid:$GIT_TOKEN@github.com/$REPO.git"

# Rename branch to main
git branch -M main 2>/dev/null || true

# Pull latest, then push
git pull origin $BRANCH --rebase 2>/dev/null || true

# Add files (exclude git repos)
git add -A
git reset soccer-recruiting 2>/dev/null || true

git commit -m "Workspace backup - $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "No changes to commit"

git push origin $BRANCH 2>/dev/null || git push -u origin $BRANCH

echo "✅ Backup complete - $(date '+%Y-%m-%d %H:%M')"