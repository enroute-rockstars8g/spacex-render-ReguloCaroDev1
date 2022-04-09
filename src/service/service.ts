export const getCapsules = async (id:number) => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/capsule/C10${id}`);
        if (response.status !== 200) return;
        const spaceX = await response.json();

        return spaceX;
    } catch (e) {
        console.log(e);

    }
};
export const getCompanys = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/company`);
        if (response.status !== 200) return;
        const spaceX = await response.json();

        return spaceX;
    } catch (e) {
        console.log(e);

    }
};
export const getCores = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/missions?&limit=1`);
        if (response.status !== 200) return;
        const spaceX = await response.json();

        return spaceX;
    } catch (e) {
        console.log(e);

    }
};