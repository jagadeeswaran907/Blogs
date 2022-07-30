CREATE DEFINER=`root`@`localhost` PROCEDURE `adminAddBlog`(blogID int,Title varchar(50),Body text)
BEGIN
if blogID = 0
then 
    if not exists(select title from blog where blog.title = Title)
    then
    insert into blog (title,body,createdDate,isDeleted) values (Title,substring(Body,1,50),now(),false);
	select "Blog has been added successfully" as msg , 200 as status_code;
	else
	select "Blog Name Already existing" as msg , 400 as status_code;
    end if;
 else
 update blog set title=Title , body = substring(Body,1,50), updatedDate = now() where ID = blogID;
 select "Blog has been Updated successfully" as msg , 200 as status_code;
 end if;
END