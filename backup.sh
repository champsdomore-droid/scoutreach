#!/bin/bash
# Workspace backup script to GitHub

REPO="champsdomore-droid/scoutreach"
BRANCH="main"
GIT_TOKEN="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"
WORKSPACE_DIR="/root/.openclaw/workspace"

cd "$WORKSPACE_DIR" || exit 1

# Initialize git if not a repo
if [ ! -d ".git" ]; then
    git init
    git config user.email "scott@example.com"
    git config user.name "Scott"
    git remote add origin "https://champsdomore-droid:$GIT_TOKEN@github.com/$REPO.git"
    # Create initial commit if needed
    git add -A
    git commit -m "Initial workspace backup" 2>/dev/null || true
    git branch -M main
    git push -u origin main 2>/dev/null || true
else
    git config user.email "scott@example.com"
    git config user.name "Scott"
    git remote set-url origin "https://champsdomore-droid:$GIT_TOKEN@github.com/$REPO.git"
    git pull origin $BRANCH --rebase 2>/dev/null || true
    git add -A
    git commit -m "Workspace backup - $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "No changes to commit"
    git push origin $BRANCH
fi

echo "✅ Backup complete - $(date '+%Y-%m-%d %H:%M')"