curl http://localhost:4000/todos

StatusCode        : 200
StatusDescription : OK
Content           : [
                      {
                        "id": "1",
                        "title": "Buy groceries",
                        "completed": false,
                        "createdAt": "2026-08-02T10:00:00.000Z"
                      },
                      {
                        "id": "2",
                        "title": "Clean the room",
                        "completed": true,
                       ...
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Origin: *
                    Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
                    Access-Control-Allow-Headers: content-type
                    Connection: keep-alive
                    Keep-Alive: time...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Access-Control-Allow-Methods, GET, HEAD, PUT, PATCH, POST, DELETE], 
                    [Access-Control-Allow-Headers, content-type], [Connection, keep-alive]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 374




curl http://localhost:4000/todos/1

StatusCode        : 200
StatusDescription : OK
Content           : {
                      "id": "1",
                      "title": "Buy groceries",
                      "completed": false,
                      "createdAt": "2026-08-02T10:00:00.000Z"
                    }
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Origin: *
                    Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
                    Access-Control-Allow-Headers: content-type
                    Connection: keep-alive
                    Keep-Alive: time...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Access-Control-Allow-Methods, GET, HEAD, PUT, PATCH, POST, DELETE], 
                    [Access-Control-Allow-Headers, content-type], [Connection, keep-alive]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 108



postman
{
  "title": "spray for good smell",
  "completed": false,
  "createdAt": "2026-08-02T15:00:00Z"
}
[
    {
        "id": "1",
        "title": "Buy groceries",
        "completed": false,
        "createdAt": "2026-08-02T10:00:00.000Z"
    },
    {
        "id": "2",
        "title": "Clean the room",
        "completed": true,
        "createdAt": "2026-08-02T11:00:00.000Z"
    },
    {
        "id": "3",
        "title": "Complete assignment",
        "completed": false,
        "createdAt": "2026-08-02T12:00:00.000Z"
    },
    {
        "title": "spray for good smell",
        "completed": false,
        "createdAt": "2026-08-02T15:00:00Z",
        "id": "sZ4qlliWZXE"
    }
]
When sending a POST request, json-server automatically overrides any manually provided id and generates its own random string ID



postman
{
  "id": "5",
  "title": "spray for good smell",
  "completed": false,
  "createdAt": "2026-08-02T15:00:00Z"
}
[
    {
        "id": "1",
        "title": "Buy groceries",
        "completed": false,
        "createdAt": "2026-08-02T10:00:00.000Z"
    },
    {
        "id": "2",
        "title": "Clean the room",
        "completed": true,
        "createdAt": "2026-08-02T11:00:00.000Z"
    },
    {
        "id": "3",
        "title": "Complete assignment",
        "completed": false,
        "createdAt": "2026-08-02T12:00:00.000Z"
    },
    {
        "title": "spray for good smell",
        "completed": false,
        "createdAt": "2026-08-02T15:00:00Z",
        "id": "sZ4qlliWZXE"
    }
]
When sending a POST request, json-server automatically overrides any manually provided id and generates its own random string ID


breken post:
the post worked every time even when i tried to break it, it should have returned an item with only a generated id.



in postman:
PATCH
http://localhost:4000/todos/EpTQ4sAzc_Y
{
  "completed": true
}
{
    "title": "Test without header",
    "completed": true,
    "createdAt": "2026-08-02",
    "id": "EpTQ4sAzc_Y"
}




in postman:
DELETE
http://localhost:4000/todos/VPeJkmB5ehU
result: item with the "VPeJkmB5ehU" id is deleted



in postman:
GET
http://localhost:4000/todos?completed=true

[
    {
        "id": "2",
        "title": "Clean the room",
        "completed": true,
        "createdAt": "2026-08-02T11:00:00.000Z"
    },
    {
        "title": "Test without header",
        "completed": true,
        "createdAt": "2026-08-02",
        "id": "EpTQ4sAzc_Y"
    }
]