CREATE DEFINER=`root`@`localhost` PROCEDURE `clientCommentAdd`(Comment varchar(50),BlogID int)
BEGIN
insert into blogcomment (comment,createdDate,blogID) values (Comment,now(),BlogID);
select "Comment has been added successfully" as msg , 200 as status_code;
END