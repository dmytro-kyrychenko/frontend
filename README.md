# Frontend

This repository consists of two angular applications:
- [admin UI](https://github.com/YangCatalog/frontend/tree/master/admin-ui)
- [yangcatalog UI](https://github.com/YangCatalog/frontend/tree/master/yangcatalog-ui)

In addition, it also contains some static web content for [yangcatalog.org](https://yangcatalog.org/).

## NGINX Configuration

Server Side Includes must be enabled for the static page to work (mainly to have similar header and footer).

```
location / {
       # Allows for server side includes
       ssi on ;
       ssi_last_modified on ;
}
```
