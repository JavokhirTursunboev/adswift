


const LoginPage = async () => {


    return (
        <div className="mx-auto container">
          

            <form action='' className='flex flex-col items-center justify-center'>
                <input type='email' name='email' placeholder='email' />
                <input type='password' name='password' placeholder='password' />
                <button type="submit"> Login</button>
            </form>
        </div>
    );
}

export default LoginPage;