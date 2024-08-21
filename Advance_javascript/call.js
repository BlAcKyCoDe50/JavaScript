function setusername(username)
{
    this.username = username
}

function user(email , password, username)
{
    setusername.call(this , username);
    this.email = email
    this.password = password

}

const user1 = new  user("abc@gmail.com" , "password" , "user1")
console.log(user1);