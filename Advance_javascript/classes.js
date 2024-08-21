class userinfo
{
    constructor(username , email , password)
    {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass()
    {
        return `${this.password}abc`
    }

    changeusername()
    {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new userinfo("user1" , "user1@gmail.com" , "user1password")
console.log(user1.encryptPass());
console.log(user1.changeusername());