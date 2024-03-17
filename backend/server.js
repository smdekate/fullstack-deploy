import express from 'express'

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Home page")
})

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke 1",
            content: "first joke"
        },
        {
            id: 2,
            title: "joke 2",
            content: "second joke"
        },
        {
            id: 3,
            title: "joke 3",
            content: "third joke"
        },
        {
            id: 4,
            title: "joke 1",
            content: "fourth joke"
        },
        {
            id: 5,
            title: "joke 5",
            content: "fifth joke"
        },
    ];

    res.send(jokes)
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})