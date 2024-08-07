async function loadDataFile(path) {
    try {
        const response = await fetch(path);
        // console.log(response);
        const projects = await response.json();
        // console.log(projects);
        return projects;
    } catch (error) {
        console.error('Error loading data: ', error);
        return [];
    }
}
// if the path is corrupted it will send a html format response which causes an unclear error at face value.

export {loadDataFile};
