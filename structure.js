/*
> Signup with Email > otp > create password
> Onboardning flow > Pofile, Bio, MobileNumber, Gender > Onboardning Completed
> Get Profile, Update Profile, Delete Profile

> Craete Post, Get Post, Update Post, Delete Post
> Like/Comment

> Followers/Followings

> Chat Module with image upload

> Users
- name
- Email

> Post
-

> Nodejs, Expressjs, Passportjs, Multer, PostgreSQL, Sequelize




==========USERTABLE==========
userid***primary key
name
username
Email
password
Followers[userids]
Followings[userids]
MobileNumber
profilePicture:"url"
Bio"string"
Gender
posts:[postid]
onBoarding:boolean

=========CONNECTION=========
connectionId***primary key
sender: 
receiver: 
status: enum[open,accepted,rejected,blocked]

query for follower= CONNECTION.find({$and:[{receiver:loginUser.id},{status:accepted}]})
query for following= CONNECTION.find({$and:[{sender:loginUser.id},{status:accepted}]})



connectionId***primary key
userId***foreign key
followersId***foreign key
followingsId***foreign key

=========FOLLOWERS=========
connectionId***foreign key
followersId***primary key
followers:[userIds]


=========FOLLOWINGS=========
followingsId***primary key



==========POST==========
likeCommentId***foreign key
userid***foriegn key
postid***primary key
imageUrl=[multiple image]
description

LikeCount[likeids] // while get like for post at that time we are going to find likeCount 
Comments[commmentIds] // while get comments for post at that time we are going to find comments
timestamps

==========THREAD===========
threadId***primary key
users:[user1,user2]
timestamps

========MESSAGE============
threadId***foreign key
text:{ msg:"string", sender:user/user2, timestamp }
document:[jpg,pdf,png].length=5







========LIKE AND COMMENT======
likeCommentId***primary key
type:enum:[comment,like]
postid:***foriegn key(post)
userid:***foriegn key(user)
timestamps












// ========COMMENTS=======
// commmentId***primary key
// comment:"string"
// timestamps

// postid:***foriegn key(post)
// userid:***foriegn key(user)

// ========LIKES=======
// likeId:***primary key
// postid:***foriegn key(post)
// userid:***foriegn key(user)
// timestamps

---------apis--------------

=======user========
1.Signup input email====>email otp verification=====> create password====> confirm password====> next 

2.onBoarding

3.login (if)onBoarding:true===>next

4.userProfile****** user can get any user from username(only for get api)/update/delete 

5.userPost****** get/update/delete 

6.like and comment if(loginUser will exist in user.posts) dislike else{ like } if(req.body.comment) find user through postid and then comment[].push(req.body.comment)

7.

*/
