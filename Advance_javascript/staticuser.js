class user
{
    constructor(username, userid)
    {
        this.username = username
    }

    logme()
    {
        console.log(`username : ${this.username}`);
        return `${this.use}`
    }
  static  createId()
    {
        this.userid = Math.round((Math.random()*1000))
        console.log(`user id : ${this.userid}`);
    }
}

class admin extends user
{
    constructor(username)
    {
        super(username)
    }
}

const user1 = new user("testinguser1")
user1.logme();
user.createId()
const user2 = new admin("testinguser2")
admin.createId()
