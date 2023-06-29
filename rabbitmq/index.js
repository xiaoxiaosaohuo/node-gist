import amqp from 'amqplib'

const queue = 'product_inventory'

const text = {
    item_id:'macbook',
    text:'this is a samp message'
}

const connect = async () => {
    let connection
    try {
        connection = await amqp.connect('amqp://localhost:5678')
        const channel = await connection.createChannel()
        await channel.assertQueue(queue,{durable:true})
        channel.sendToQueue(queue,Buffer.from(JSON.stringify(text)))
        console.log('message sent')
        await channel.close()
    
    } catch (error) {
        console.warn(err)
    }finally{
        if(connection){
            connection.close()
        }
    }
}
connect()
    
