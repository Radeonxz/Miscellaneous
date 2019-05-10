# set upstream to local branch
git branch --set-upstream-to=origin/develop develop

# reset to remote branch
git reset --hard origin/develop

# fetch remote branch to local
git fetch origin develop:develop

# delete remote commits
git push -f origin develop