import { useLoaderData } from "react-router-dom";

const Connexion = () => {
    const users: any = useLoaderData();
    console.log(`users`, users);
    return (
        <>Coucou</>
    );
}

export default Connexion;