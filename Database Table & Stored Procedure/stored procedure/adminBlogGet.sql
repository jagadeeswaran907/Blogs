CREATE DEFINER=`root`@`localhost` PROCEDURE `adminBlogGet`()
BEGIN
select ID,title,body,date_format(createdDate, '%y-%m-%d') as date  from blog where isDeleted = false;
END