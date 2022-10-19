const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
const holidays = {
    'january':{
       'name':['New Year\'s Day', 'Three Kings Day', 'Martin Luther King\'s Birtday',]
    },
    'february':{
        'name':['Chinese New Year', 'Groundhog\'s day', 'Lincoln\'s Birthday', 'Valentines Day', 'President\'s Day', 'Washingtion\'s Birthday',]
    },
    'march':{
        'name':['Mardi Gras', 'Ash Wednesday', 'International Women\'s Day', 'St.Patrick\'s day', 'Internation Earth Day',]
    },
    'april':{
        'name':['April Fool\'s Day', 'Ramadan', 'Palm Sunday', 'Good Friday', 'Passover', 'Easter Sunday', 'Patriot\'s Day', 'Earth Day', 'Abor Day'], 
    },
    'may':{
        'name':['National Teacher\'s Day','Starwars Day', 'Cino de Mayo', 'Mother\'s Day', 'Memorial Day']
    },
    'june':{
        'name':['D Day', 'Flag Day', 'Juneteenth Day', 'Summer Solstice']
    },
    'july':{
        'name':['Canada Day', 'Independence Day']
    },
    'august':{
        'name':['No National Holiday in August']
    },
    'september':{
        'name':['Labor Day', '911 Remembrance', 'Grandparent\'s Day', 'Constitution Day', 'International Peace Day', 'Native American Day', 'Rosh Hashanah']
    },
    'october':{
        'name':['International Day for the Elderly', 'Yom Kippur', 'National Indigenous People Day', 'Boss\'s Day', 'Halloween']
    },
    'November':{
        'name':['All Saint\'s Day', 'Dia de Los Muertos', 'All Soul\'s Day', 'U.S General Election Day', 'Verteran\'s Day','Thanksgiving Day', 'Advent']
    },
    'December':{
        'name':['Pearl harbor Day', 'Chanukah', 'Winter Solstice', 'Christmas', 'Kwanzaa', 'New Year\'s Eve']
    },
    'unknown': {
        'name': ['Please search another Month']
    }
}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:month', (req, res)=>{
    const month = req.params.month.toLocaleLowerCase()
    if(holidays[month]){
       res.json(holidays[month])  
    } else  {
        res.json(holidays['unknown'])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`GO TO PORT ${PORT}`)
})