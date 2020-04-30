# MS SQL Server setup

## Mac

### 1. Install Docker Desktop

Doc: [link](https://docs.docker.com/docker-for-mac/)

### 2. Install SQL Server container images with Docker

Doc: [link](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash)

#### 2.1 Pull SQL Server official image

```
docker pull microsoft/mssql-server-linux
```

#### 2.2 Run pulled image with configs

Name container as `SQLServer`
Add `ACCEPT_EULA=Y` and `SA_PASSWORD=SQLPass@1234`

```
docker run -d --name **SQLServer** -e '**ACCEPT_EULA=Y**' -e '**SA_PASSWORD=SQLPass@1234**' -p 1433:1433 microsoft/mssql-server-linux
```

### 3 Install Azure Data Studio

Doc: [link](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15)

#### 3.1 Connect Azure Data Studio to service

```
Server: localhost
User name: sa
Password: SQLPass@1234
```
