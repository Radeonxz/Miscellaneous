#### list all global npm packages

```
npm list -g --depth 0
```

#### link local package

```
cd ~/npm-packages
npm link
cd ~/my-app
npm link npm-packages
```

#### unlink local package

```
cd ~/my-app
npm unlink --no-save npm-packages
cd ~/npm-packages
npm unlink
```

#### check outdated packages

```
npm outdated -g --depth 0
```

#### update global package

```
npm update package -g
npm update package@x.x.x
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
