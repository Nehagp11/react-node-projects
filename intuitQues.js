// CMS DATA VERSIONS USING NO SQL DATABASE, 
1. DIVIDE DATA CATEGORIES AND RELOAD RESOURCES APIs 
2. APIs to read and write update to db and a caching server 
3. posts would have a unique ID and content type 

POST = {
    ID : UUID,
    CATEGORY : "LEARNING",
    TYPE : "Article",
    CONTENT : List<data>, (JSON/HTML/MARKUP) 
    LMT : time,
    state : Enumerator(Published, Draft);
}

1. API to read post data : /end-point/post-id?v=1 (GET Request)

2. API to Create/Write post data : /end-point/update-post (POST)

Payload = {
    ID: UUID,
    CATEGORY : "LEARNING",
    TYPE : "Article",
    CONTENT : data (JSON/HTML/MARKUP) 
}

3. APIs to force DB Update, Redis 

4. Content List where last item would be updated-one 

5. API to publish the data 

6. Authentication and Authorisation







