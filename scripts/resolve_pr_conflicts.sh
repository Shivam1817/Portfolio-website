#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   1) Start from an active merge conflict state on branch `work`
#   2) Run: bash scripts/resolve_pr_conflicts.sh
#
# Strategy:
#   Keep the current branch's Operator Mode 2.0 implementation for known conflicted files.

FILES=(
  "src/components/AboutSection.jsx"
  "src/components/ContactSection.jsx"
  "src/components/ExperienceSection.jsx"
  "src/components/FreelanceSection.jsx"
  "src/components/HeroSection.jsx"
  "src/components/Navbar.jsx"
  "src/components/ProjectsSection.jsx"
  "src/components/ShippingSection.jsx"
  "src/components/StartupSection.jsx"
  "src/data/siteContent.js"
  "src/index.css"
  "src/pages/Home.jsx"
)

if ! git rev-parse -q --verify MERGE_HEAD >/dev/null; then
  echo "No active merge conflict state detected (MERGE_HEAD missing)."
  echo "Run this only after: git merge <target-branch>"
  exit 1
fi

for file in "${FILES[@]}"; do
  if git ls-files -u -- "$file" | grep -q .; then
    git checkout --ours -- "$file"
  fi
done

git add "${FILES[@]}"

echo "Resolved listed files using current branch versions."
echo "Next: run npm run lint && npm run build, then commit and push."
