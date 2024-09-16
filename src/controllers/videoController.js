let videos = [
    {
        title: "Video #1",
        rating: 5,
        comments: 2,
        createdAt: "15 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title: "Video #2",
        rating: 5,
        comments: 2,
        createdAt: "15 minutes ago",
        views: 56,
        id: 2,
    },
    {
        title: "Video #3",
        rating: 5,
        comments: 2,
        createdAt: "15 minutes ago",
        views: 56,
        id: 3,
    },
];

export const trending = (req, res) => {
    return res.render("home", {pageTitle:"Home", videos:videos});
};
export const watch = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle:`Watching ${video.title}`, video:video});
}
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
