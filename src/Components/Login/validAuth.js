export default (login, password, $this) =>{
    (login < 3) ?
        $this.setState({isLoginErr: true}) : $this.setState({isLoginErr: false});
    (password < 3) ?
        $this.setState({isPassError: true}) : $this.setState({isPassError: false});
}