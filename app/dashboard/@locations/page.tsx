import { cookies } from "next/headers";
import { Location } from "@/entities";
import { TOKEN_NAME } from "@/constants";
import SelectionCation from "./components/SelectLocation";
import LocationCard from "./components/LocationCard";
const LocationsPage = async ({
    searchParams,
};

    searchParams: { [key: string]: string | string[] | undefined };
}

    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;
    let { data } = await axios.get<Location[]>(
    "http://127.0.0.1:4000/locations"    karlo-pry, Yesterday
    {
    headers: {
    Authorization: `Bearer ${token}',
    },
    },
    }
}