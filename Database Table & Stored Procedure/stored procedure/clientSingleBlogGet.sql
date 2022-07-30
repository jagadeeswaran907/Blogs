CREATE DEFINER=`root`@`localhost` PROCEDURE `clientSingleBlogGet`(blogID int)
BEGIN
select ID,title,body,date_format(createdDate, '%y-%m-%d') as date from blog where isDeleted=false and ID = blogID;
END