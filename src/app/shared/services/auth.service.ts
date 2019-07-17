export class AuthService {

    private isAuthenticated = false; //!!!

    login(){
        this.isAuthenticated = true;
    }
    logout(){
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean{
        return !!window.localStorage.getItem('user');
        // return this.isAuthenticated;
    }

}