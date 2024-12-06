import Navegation from '../../components/Navegation/Navegation'

export default function Contact() {
    return(
        <div>
        <Navegation/>
            <div className='bg-primary d-flex flex-column'>
                <h1>Contact</h1>
                    <p>Leave us your information so we can contact you</p>
                    <form>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name'/>

                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email'/>

                        <label htmlFor='message'>Message</label>
                        <textarea id='message'></textarea>

                        <input type='submit' value={"Send"}/>
                    </form>        
            </div>
 
        </div>
        
    )
}

//no hace falta hacerlo funcional, si quieren ponerle un action pueden usar la forma gratuita de formspree