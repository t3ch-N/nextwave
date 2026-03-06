@echo off
echo Removing large files from Git history...
echo This may take a few minutes...
echo.

REM Remove the large files from all commits
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch 'public/images/IACCTW - GLEE HOTEL EDITED-3-001.zip' 'public/videos/1st 30min documentary.mp4' 'public/videos/Unconfirmed 3097.crdownload'" --prune-empty --tag-name-filter cat -- --all

REM Remove the large image folder
git filter-branch --force --index-filter "git rm -r --cached --ignore-unmatch 'public/images/IACCTW - GLEE HOTEL EDITED'" --prune-empty --tag-name-filter cat -- --all

echo.
echo Cleaning up...
git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo.
echo Done! Large files removed from Git history.
echo You can now force push with: git push origin main --force
