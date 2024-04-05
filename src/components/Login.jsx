import {Link} from "react-router-dom";  
export default function LoginPage(){
    return(
        <div>
            <input type="text" />
            <input type="password" />
            <button>Войти</button>
            <Link to="/reg">
                <p>Нет аккаунта? Зарегистрируйтесь</p>
            </Link>
        </div>
    );
}