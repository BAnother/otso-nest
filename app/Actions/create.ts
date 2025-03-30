export async function createLocation(formData: FormData) {
    let location: any = {};
    let locationLating = [0, 0];
    
    for (const key of formData.keys()) {
        const value = formData.get(key);
        if (key === "locationLat") {
            locationLating[0] = +value;
        } else if (key === "locationLng") {
            locationLating[1] = +value;
        } else {
            location[key] = value;
        }
    }

    location.locationLating = locationLating;
    console.log(location);
}