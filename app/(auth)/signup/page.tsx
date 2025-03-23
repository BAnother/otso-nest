import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
export default function SignupPage(){
    return (
        <div className="bg-orange-700 px-10 py-2 rounded-md">
            <p className="text-2xl my-4 text-white">Registrarse<span></span></p>
           <div className="flex flex-col gap-2 my-4 items-center">
            <Input label="Email" type="email" isRequired={true} size="sm" ></Input>
            <Input label="Contraseña" type="password" isRequired={true}  size="sm" ></Input>
            <Input label="Repetir Contraseñá" type="password" isRequired={true}  size="sm" ></Input>
            </div>
             <div className="flex flex-col items-center gap-2">
           
            <Button color="primary">Registrarse</Button>
            <p className="text-white">
                ¿Ya tienes uuna cuenta? <link href="/login" className="text-red-200 underline">Inicia Sesión</link>
            </p>
            </div>
        </div>
    );
}