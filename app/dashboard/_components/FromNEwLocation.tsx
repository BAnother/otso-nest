import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";

export default function FormNewLocation() {
    return (
        <form action={createLocation}>
            <Input label="Nombre" name="locationName" />
            <Input label="Direccion" name="locationAddress" />
            <Input label="Latitud" name="locationLat" />
            <Input label="Longitud" name="locationLng" />
            <Button type="submit">Subir</Button>
        </form>
    );
}

const responseLocation = await axios.get(`${API_URL}/locations`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

return (
    <form action={createLocation}>
        <Input 
            label="Nombre" 
            placeholder="Ocso Jurikiya" 
            name="locationName" 
        />
        <Input 
            label="Direccion" 
            placeholder="Av De La Luz S/N" 
            name="locationAddress" 
        />
        <Input 
            label="Latitud" 
            placeholder="-120" 
            name="locationLat" 
        />
        <Input 
            label="Longitud" 
            placeholder="20" 
            name="locationLng" 
        />
        <SelectManager 
            managers={responseManagers.data} 
            locations={responseLocation.data} 
        />
        <Button type="submit">Subir</Button>
    </form>
);