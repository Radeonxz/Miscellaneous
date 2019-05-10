########## ENV ##########

# dump from mongo container
docker exec <CONTAINER> sh -c 'exec mongodump --db somedb --gzip --archive' > dump_`date "+%Y-%m-%d"`.gz

# mongo restore to local
mongorestore --gzip --archive=file_name.gz

########## Query ##########