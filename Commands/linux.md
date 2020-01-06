#### display system information

```
uname -a
```

#### show size, used space and available space

```
df -h -x squashfs
```

#### check ssh

```
cat ~/.ssh/id_rsa.pub
```

#### set file permissions

```
0: No permission
1: Execute permission
2: Write permission
3: Write and execute permissions
4: Read permission
5: Read and execute permissions
6: Read and write permissions
7: Read, write and execute permissions

chmod -R 765 example.txt
```

#### change owner and group owner

```
sudo chown owner:owner example.txt
```

#### show process starus

```
ps -ef
```

#### shutdown

```
shutdown
shutdown now
```
