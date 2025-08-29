#!/bin/bash
set -e

apk add --no-cache git

CHANGED_APPS=$(git fetch origin main && git diff --name-only origin/main...HEAD | grep '^apps/landing-' | cut -d/ -f2 | sort -u)

if [ -z "$CHANGED_APPS" ]; then
  echo "No landing apps changed. Skipping build."
  exit 0
fi

echo "Changed apps: $CHANGED_APPS"

for APP in $CHANGED_APPS; do
  echo "Building $APP..."
  pnpm install --filter=$APP...
  pnpm --filter=$APP run build
  pnpm --filter=$APP next export
  gsutil -m rsync -r apps/$APP/out gs://${_GCS_BUCKET}/$APP/
  gcloud compute url-maps invalidate-cdn-cache ${_CDN_URLMAP} --path "/$APP/*"
done