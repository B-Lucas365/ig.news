import { Button } from "./style"
import {FaGithub} from 'react-icons/fa'
import { FiX} from 'react-icons/fi'



export const SigninButton = () => {
    const isUserLoggedIn = true

    return (
        <Button>
            {isUserLoggedIn &&
                <>
                    <FaGithub color="#04d361"/>
                    Lucas Renan
                    <FiX className="closeIcon"/>
                </>
            }

            {!isUserLoggedIn &&
                <>
                    <FaGithub color="#eba417"/>
                    Sign in with Github
                </>
            }

        </Button>        
    ) 
}