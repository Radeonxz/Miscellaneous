# Env

#### dump from mongo container

```
docker exec <CONTAINER> sh -c 'exec mongodump --db somedb --gzip --archive' > dump_`date "+%Y-%m-%d"`.gz
```

#### dump from mongodb atlas

```
mongodump --host 'mongo_atlas_uri' --ssl --username 'user_name' --password 'password' --authenticationDatabase admin --db 'db_name --gzip --archive=dump_`date "+%Y-%m-%d"`.gz
```

#### mongo restore to local

```
mongorestore --gzip --archive=file_name.gz
```

#### mongo restore to mongodb atlas

```
mongorestore --host 'mongo_atlas_uri' --ssl --username 'user_name' --password 'password' --authenticationDatabase admin --gzip --archive='local_file.gz'
```

# Query

#### Search multiple values

```
db.getCollection('collection_name').find({key: {"$in": ["values_1", "values_2"]}})
```
