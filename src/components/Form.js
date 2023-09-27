import React from 'react'
import { Link } from 'react-router-dom'

export const Form = () => {
  return (
    <><div class="container py-4 min-vh-100 d-flex flex-column justify-content-center">
    <div class="row">
        <div class="col-xl-10 mx-auto">
            <div class="card border-0 shadow">
                <div class="row no-gutters justify-content-center">
                    <div class="col-sm-6 text-center py-5">
                        <h3 class="font-weight-bold">Sign-in</h3>
                        <div class="d-flex my-3 justify-content-center">
                            <Link    to="/" class="mx-1 btn btn-light "><i class="fab fa-facebook"></i></Link>
                            <Link to="/" class="mx-1 btn btn-light "><i class="fab fa-twitter-square"></i></Link>
                            <Link to="/" class="mx-1 btn btn-light "><i class="fab fa-linkedin"></i></Link>
                        </div>
                        <form role="form">
                            <div class="form-group">
                                <label for="inputEmailForm" class="sr-only control-label">Email</label>
                                <div class="col-8 col-sm-12 col-md-10 mx-auto">
                                    <input type="text" class="form-control" 
                                    id="inputEmailForm" placeholder="email" required=""/>
                                    <div class="invalid-feedback">Oops, email is required</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputPasswordForm" class="sr-only control-label">Password</label>
                                <div class="col-8 col-sm-12 col-md-10 mx-auto">
                                    <input type="text" class="form-control" 
                                    id="inputPasswordForm" placeholder="password" required=""
                                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$" 
                                    autocomplete="no"/>
                                    <div class="valid-feedback">Nice looks good!</div>
                                    <div class="invalid-feedback">6 chars (1 upper, 1 lower &amp; numeric)</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="mx-auto">
                                    <a href="#" class="small text-dark">Forgot your password?</a>
                                </div>
                            </div>
                            <div class="form-group justify-content-center">
                                <div class="pb-3 pt-2">
                                    <button type="submit" class="btn btn-danger rounded-pill">Sign-in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6 rounded text-white text-center">
                        <div class="bg-danger rounded p-5 h-100 d-flex flex-column align-items-center justify-content-center">
                            <h3 class="font-weight-bold">Hello, Friend!</h3>
                            <p class="small my-3">Want to start free?</p>
                           <Link to="/"> <button type="submit" class="btn btn-outline-light rounded-pill">Sign-up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>
  )
}
