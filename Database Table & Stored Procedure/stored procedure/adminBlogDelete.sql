CREATE DEFINER=`root`@`localhost` PROCEDURE `adminBlogDelete`(blogID int)
BEGIN
update blog set isDeleted = true where ID = blogID;
select "Blog has been Deleted successfully" as msg , 200 as status_code;
END