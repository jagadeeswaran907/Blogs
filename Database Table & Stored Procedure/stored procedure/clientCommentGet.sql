CREATE DEFINER=`root`@`localhost` PROCEDURE `clientCommentGet`(BlogID int)
BEGIN
select blog.title,blogComment.comment,blogComment.blogID from blogComment left join blog on blog.ID = blogComment.blogID where blogComment.blogID= BlogID; 
END