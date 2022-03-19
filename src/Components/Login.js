export const Login = () => {
    
    return(
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password"/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}
