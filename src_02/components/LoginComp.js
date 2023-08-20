import './LoginComp.css';
export default function LoginComp()
{
    return(
        <div className=" loginform ">
            <form>
                <div className="mb-3">
                    <label for="uid" class=" $form-label-margin-bottom: .5rem;"><b>Username :</b></label>
                    <input type="text" class="form-control" id="uid" name="uid"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="pwd" class="form-label"><b>Password :</b></label>
                    <input type="password" class="form-control" id="pwd"></input>
                <div id="emailHelp" class="form-text">....</div>
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
                <button type="reset" className='btn btn-primary'>Clear</button>
                    
                
                {/* <b>Username :</b>
                <input type="text" name="uid"></input> <br/>
                <b>Password :</b>
                <input type="text" name="pwd"></input> <br/>
                <input type="submit" value="LOGIN"/> */}
            </form>
        </div>
    )
}