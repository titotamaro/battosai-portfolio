@echo off
cd /d "%~dp0"
echo Running Git push for CyberPunk Portfolio...
git remote set-url origin https://github.com/titotamaro/battosai-portfolio.git
git status --short
if not errorlevel 1 (
    git add .
    git commit -m "Deploy CyberPunk Portfolio to battosai-portfolio"
    git push origin master
) else (
    echo Git command failed. Please ensure Git is installed and this is a Git repository.
)
echo Done.
pause
