#!/bin/bash
# Auto-backup daemon - runs daily at 2am UTC
# Usage: ./backup-daemon.sh GITHUB_TOKEN

TOKEN="${1:-${GITHUB_TOKEN}}"

if [ -z "$TOKEN" ]; then
    echo "Usage: ./backup-daemon.sh ghp_your_token"
    exit 1
fi

BACKUP_SCRIPT="/root/.openclaw/workspace/backup.sh"

echo "🚀 Auto-backup daemon started - will run daily at 2am UTC"

while true; do
    # Get current UTC time
    CURRENT_HOUR=$(date -u +%H)
    CURRENT_MIN=$(date -u +%M)
    
    # Run backup at 2:00 AM UTC
    if [ "$CURRENT_HOUR" = "02" ] && [ "$CURRENT_MIN" = "00" ]; then
        echo "📦 Running scheduled backup..."
        $BACKUP_SCRIPT "$TOKEN"
        echo "✅ Backup done at $(date -u)"
        # Wait 70 seconds to avoid running twice
        sleep 70
    fi
    
    sleep 30
done