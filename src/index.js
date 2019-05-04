const f = (req, res, next) => {
    if (req.url === '/yuri') {
        res.status(200).json({ status: 1 });
    }
    return next();
};

export default f;
