import { API_URL, TOKEN_NAME } from '@/constants';
import axios from "axios";
import { cookies } from "next/headers";

export default async function deleteLocation(locationId: string) {
    const token = cookies().get(TOKEN_NAME)?.value;
    await axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}