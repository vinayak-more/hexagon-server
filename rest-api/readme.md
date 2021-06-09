###Running Myslq container
```$xslt
docker run -d \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_DATABASE=hexagon \
-e MYSQL_USER=hexagon \
-e MYSQL_PASSWORD=hexagon \
-p 3306:3306 \
--name mysql \
mysql:5.7 

```

###Running backend
```$xslt
docker run -it \
--link mysql:mysql \
-e RDS_HOST=mysql \
-p 8080:8080 \
com.hexagon/app:0.0.1-SNAPSHOT 
```