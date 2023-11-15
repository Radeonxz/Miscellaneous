# SSH Setup

## Generate keys - Ubuntu

```
cd ~/.ssh
ssh-keygen -o -t rsa -C "username@email.com"
cat id_rsa.pub
```

Copy the generated public key and add it as a new SSH key.