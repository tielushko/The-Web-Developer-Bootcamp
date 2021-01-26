const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //fetch the response from api.
    userQuery = form.elements.searchQuery.value;
    const config = { params: { q: userQuery }, headers: {} };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    // clearBody();
    // get the image from the response
    printImages(res.data);
    form.elements.searchQuery.value = "";
});

// const clearBody = () => {
//     const div = document.querySelector("#imgContainer");
//     for (child of div.children) {
//         document.div.remove(child);
//     }
// };

const printImages = (imageSrcList) => {
    for (let link of imageSrcList) {
        if (link.show.image) {
            const img = document.createElement("IMG");
            img.src = link.show.image.medium;
            document.body.append(img);
        }
    }
};
