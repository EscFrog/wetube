export const trending = (req, res) => res.send("Home Page Videos")
export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => {
    return res.send(`See Video #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");