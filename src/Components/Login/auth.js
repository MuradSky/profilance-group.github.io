export default (login, password, users, $this) => {
    let user = users.find(item => {
        if(item.login === login) return item.login
        if(item.password === password) return item.password
    })
    if(user === undefined) {
        $this.setState({isSuccess : true});
        return false
    } else if(user.login === login && user.password === password) {
        let uresLogg = {
            id : user.id,
            login : login[0].toUpperCase() + login.slice(1),
            isLogin : true,
        }
        localStorage.setItem("user", JSON.stringify(uresLogg))
        $this.setState({
            login:"",
            password:"",
            isAuth: true,
            isSuccess : false
        })
        $this.props.handleLogin()
        window.location.reload();
    }
}
