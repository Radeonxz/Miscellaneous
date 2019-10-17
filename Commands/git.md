#### set upstream to local branch
```
git branch --set-upstream-to=origin/develop develop
git branch --set-upstream-to origin/develop develop
```

#### reset to remote branch
```
git reset --hard origin/develop
```

#### fetch remote branch to local
```
git fetch origin develop:develop
```

#### delete remote commits
```
git push -f origin develop
```

#### git stash
Temporarily stores all the modified tracked files
```
git stash save
```
Restores the most recently stashed files
```
git stash pop
```
Lists all stashed changesets
```
git stash list
```
Discards the most recently stashed changeset
```
git stash drop
```

#### git rebase
```
git rebase -i HEAD~3
```