### check pid on port

#### linux

```
netstat -ano | findStr "8080"
```

#### windows

```
lsof -i:8080
```

### kill process by pid

#### linux

```
kill -9 1234
```

#### windows

```
taskkill /F /PID 1234
```
