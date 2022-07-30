CREATE DEFINER=`root`@`localhost` PROCEDURE `clientListBlogGet`()
BEGIN
select title,substring(body,1,100) as body,date_format(createdDate, '%y-%m-%d') as date from blog where isDeleted=false order by ID desc limit 5;
END