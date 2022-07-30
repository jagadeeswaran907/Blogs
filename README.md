# Blogs

1. Build Following API – Client Side
   1.List of blog articles showing the title, body truncated to 100  characters, and date. It should show only the latest 5 articles:
        I have attached this solution in my Blogs file, Table name is "blog" and stored procedure name is "clientListBlogGet" and API name is "client-blog-get"
   2.Single blog article showing the title, full-body, and the date:
      I have attached this solution in my Blogs file, Table name is "blog" and stored procedure name is "clientSingleBlogGet" and API name is "client-single-         blog-get".
   3.Listing comments of an article. (It should support reply to (n) level. data entry can be done directly to the database) (create two separate
    APIs one using eloquent ORM and without using eloquent ORM):
       This one is Users are Post the comment is dynamically so I connect with the two table main table is "blog" and sub table is "blogcomment" used primary          key ID and subtable ID check with stored procedure name is "clientCommentAdd" and "clientCommentGet" and API name is "comment-add" and "comment-get".

2.Build Following API – Admin
    1.List of all the blog articles:
       I have attached this solution in my Blogs file, Table name is "blog" and stored procedure name is "adminBlogGet" and API name is "blog-get".
    2.Possibility to add a new blog article with a title and body. The title should allow a maximum of 50 characters:
        I have attached this solution in my Blogs file, Table name is "blog" and stored procedure name is "blog-add" and API name is "adminAddBlog".
    3.Possibility to edit an existing blog article:
        I used this solution in same stored procedure add and edit if you give ID is 0 it will add if you give existing ID it will update that blog.stored               procedure name is "blog-add" and API name is "adminAddBlog".
    4.Possibility to delete an article:
       I have used soft delete concept,if blog delete in frontend side it will delete only in frontend not deleted in databse .I have attached this solution in        my Blogs file, Table name is "blog" and stored procedure name is "adminBlogDelete" and API name is "blog-delete".
  
 
