#### list all global npm packages
```
npm list -g --depth 0
```

#### check global location
```
npm config get prefix
```

#### packages audit
```
npm run audit
```

#### audit packages fix
```
npm audit fix
```

#### clear npm cache
```
npm cache clean --force
```

#### npm setup proxy
```
npm config set proxy http://proxy_host:port
```

#### npm check setup
```
npm config ls -l
```