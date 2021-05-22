const express = require('express');
const app = express()
const port = 3000 

app.use(function (req, res, next) {
  
  const startTime = new Date()
  console.log(`${startTime.toLocaleString()} | ${req.method} from ${req.originalUrl}[STARTED]`);
  
  res.on('finish', () => {   
    const endTime = new Date()
    const duration  = endTime - startTime
    console.log(`${endTime.toLocaleString()} | ${req.method} from ${req.originalUrl}| total times: ${duration}ms [FINISHED]`);
  })

  next();
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo');
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})




app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})