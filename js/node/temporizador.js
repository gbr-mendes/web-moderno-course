const schedule = require('node-schedule')

const job1 = schedule.scheduleJob('*/5 * 14 * * 1', function(){
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    job1.cancel()
    console.log('Cancelando tarefa')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 14
rule.second = 30

const job2 = schedule.scheduleJob(rule, function(){
    console.log('Executando tarefa2', new Date().getSeconds())
})