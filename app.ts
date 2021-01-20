import ex from 'express'
import morgan from 'morgan'
import { CallApi, Call } from './Services'

const app = ex()

app.use(morgan('combined'))
app.use(ex.json())

app.get('/', (req, res) => {
    res.json({
        info: 'test',
    })
})

app.get('/api', async (req, res) => {
    const ret = await CallApi()
    console.log(ret.data)
    res.json({
        info: ret.data
    })
   
})

app.get('/test/:entry', async (req, res) => {
    const ret = await Call(req.params.entry)
    res.json({
        info: ret.data
    })
})

app.listen(process.env.PORT || 3000)
