#### config username and email

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

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

#### list all remote branches

```
git remote -v
```

#### delete remote commits

```
git push -f origin develop
```

#### amend commit message

```
git commit --amend
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
