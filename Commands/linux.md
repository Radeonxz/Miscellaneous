#### display system information

```
Use the -a (all) option to see everything
uname -a
```

```
Use the -s (kernel name) option to see the type of kernel
uname -s
```

```
Use the -r (kernel release) option to see the kernel release
uname -r
```

```
Use the -v (kernel version) option to see the kernel version
uname -v
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
