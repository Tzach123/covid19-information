import express from 'express'
import 'colors'

const app = express()

app.use(express.json())

app.get('disease.sh/v3/covid-19/countries/Israel')

const port = 5000
app.listen(() => console.log(`server runing in port ${port} !`.blue.bold), port)
